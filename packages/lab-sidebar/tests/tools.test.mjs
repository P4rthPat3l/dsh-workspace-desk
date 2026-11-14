import test from 'node:test';
import assert from 'node:assert/strict';
import { apply } from '../src/tools/index.ts';

/** In-memory Host services that follow the real request and value shapes. */
function fixture() {
  const state = {
    workspaces: [
      { id: 'w1', title: 'Alpha', path: '/work/alpha', sessionIds: ['s1', 's2'] },
      { id: 'w2', title: 'Beta', path: '/work/beta', sessionIds: ['s3'] },
      { id: 'w3', title: 'Gamma', path: '/work/gamma', sessionIds: [] },
    ],
    archived: ['s2'],
    pinned: ['s1'],
    sessions: [
      { sessionId: 's1', running: true, projections: { values: { title: 'First' } } },
      { sessionId: 's2', running: false, projections: { values: { title: 'Second' } } },
      { sessionId: 's3', running: false, projections: { values: { title: null } } },
    ],
    calls: [],
    approvalRequests: [],
    approvalOutcome: 'allowed-once',
    warnings: [],
    tools: new Map(),
  };

  const view = (workspace) => ({
    workspaceId: workspace.id,
    title: workspace.title,
    path: workspace.path,
    sessionIds: workspace.sessionIds,
  });

  const registry = {
    list: () => state.workspaces,
    get: (id) => state.workspaces.find((workspace) => workspace.id === id),
    get archivedSessionIds() { return state.archived; },
    get pinnedSessionIds() { return state.pinned; },
  };

  const workspaceController = {
    async create(request) {
      state.calls.push({ name: 'create', request });
      if (request.path === '/missing') {
        throw new Error('workspace/invalid-path: ' + request.path + ' does not exist');
      }
      const existing = state.workspaces.find((workspace) => workspace.path === request.path);
      if (existing !== undefined) return { workspace: view(existing), created: false };
      const segment = request.path.slice(request.path.lastIndexOf('/') + 1);
      const record = { id: 'w4', title: segment, path: request.path, sessionIds: [] };
      state.workspaces.unshift(record);
      return { workspace: view(record), created: true };
    },
    async rename(request) {
      state.calls.push({ name: 'rename', request });
      const workspace = state.workspaces.find((entry) => entry.id === request.workspaceId);
      if (workspace === undefined) throw new Error('workspace/not-found: ' + request.workspaceId);
      workspace.title = request.title;
      return { workspace: view(workspace) };
    },
    async delete(request) {
      state.calls.push({ name: 'delete', request });
      state.workspaces = state.workspaces.filter((entry) => entry.id !== request.workspaceId);
      return { deleted: true };
    },
    async insertBefore(request) {
      state.calls.push({ name: 'insertBefore', request });
      const moved = state.workspaces.find((entry) => entry.id === request.workspaceId);
      if (moved === undefined) throw new Error('workspace/not-found: ' + request.workspaceId);
      state.workspaces = state.workspaces.filter((entry) => entry.id !== request.workspaceId);
      const index = request.beforeWorkspaceId === undefined
        ? state.workspaces.length
        : state.workspaces.findIndex((entry) => entry.id === request.beforeWorkspaceId);
      state.workspaces.splice(index < 0 ? state.workspaces.length : index, 0, moved);
      return { workspaceIds: state.workspaces.map((entry) => entry.id) };
    },
    async archiveSession(request) {
      state.calls.push({ name: 'archiveSession', request });
      const session = state.sessions.find((entry) => entry.sessionId === request.sessionId);
      if (session === undefined) throw new Error('workspace/unknown-session: ' + request.sessionId);
      if (session.running && request.stopActivity !== true) {
        throw new Error('workspace/session-active: session ' + request.sessionId + ' is running');
      }
      if (!state.archived.includes(request.sessionId)) state.archived.push(request.sessionId);
      state.pinned = state.pinned.filter((id) => id !== request.sessionId);
      return { archivedSessionIds: [...state.archived] };
    },
    async unarchiveSession(request) {
      state.calls.push({ name: 'unarchiveSession', request });
      state.archived = state.archived.filter((id) => id !== request.sessionId);
      return { archivedSessionIds: [...state.archived] };
    },
    async pinSession(request) {
      state.calls.push({ name: 'pinSession', request });
      if (state.archived.includes(request.sessionId)) {
        throw new Error('workspace/archived-session: ' + request.sessionId);
      }
      if (!state.pinned.includes(request.sessionId)) state.pinned.unshift(request.sessionId);
      return { pinnedSessionIds: [...state.pinned] };
    },
    async unpinSession(request) {
      state.calls.push({ name: 'unpinSession', request });
      state.pinned = state.pinned.filter((id) => id !== request.sessionId);
      return { pinnedSessionIds: [...state.pinned] };
    },
  };

  const sessionController = {
    async list(_request, _signal) {
      state.calls.push({ name: 'session.list' });
      return { items: state.sessions };
    },
    async rename(request) {
      state.calls.push({ name: 'session.rename', request });
      const session = state.sessions.find((entry) => entry.sessionId === request.sessionId);
      if (session === undefined) throw new Error('session/not-found: ' + request.sessionId);
      session.projections = { values: { title: request.title } };
      return { title: request.title, seq: 7 };
    },
    async fork(request) {
      state.calls.push({ name: 'session.fork', request });
      return { sessionId: 'fork-1' };
    },
  };

  const approval = {
    async request(request) {
      state.approvalRequests.push(request);
      return state.approvalOutcome;
    },
  };

  const tools = {
    register(definition) {
      state.tools.set(definition.name, definition);
      return () => {};
    },
  };

  const ctx = {
    tools,
    workspaceRegistry: registry,
    workspaceController,
    sessionController,
    approval,
    logger: () => ({ warn: (message) => state.warnings.push(message) }),
  };

  return { state, ctx };
}

function callTool(state, name) {
  const definition = state.tools.get(name);
  assert.ok(definition, name + ' is registered');
  return definition;
}

function execContext() {
  return {
    agent: { sessionId: 's1' },
    signal: new AbortController().signal,
    callId: 'call-1',
  };
}

async function run(state, name, args) {
  return callTool(state, name).execute(args, execContext());
}

test('AC-001: workspace list returns every workspace with id, title, path, count, and order', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'workspace', { action: 'list' });
  assert.equal(value.action, 'list');
  assert.equal(value.workspaces.length, 3);
  assert.deepEqual(value.workspaces[0], {
    id: 'w1', title: 'Alpha', path: '/work/alpha', sessionCount: 2, order: 0,
  });
  assert.deepEqual(value.workspaces[2], {
    id: 'w3', title: 'Gamma', path: '/work/gamma', sessionCount: 0, order: 2,
  });
});

test('AC-002: create registers an existing path and returns its id', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'workspace', { action: 'create', path: '/work/new' });
  assert.equal(value.created, true);
  assert.equal(value.workspace.id, 'w4');
  assert.equal(state.workspaces.length, 4);
});

test('AC-003: create fails naming a missing path and leaves the registry unchanged', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  await assert.rejects(
    run(state, 'workspace', { action: 'create', path: '/missing' }),
    /\/missing/,
  );
  assert.equal(state.workspaces.length, 3);
});

test('AC-004: create on a registered path returns created false without a second record', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'workspace', { action: 'create', path: '/work/alpha' });
  assert.equal(value.created, false);
  assert.equal(value.workspace.id, 'w1');
  assert.equal(state.workspaces.length, 3);
});

test('AC-005: rename stores the trimmed title and returns it', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'workspace', {
    action: 'rename', workspaceId: 'w2', title: '  Beta Two  ',
  });
  assert.equal(value.workspace.title, 'Beta Two');
  assert.equal(state.workspaces[1].title, 'Beta Two');
});

test('AC-006: a blank or overlong title is rejected and nothing changes', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  await assert.rejects(
    run(state, 'workspace', { action: 'rename', workspaceId: 'w2', title: '   ' }),
    /title must be a non-empty string/,
  );
  await assert.rejects(
    run(state, 'workspace', { action: 'rename', workspaceId: 'w2', title: 'x'.repeat(121) }),
    /limit is 120/,
  );
  assert.equal(state.workspaces[1].title, 'Beta');
});

test('AC-007: a declined approval errors and leaves the registration', async () => {
  const { state, ctx } = fixture();
  state.approvalOutcome = 'rejected';
  apply(ctx);
  await assert.rejects(
    run(state, 'workspace', { action: 'delete', workspaceId: 'w3' }),
    /not approved .*nothing changed/,
  );
  assert.equal(state.workspaces.length, 3);
  assert.equal(state.approvalRequests.length, 1);
  assert.match(state.approvalRequests[0].reason, /Gamma/);
  assert.match(state.approvalRequests[0].reason, /\/work\/gamma/);
});

test('AC-008: an approved delete removes the registration and states what remains', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'workspace', { action: 'delete', workspaceId: 'w3' });
  assert.equal(value.deleted, true);
  assert.equal(value.directoryRetained, true);
  assert.equal(value.sessionsRetained, true);
  assert.equal(state.workspaces.some((entry) => entry.id === 'w3'), false);
});

test('AC-009: reorder records the requested order and returns the sequence', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'workspace', {
    action: 'reorder', workspaceId: 'w3', beforeWorkspaceId: 'w1',
  });
  assert.deepEqual(value.workspaceIds, ['w3', 'w1', 'w2']);
});

test('AC-010: reorder with an unknown workspace fails naming it and changes nothing', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  await assert.rejects(
    run(state, 'workspace', { action: 'reorder', workspaceId: 'w9' }),
    /unknown workspace w9/,
  );
  assert.equal(state.calls.length, 0);
  assert.deepEqual(state.workspaces.map((entry) => entry.id), ['w1', 'w2', 'w3']);
});

test('AC-011: session list filters by workspace and excludes archived sessions by default', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const visible = await run(state, 'session', { action: 'list', workspaceId: 'w1' });
  assert.deepEqual(visible.sessions, [{
    id: 's1', workspaceId: 'w1', title: 'First', archived: false, pinned: true, running: true,
  }]);
  const all = await run(state, 'session', { action: 'list', workspaceId: 'w1', includeArchived: true });
  assert.equal(all.sessions.length, 2);
  assert.equal(all.sessions[1].archived, true);
});

test('AC-012: archiving a running session without stopActivity returns the Host refusal', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  await assert.rejects(
    run(state, 'session', { action: 'archive', sessionId: 's1' }),
    /workspace\/session-active: session s1 is running/,
  );
  assert.deepEqual(state.archived, ['s2']);
  const value = await run(state, 'session', { action: 'archive', sessionId: 's1', stopActivity: true });
  assert.equal(value.archived, true);
  assert.ok(value.archivedSessionIds.includes('s1'));
});

test('AC-013: archive then unarchive follows both calls', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  await run(state, 'session', { action: 'archive', sessionId: 's3' });
  assert.ok(state.archived.includes('s3'));
  const value = await run(state, 'session', { action: 'unarchive', sessionId: 's3' });
  assert.equal(value.archived, false);
  assert.equal(state.archived.includes('s3'), false);
});

test('AC-014: pin then unpin follows both calls', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  await run(state, 'session', { action: 'pin', sessionId: 's3' });
  assert.ok(state.pinned.includes('s3'));
  const value = await run(state, 'session', { action: 'unpin', sessionId: 's3' });
  assert.equal(value.pinned, false);
  assert.equal(state.pinned.includes('s3'), false);
});

test('AC-015: session rename returns the new title and seq', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'session', { action: 'rename', sessionId: 's3', title: 'Renamed' });
  assert.equal(value.title, 'Renamed');
  assert.equal(value.seq, 7);
  assert.equal(state.sessions[2].projections.values.title, 'Renamed');
});

test('AC-016: session fork returns a new id and leaves the source alone', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'session', { action: 'fork', sessionId: 's1', atSeq: 5 });
  assert.equal(value.sessionId, 'fork-1');
  assert.equal(value.sourceSessionId, 's1');
  assert.equal(state.sessions[0].sessionId, 's1');
  const forkCall = state.calls.find((call) => call.name === 'session.fork');
  assert.equal(forkCall.request.atSeq, 5);
});

test('AC-017: a missing service logs one warning and registers nothing', () => {
  const { state, ctx } = fixture();
  delete ctx.workspaceController;
  apply(ctx);
  assert.equal(state.warnings.length, 1);
  assert.match(state.warnings[0], /workspaceController/);
  assert.equal(state.tools.size, 0);
});

test('AC-020: an unknown action or missing argument errors before any service call', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  await assert.rejects(
    run(state, 'workspace', { action: 'bogus' }),
    /unknown action "bogus"; accepted actions are list, create, rename, delete, reorder/,
  );
  await assert.rejects(
    run(state, 'session', { action: 'rename', sessionId: 's1' }),
    /title must be a non-empty string/,
  );
  assert.equal(state.calls.length, 0);
});

test('create with a title renames only the new record', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const value = await run(state, 'workspace', {
    action: 'create', path: '/work/new', title: 'New Lab',
  });
  assert.equal(value.created, true);
  assert.equal(value.workspace.title, 'New Lab');
});

test('rendered output is text the model can read', async () => {
  const { state, ctx } = fixture();
  apply(ctx);
  const definition = callTool(state, 'session');
  const value = await run(state, 'session', { action: 'list', includeArchived: true });
  const blocks = definition.output.render({ action: 'list' }, value);
  assert.equal(blocks[0].type, 'text');
  assert.match(blocks[0].text, /3 sessions:/);
  assert.match(blocks[0].text, /Second/);
});
