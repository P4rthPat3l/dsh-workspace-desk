import test from 'node:test';
import assert from 'node:assert/strict';
import { deriveGroups, subtreeActivity } from '../src/client/plugin/client/tree.ts';

const NONE = { attention: 0, running: 0, completed: 0 };

function summary(id, extra = {}) {
  return { id, title: id, blank: false, running: false, updatedAt: 1, origin: 'user', retainedBy: {}, ...extra };
}

/** One Workspace holding the given Sessions, derived through the browser's own entry point. */
function derive({ sessions, statuses = new Map(), archived = [], expanded = false, catalogs = {} }) {
  const list = {
    ids: sessions.map(s => s.id),
    byId: Object.fromEntries(sessions.map(s => [s.id, s])),
    projectionsBySession: Object.fromEntries(Object.entries(catalogs).map(([id, children]) => [
      id, { values: { subagentCatalog: children.map(child => ({ id: child })) } },
    ])),
  };
  const workspaces = [{
    workspaceId: 'ws', path: '/work/app', title: 'app',
    sessionIds: sessions.map(s => s.id),
    createdAt: '2026-11-01T00:00:00.000Z', updatedAt: '2026-11-01T00:00:00.000Z',
  }];
  const rowState = { pinnedSessionIds: [], archivedSessionIds: archived, archivedFilter: 'default' };
  return deriveGroups(list, workspaces, rowState, statuses, { expandedGroups: expanded ? ['ws'] : [] })[0];
}

const status = (extra = {}) => ({ running: undefined, pendingInteraction: undefined, completionUnread: false, ...extra });

test('AC-001: a folded workspace with one running session counts it as running', () => {
  const group = derive({ sessions: [summary('a'), summary('b')], statuses: new Map([['a', status({ running: true })]]) });
  assert.equal(group.expanded, false);
  assert.deepEqual(group.sessions, []);
  assert.deepEqual(group.activity, { attention: 0, running: 1, completed: 0 });
});

test('AC-002: a running session awaiting approval counts only as attention', () => {
  const group = derive({
    sessions: [summary('a')],
    statuses: new Map([['a', status({ running: true, pendingInteraction: { key: 'k', kind: 'approval', sessionId: 'a' } })]]),
  });
  assert.deepEqual(group.activity, { attention: 1, running: 0, completed: 0 });
});

test('AC-002: an unknown pending interaction kind does not count as attention', () => {
  const group = derive({
    sessions: [summary('a')],
    statuses: new Map([['a', status({ pendingInteraction: { key: 'k', kind: 'other', sessionId: 'a' } })]]),
  });
  assert.deepEqual(group.activity, NONE);
});

test('AC-003: an idle session with a running subagent counts as running', () => {
  const child = summary('child', { origin: 'subagent' });
  const group = derive({
    sessions: [summary('a'), child],
    statuses: new Map([['child', status({ running: true })]]),
    catalogs: { a: ['child'] },
  });
  assert.deepEqual(group.activity, { attention: 0, running: 1, completed: 0 });
});

test('AC-004: archived and blank sessions add nothing to any count', () => {
  const group = derive({
    sessions: [summary('a', { running: true }), summary('b', { blank: true, running: true, retainedBy: { mainView: 1 } })],
    statuses: new Map([['b', status({ running: true })]]),
    archived: ['a'],
  });
  assert.deepEqual(group.activity, NONE);
});

test('AC-005: an unread completion counts as completed until it is acknowledged', () => {
  const unread = derive({ sessions: [summary('a')], statuses: new Map([['a', status({ running: false, completionUnread: true })]]) });
  assert.deepEqual(unread.activity, { attention: 0, running: 0, completed: 1 });
  const read = derive({ sessions: [summary('a')], statuses: new Map([['a', status({ running: false })]]) });
  assert.deepEqual(read.activity, NONE);
});

test('AC-005: a live status outranks a stale running summary', () => {
  const group = derive({ sessions: [summary('a', { running: true })], statuses: new Map([['a', status({ running: false })]]) });
  assert.deepEqual(group.activity, NONE);
});

test('AC-008: sessions below the Show more fold still count', () => {
  const sessions = Array.from({ length: 12 }, (_, i) => summary('s' + i));
  const group = derive({ sessions, expanded: true, statuses: new Map([['s11', status({ running: true })]]) });
  assert.equal(group.sessions.length, 12);
  assert.deepEqual(group.activity, { attention: 0, running: 1, completed: 0 });
});

test('AC-009: a parent subtree sums every nested group at any depth', () => {
  const node = (key, activity) => ({ key, activity });
  const parent = node('p', { attention: 1, running: 0, completed: 0 });
  const child = node('c', { attention: 0, running: 2, completed: 0 });
  const grandchild = node('g', { attention: 0, running: 0, completed: 1 });
  const childrenOf = new Map([['p', [child]], ['c', [grandchild]]]);
  assert.deepEqual(subtreeActivity(parent, childrenOf), { attention: 1, running: 2, completed: 1 });
  assert.deepEqual(subtreeActivity(grandchild, childrenOf), grandchild.activity);
});
