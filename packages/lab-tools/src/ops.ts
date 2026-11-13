/** Host service seams and result shaping for the LabSideBar agent tools. */

/** One durable workspace record as the registry exposes it. */
export interface WorkspaceRecord {
  readonly id: string;
  readonly title: string;
  readonly path: string;
  readonly sessionIds: readonly string[];
}

/** The registry calls the tools use. */
export interface WorkspaceRegistryLike {
  list(): readonly WorkspaceRecord[];
  get(id: string): WorkspaceRecord | undefined;
  readonly archivedSessionIds: readonly string[];
  readonly pinnedSessionIds: readonly string[];
}

/** One workspace projection as the controller returns it. */
export interface WorkspaceViewLike {
  readonly workspaceId: string;
  readonly title: string;
  readonly path: string;
  readonly sessionIds: readonly string[];
}

/** The workspace controller calls the tools use. */
export interface WorkspaceControllerLike {
  create(request: { path: string }): Promise<{ workspace: WorkspaceViewLike; created: boolean }>;
  rename(request: { workspaceId: string; title: string }): Promise<{ workspace: WorkspaceViewLike }>;
  delete(request: { workspaceId: string }): Promise<{ deleted: true }>;
  insertBefore(request: { workspaceId: string; beforeWorkspaceId?: string }): Promise<{ workspaceIds: readonly string[] }>;
  archiveSession(request: { sessionId: string; stopActivity?: boolean }): Promise<{ archivedSessionIds: readonly string[] }>;
  unarchiveSession(request: { sessionId: string }): Promise<{ archivedSessionIds: readonly string[] }>;
  pinSession(request: { sessionId: string }): Promise<{ pinnedSessionIds: readonly string[] }>;
  unpinSession(request: { sessionId: string }): Promise<{ pinnedSessionIds: readonly string[] }>;
}

/** One session summary as the session controller returns it. */
export interface SessionSummaryLike {
  readonly sessionId: string;
  readonly running: boolean;
  readonly projections?: { readonly values?: { readonly title?: string | null } };
}

/** The session controller calls the tools use. */
export interface SessionControllerLike {
  list(request: { cursor?: string }, signal: AbortSignal): Promise<{ items: readonly SessionSummaryLike[] }>;
  rename(request: { sessionId: string; title: string }): Promise<{ title: string; seq: number }>;
  fork(request: { sessionId: string; atSeq?: number }): Promise<{ sessionId: string }>;
}

/** The Host services the tools call. */
export interface ToolServices {
  readonly registry: WorkspaceRegistryLike;
  readonly workspaces: WorkspaceControllerLike;
  readonly sessions: SessionControllerLike;
}

/** One workspace as the model sees it. */
export interface WorkspaceEntry {
  readonly id: string;
  readonly title: string;
  readonly path: string;
  readonly sessionCount: number;
  readonly order: number;
}

/** One session as the model sees it. */
export interface SessionEntry {
  readonly id: string;
  readonly workspaceId: string | null;
  readonly title: string | null;
  readonly archived: boolean;
  readonly pinned: boolean;
  readonly running: boolean;
}

function orderOf(registry: WorkspaceRegistryLike, workspaceId: string): number {
  const index = registry.list().findIndex((workspace) => workspace.id === workspaceId);
  return index < 0 ? 0 : index;
}

/** Project one registry record into the model-facing entry. */
function entryOf(record: WorkspaceRecord, order: number): WorkspaceEntry {
  return {
    id: record.id,
    title: record.title,
    path: record.path,
    sessionCount: record.sessionIds.length,
    order,
  };
}

/** Project one controller view into the model-facing entry. */
function entryOfView(registry: WorkspaceRegistryLike, view: WorkspaceViewLike): WorkspaceEntry {
  return {
    id: view.workspaceId,
    title: view.title,
    path: view.path,
    sessionCount: view.sessionIds.length,
    order: orderOf(registry, view.workspaceId),
  };
}

/** List every registered workspace in registry order. */
export function listWorkspaces(registry: WorkspaceRegistryLike): WorkspaceEntry[] {
  return registry.list().map((workspace, order) => entryOf(workspace, order));
}

/** Create or idempotently resolve a workspace, optionally titling a new record. */
export async function createWorkspace(
  services: ToolServices,
  path: string,
  title: string | undefined,
): Promise<{ workspace: WorkspaceEntry; created: boolean }> {
  const created = await services.workspaces.create({ path });
  let view = created.workspace;
  if (created.created && title !== undefined) {
    view = (await services.workspaces.rename({ workspaceId: view.workspaceId, title })).workspace;
  }
  return { workspace: entryOfView(services.registry, view), created: created.created };
}

/** Rename one workspace and return its updated entry. */
export async function renameWorkspace(
  services: ToolServices,
  workspaceId: string,
  title: string,
): Promise<WorkspaceEntry> {
  const value = await services.workspaces.rename({ workspaceId, title });
  return entryOfView(services.registry, value.workspace);
}

/** Delete one workspace registration and return the removed entry. */
export async function deleteWorkspace(
  services: ToolServices,
  workspaceId: string,
): Promise<WorkspaceEntry> {
  const record = services.registry.get(workspaceId);
  if (record === undefined) throw new Error('unknown workspace ' + workspaceId);
  const entry = entryOf(record, orderOf(services.registry, workspaceId));
  await services.workspaces.delete({ workspaceId });
  return entry;
}

/** Move one workspace and return the complete committed order. */
export async function reorderWorkspaces(
  services: ToolServices,
  workspaceId: string,
  beforeWorkspaceId: string | undefined,
): Promise<string[]> {
  const value = await services.workspaces.insertBefore({ workspaceId, beforeWorkspaceId });
  return [...value.workspaceIds];
}

/** List sessions with workspace membership and archived and pinned flags. */
export async function listSessions(
  services: ToolServices,
  request: { workspaceId?: string; includeArchived?: boolean },
  signal: AbortSignal,
): Promise<SessionEntry[]> {
  const bySession = new Map<string, string>();
  for (const workspace of services.registry.list()) {
    for (const sessionId of workspace.sessionIds) bySession.set(sessionId, workspace.id);
  }
  const archived = new Set(services.registry.archivedSessionIds);
  const pinned = new Set(services.registry.pinnedSessionIds);
  const value = await services.sessions.list({}, signal);
  const rows: SessionEntry[] = [];
  for (const summary of value.items) {
    const workspaceId = bySession.get(summary.sessionId) ?? null;
    if (request.workspaceId !== undefined && workspaceId !== request.workspaceId) continue;
    const isArchived = archived.has(summary.sessionId);
    if (request.includeArchived !== true && isArchived) continue;
    rows.push({
      id: summary.sessionId,
      workspaceId,
      title: summary.projections?.values?.title ?? null,
      archived: isArchived,
      pinned: pinned.has(summary.sessionId),
      running: summary.running,
    });
  }
  return rows;
}

/** Archive one session and return the complete archive set. */
export async function archiveSession(
  services: ToolServices,
  sessionId: string,
  stopActivity: boolean | undefined,
): Promise<string[]> {
  const value = await services.workspaces.archiveSession({ sessionId, stopActivity });
  return [...value.archivedSessionIds];
}

/** Unarchive one session and return the complete archive set. */
export async function unarchiveSession(
  services: ToolServices,
  sessionId: string,
): Promise<string[]> {
  const value = await services.workspaces.unarchiveSession({ sessionId });
  return [...value.archivedSessionIds];
}

/** Pin one session and return the complete pin set. */
export async function pinSession(
  services: ToolServices,
  sessionId: string,
): Promise<string[]> {
  const value = await services.workspaces.pinSession({ sessionId });
  return [...value.pinnedSessionIds];
}

/** Unpin one session and return the complete pin set. */
export async function unpinSession(
  services: ToolServices,
  sessionId: string,
): Promise<string[]> {
  const value = await services.workspaces.unpinSession({ sessionId });
  return [...value.pinnedSessionIds];
}

/** Rename one session and return the accepted title and event seq. */
export async function renameSession(
  services: ToolServices,
  sessionId: string,
  title: string,
): Promise<{ title: string; seq: number }> {
  return services.sessions.rename({ sessionId, title });
}

/** Fork one session and return the new session id. */
export async function forkSession(
  services: ToolServices,
  sessionId: string,
  atSeq: number | undefined,
): Promise<string> {
  const value = await services.sessions.fork({ sessionId, atSeq });
  return value.sessionId;
}
