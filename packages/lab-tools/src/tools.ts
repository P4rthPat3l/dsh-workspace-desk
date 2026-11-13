/** The two model-facing LabSideBar tools: workspace and session. */
import type { ContentBlock } from '@deepseek-ai/dsh-llm';
import type { JsonSchemaNode, ToolDefinition, ToolRunContext } from '@deepseek-ai/dsh-tools';
import { confirmDestructive, type ApprovalServiceLike } from './approve.ts';
import {
  archiveSession,
  createWorkspace,
  deleteWorkspace,
  forkSession,
  listSessions,
  listWorkspaces,
  pinSession,
  renameSession,
  renameWorkspace,
  reorderWorkspaces,
  unarchiveSession,
  unpinSession,
  type SessionEntry,
  type ToolServices,
  type WorkspaceEntry,
} from './ops.ts';
import {
  optionalBoolean,
  optionalInteger,
  optionalString,
  optionalTitle,
  readAction,
  requireAbsolutePath,
  requireString,
  requireTitle,
  SESSION_ACTIONS,
  isSessionAction,
  WORKSPACE_ACTIONS,
  isWorkspaceAction,
  type SessionAction,
  type WorkspaceAction,
} from './validate.ts';

/** Canonical value of one workspace tool call. */
export type WorkspaceValue =
  | { readonly action: 'list'; readonly workspaces: WorkspaceEntry[] }
  | { readonly action: 'create'; readonly workspace: WorkspaceEntry; readonly created: boolean }
  | { readonly action: 'rename'; readonly workspace: WorkspaceEntry }
  | {
      readonly action: 'delete';
      readonly deleted: true;
      readonly workspace: WorkspaceEntry;
      readonly directoryRetained: true;
      readonly sessionsRetained: true;
    }
  | { readonly action: 'reorder'; readonly workspaceIds: string[] };

/** Canonical value of one session tool call. */
export type SessionValue =
  | { readonly action: 'list'; readonly sessions: SessionEntry[] }
  | {
      readonly action: 'archive';
      readonly sessionId: string;
      readonly archived: true;
      readonly archivedSessionIds: string[];
    }
  | {
      readonly action: 'unarchive';
      readonly sessionId: string;
      readonly archived: false;
      readonly archivedSessionIds: string[];
    }
  | {
      readonly action: 'pin';
      readonly sessionId: string;
      readonly pinned: true;
      readonly pinnedSessionIds: string[];
    }
  | {
      readonly action: 'unpin';
      readonly sessionId: string;
      readonly pinned: false;
      readonly pinnedSessionIds: string[];
    }
  | {
      readonly action: 'rename';
      readonly sessionId: string;
      readonly title: string;
      readonly seq: number;
    }
  | { readonly action: 'fork'; readonly sessionId: string; readonly sourceSessionId: string };

interface LabTool<Value> {
  readonly name: string;
  readonly description: string;
  readonly parameters: Record<string, unknown>;
  readonly output: {
    readonly schema: JsonSchemaNode;
    render(args: unknown, value: Value): ContentBlock[];
  };
  execute(args: unknown, exec: ToolRunContext): Promise<Value>;
}

/** One registered tool; the union keeps the value type precise. */
export type LabToolDefinition = LabTool<WorkspaceValue> | LabTool<SessionValue>;

function text(value: string): ContentBlock[] {
  return [{ type: 'text', text: value }];
}

function assertNever(value: never): never {
  throw new Error('unhandled action ' + String(value));
}

function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function withContext<T>(context: string, run: () => Promise<T>): Promise<T> {
  try {
    return await run();
  } catch (error) {
    throw new Error(context + ': ' + messageOf(error));
  }
}

function nullableString(): JsonSchemaNode {
  return { oneOf: [{ type: 'string' }, { type: 'null' }] };
}

const workspaceEntrySchema: JsonSchemaNode = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'title', 'path', 'sessionCount', 'order'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    path: { type: 'string' },
    sessionCount: { type: 'integer' },
    order: { type: 'integer' },
  },
};

const sessionEntrySchema: JsonSchemaNode = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'workspaceId', 'title', 'archived', 'pinned', 'running'],
  properties: {
    id: { type: 'string' },
    workspaceId: nullableString(),
    title: nullableString(),
    archived: { type: 'boolean' },
    pinned: { type: 'boolean' },
    running: { type: 'boolean' },
  },
};

const workspaceOutputSchema: JsonSchemaNode = {
  type: 'object',
  additionalProperties: false,
  required: ['action'],
  properties: {
    action: { type: 'string', enum: [...WORKSPACE_ACTIONS] },
    workspaces: { type: 'array', items: workspaceEntrySchema },
    workspace: workspaceEntrySchema,
    created: { type: 'boolean' },
    deleted: { type: 'boolean' },
    directoryRetained: { type: 'boolean' },
    sessionsRetained: { type: 'boolean' },
    workspaceIds: { type: 'array', items: { type: 'string' } },
  },
};

const sessionOutputSchema: JsonSchemaNode = {
  type: 'object',
  additionalProperties: false,
  required: ['action'],
  properties: {
    action: { type: 'string', enum: [...SESSION_ACTIONS] },
    sessions: { type: 'array', items: sessionEntrySchema },
    sessionId: { type: 'string' },
    sourceSessionId: { type: 'string' },
    title: { type: 'string' },
    seq: { type: 'integer' },
    archived: { type: 'boolean' },
    pinned: { type: 'boolean' },
    archivedSessionIds: { type: 'array', items: { type: 'string' } },
    pinnedSessionIds: { type: 'array', items: { type: 'string' } },
  },
};

const WORKSPACE_PARAMETERS: Record<string, unknown> = {
  type: 'object',
  additionalProperties: false,
  required: ['action'],
  properties: {
    action: {
      type: 'string',
      enum: [...WORKSPACE_ACTIONS],
      description: 'Operation to perform.',
    },
    workspaceId: { type: 'string', description: 'Workspace id, required for rename, delete, and reorder.' },
    path: { type: 'string', description: 'Absolute existing directory, required for create.' },
    title: {
      type: 'string',
      description: 'Title of 1 to 120 characters: required for rename, optional for create.',
    },
    beforeWorkspaceId: {
      type: 'string',
      description: 'Workspace to move before; omit to move to the end.',
    },
  },
};

const SESSION_PARAMETERS: Record<string, unknown> = {
  type: 'object',
  additionalProperties: false,
  required: ['action'],
  properties: {
    action: {
      type: 'string',
      enum: [...SESSION_ACTIONS],
      description: 'Operation to perform.',
    },
    sessionId: { type: 'string', description: 'Session id, required for every action except list.' },
    workspaceId: { type: 'string', description: 'Optional workspace filter for list.' },
    includeArchived: { type: 'boolean', description: 'Include archived sessions in list; default false.' },
    title: { type: 'string', description: 'New title of 1 to 120 characters, required for rename.' },
    stopActivity: {
      type: 'boolean',
      description: 'Stop running work instead of refusing the archive; archive only.',
    },
    atSeq: {
      type: 'integer',
      description: 'Inclusive source event seq to fork at; omit for the latest completed turn.',
    },
  },
};

const WORKSPACE_DESCRIPTION = [
  "List and change the user's workspaces in the DeepSeek Harness.",
  'Actions:',
  '- list: every workspace with id, title, path, session count, and order.',
  '- create: register an existing absolute directory. A title renames only a newly created record; an already registered path returns created false.',
  '- rename: change one workspace title (1 to 120 characters).',
  '- delete: remove one registration after the user approves. The directory and its sessions remain.',
  '- reorder: move one workspace before beforeWorkspaceId, or to the end when it is omitted.',
  'Changes are durable and reach the sidebar without a page reload.',
].join('\n');

const SESSION_DESCRIPTION = [
  "List and change the user's sessions in the DeepSeek Harness.",
  'Actions:',
  '- list: sessions with id, workspace, title, archive flag, pin flag, and running state. Filter by workspaceId; archived sessions require includeArchived true.',
  '- archive: hide one session from grouping surfaces. A running session is refused unless stopActivity is true.',
  '- unarchive: restore one archived session to its workspace.',
  '- pin or unpin: move one session into or out of the pinned group.',
  '- rename: change one session title (1 to 120 characters).',
  '- fork: copy one session into a new session, at atSeq or the latest completed turn.',
  'Changes are durable and reach the sidebar without a page reload.',
].join('\n');

function renderWorkspace(value: WorkspaceValue): string {
  switch (value.action) {
    case 'list': {
      if (value.workspaces.length === 0) return 'No workspaces are registered.';
      const rows = value.workspaces.map((workspace) =>
        '- ' + workspace.id + ' "' + workspace.title + '" ' + workspace.path +
        ' (' + workspace.sessionCount + ' sessions, order ' + workspace.order + ')');
      return value.workspaces.length + ' workspaces:\n' + rows.join('\n');
    }
    case 'create':
      return value.created
        ? 'Created workspace "' + value.workspace.title + '" (' + value.workspace.id + ') at ' + value.workspace.path + '.'
        : 'Workspace "' + value.workspace.title + '" (' + value.workspace.id + ') was already registered at ' + value.workspace.path + '.';
    case 'rename':
      return 'Renamed workspace ' + value.workspace.id + ' to "' + value.workspace.title + '".';
    case 'delete':
      return 'Deleted workspace registration ' + value.workspace.id + ' ("' + value.workspace.title + '" at ' +
        value.workspace.path + '). The directory and its sessions remain.';
    case 'reorder':
      return 'Workspace order is now: ' + value.workspaceIds.join(', ') + '.';
    default:
      return assertNever(value);
  }
}

function renderSession(value: SessionValue): string {
  switch (value.action) {
    case 'list': {
      if (value.sessions.length === 0) return 'No sessions match.';
      const rows = value.sessions.map((session) => {
        const title = session.title === null ? '(untitled)' : '"' + session.title + '"';
        const state = session.running ? 'running' : 'idle';
        const flags = (session.archived ? ' archived' : '') + (session.pinned ? ' pinned' : '');
        const workspace = session.workspaceId === null ? 'no workspace' : 'workspace ' + session.workspaceId;
        return '- ' + session.id + ' ' + title + ' ' + workspace + ' ' + state + flags;
      });
      return value.sessions.length + ' sessions:\n' + rows.join('\n');
    }
    case 'archive':
      return 'Archived session ' + value.sessionId + '. Archived sessions: ' +
        (value.archivedSessionIds.length === 0 ? '(none)' : value.archivedSessionIds.join(', ')) + '.';
    case 'unarchive':
      return 'Unarchived session ' + value.sessionId + '. Archived sessions: ' +
        (value.archivedSessionIds.length === 0 ? '(none)' : value.archivedSessionIds.join(', ')) + '.';
    case 'pin':
      return 'Pinned session ' + value.sessionId + '. Pinned sessions: ' +
        (value.pinnedSessionIds.length === 0 ? '(none)' : value.pinnedSessionIds.join(', ')) + '.';
    case 'unpin':
      return 'Unpinned session ' + value.sessionId + '. Pinned sessions: ' +
        (value.pinnedSessionIds.length === 0 ? '(none)' : value.pinnedSessionIds.join(', ')) + '.';
    case 'rename':
      return 'Renamed session ' + value.sessionId + ' to "' + value.title + '" at seq ' + value.seq + '.';
    case 'fork':
      return 'Forked session ' + value.sourceSessionId + ' into new session ' + value.sessionId + '.';
    default:
      return assertNever(value);
  }
}

function workspaceTool(services: ToolServices, approval: ApprovalServiceLike): LabTool<WorkspaceValue> {
  return {
    name: 'workspace',
    description: WORKSPACE_DESCRIPTION,
    parameters: WORKSPACE_PARAMETERS,
    output: { schema: workspaceOutputSchema, render: (_args, value) => text(renderWorkspace(value)) },
    async execute(args, exec): Promise<WorkspaceValue> {
      const { record, action } = readAction(args, isWorkspaceAction, WORKSPACE_ACTIONS, 'workspace');
      switch (action) {
        case 'list': {
          return { action, workspaces: listWorkspaces(services.registry) };
        }
        case 'create': {
          const path = requireAbsolutePath(record, 'path', 'workspace create');
          const title = optionalTitle(record, 'title', 'workspace create');
          const created = await withContext('workspace create failed for ' + path, () =>
            createWorkspace(services, path, title));
          return { action, workspace: created.workspace, created: created.created };
        }
        case 'rename': {
          const workspaceId = requireString(record, 'workspaceId', 'workspace rename');
          const title = requireTitle(record, 'title', 'workspace rename');
          if (services.registry.get(workspaceId) === undefined) {
            throw new Error('workspace rename: unknown workspace ' + workspaceId);
          }
          const workspace = await withContext('workspace rename failed for ' + workspaceId, () =>
            renameWorkspace(services, workspaceId, title));
          return { action, workspace };
        }
        case 'delete': {
          const workspaceId = requireString(record, 'workspaceId', 'workspace delete');
          const recordBefore = services.registry.get(workspaceId);
          if (recordBefore === undefined) {
            throw new Error('workspace delete: unknown workspace ' + workspaceId);
          }
          await confirmDestructive(
            approval,
            exec,
            'Delete the workspace registration "' + recordBefore.title + '" at ' + recordBefore.path +
              '? The directory and its sessions remain.',
          );
          const workspace = await withContext('workspace delete failed for ' + workspaceId, () =>
            deleteWorkspace(services, workspaceId));
          return {
            action,
            deleted: true,
            workspace,
            directoryRetained: true,
            sessionsRetained: true,
          };
        }
        case 'reorder': {
          const workspaceId = requireString(record, 'workspaceId', 'workspace reorder');
          if (services.registry.get(workspaceId) === undefined) {
            throw new Error('workspace reorder: unknown workspace ' + workspaceId);
          }
          const beforeWorkspaceId = optionalString(record, 'beforeWorkspaceId', 'workspace reorder');
          if (beforeWorkspaceId !== undefined && services.registry.get(beforeWorkspaceId) === undefined) {
            throw new Error('workspace reorder: unknown beforeWorkspaceId ' + beforeWorkspaceId);
          }
          const workspaceIds = await withContext('workspace reorder failed for ' + workspaceId, () =>
            reorderWorkspaces(services, workspaceId, beforeWorkspaceId));
          return { action, workspaceIds };
        }
        default:
          return assertNever(action);
      }
    },
  };
}

function sessionTool(services: ToolServices): LabTool<SessionValue> {
  return {
    name: 'session',
    description: SESSION_DESCRIPTION,
    parameters: SESSION_PARAMETERS,
    output: { schema: sessionOutputSchema, render: (_args, value) => text(renderSession(value)) },
    async execute(args, exec): Promise<SessionValue> {
      const { record, action } = readAction(args, isSessionAction, SESSION_ACTIONS, 'session');
      const mutationContext = (sessionId: string): string => 'session ' + action + ' failed for ' + sessionId;
      switch (action) {
        case 'list': {
          const workspaceId = optionalString(record, 'workspaceId', 'session list');
          if (workspaceId !== undefined && services.registry.get(workspaceId) === undefined) {
            throw new Error('session list: unknown workspace ' + workspaceId);
          }
          const includeArchived = optionalBoolean(record, 'includeArchived', 'session list');
          const sessions = await withContext('session list failed', () =>
            listSessions(services, { workspaceId, includeArchived }, exec.signal));
          return { action, sessions };
        }
        case 'archive': {
          const sessionId = requireString(record, 'sessionId', 'session archive');
          const stopActivity = optionalBoolean(record, 'stopActivity', 'session archive');
          const archivedSessionIds = await withContext(mutationContext(sessionId), () =>
            archiveSession(services, sessionId, stopActivity));
          return { action, sessionId, archived: true, archivedSessionIds };
        }
        case 'unarchive': {
          const sessionId = requireString(record, 'sessionId', 'session unarchive');
          const archivedSessionIds = await withContext(mutationContext(sessionId), () =>
            unarchiveSession(services, sessionId));
          return { action, sessionId, archived: false, archivedSessionIds };
        }
        case 'pin': {
          const sessionId = requireString(record, 'sessionId', 'session pin');
          const pinnedSessionIds = await withContext(mutationContext(sessionId), () =>
            pinSession(services, sessionId));
          return { action, sessionId, pinned: true, pinnedSessionIds };
        }
        case 'unpin': {
          const sessionId = requireString(record, 'sessionId', 'session unpin');
          const pinnedSessionIds = await withContext(mutationContext(sessionId), () =>
            unpinSession(services, sessionId));
          return { action, sessionId, pinned: false, pinnedSessionIds };
        }
        case 'rename': {
          const sessionId = requireString(record, 'sessionId', 'session rename');
          const title = requireTitle(record, 'title', 'session rename');
          const renamed = await withContext(mutationContext(sessionId), () =>
            renameSession(services, sessionId, title));
          return { action, sessionId, title: renamed.title, seq: renamed.seq };
        }
        case 'fork': {
          const sessionId = requireString(record, 'sessionId', 'session fork');
          const atSeq = optionalInteger(record, 'atSeq', 'session fork', 0);
          const forkedSessionId = await withContext(mutationContext(sessionId), () =>
            forkSession(services, sessionId, atSeq));
          return { action, sessionId: forkedSessionId, sourceSessionId: sessionId };
        }
        default:
          return assertNever(action);
      }
    },
  };
}

/** Build both tool definitions over the Host services. */
export function createTools(services: ToolServices, approval: ApprovalServiceLike): LabToolDefinition[] {
  return [workspaceTool(services, approval), sessionTool(services)];
}
