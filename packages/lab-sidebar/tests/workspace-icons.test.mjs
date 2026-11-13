import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorkspaceIcons, isMissingFileFailure, NEGATIVE_RETRY_MS } from '../src/client/workspace-icons.ts';
import { ICON_KEY } from '../src/client/icons.ts';

const PATH = '/w/app';
const SVG = new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"/>');
const UPLOAD = 'data:image/png;base64,iVBORw0KGgo=';

function memoryStorage() {
  const data = new Map();
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => { data.set(key, value); } };
}

test('AC-003: a failed read records no negative and writes nothing', async () => {
  const storage = memoryStorage();
  const icons = createWorkspaceIcons({
    storage,
    read: async () => { throw new Error('gateway/internal: ENOENT: no such file or directory'); },
    sessionFor: () => 's1',
  });
  await icons.ensure(PATH);
  assert.deepEqual(icons.getSnapshot().entries, {});
  assert.equal(storage.getItem(ICON_KEY), null);
});

test('AC-005: an upload made while detection runs is not overwritten', async () => {
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const icons = createWorkspaceIcons({
    storage: memoryStorage(),
    read: async () => { await gate; return SVG; },
    sessionFor: () => 's1',
  });
  const job = icons.ensure(PATH);
  assert.equal(icons.upload(PATH, UPLOAD), true);
  release();
  await job;
  assert.equal(icons.getSnapshot().entries[PATH].kind, 'uploaded');
});

test('AC-004: a miss is written once, skipped inside the horizon, and retried after it', async () => {
  let clock = 0;
  let reads = 0;
  const icons = createWorkspaceIcons({
    storage: memoryStorage(),
    read: async () => { reads += 1; return undefined; },
    sessionFor: () => 's1',
    now: () => clock,
  });
  await icons.ensure(PATH);
  const first = reads;
  assert.ok(first > 0);
  assert.equal(icons.getSnapshot().entries[PATH].kind, 'negative');
  await icons.ensure(PATH);
  assert.equal(reads, first);
  clock += NEGATIVE_RETRY_MS + 1;
  await icons.ensure(PATH);
  assert.ok(reads > first);
});

test('AC-005: reset drops an uploaded record and detects again', async () => {
  const icons = createWorkspaceIcons({
    storage: memoryStorage(),
    read: async (_sessionId, absolutePath) => (absolutePath.endsWith('favicon.svg') ? SVG : undefined),
    sessionFor: () => 's1',
  });
  assert.equal(icons.upload(PATH, UPLOAD), true);
  assert.equal(icons.getSnapshot().entries[PATH].kind, 'uploaded');
  await icons.reset(PATH);
  assert.equal(icons.getSnapshot().entries[PATH].kind, 'detected');
});

test('AC-003: a not-found failure is an ordinary answer, so a later path still wins', async () => {
  const icons = createWorkspaceIcons({
    storage: memoryStorage(),
    read: async (_sessionId, absolutePath) => {
      if (absolutePath.endsWith('favicon.svg')) return SVG;
      throw Object.assign(new Error('no entry at "' + absolutePath + '"'), { code: 'workspace-file/not-found' });
    },
    sessionFor: () => 's1',
  });
  await icons.ensure(PATH);
  assert.equal(icons.getSnapshot().entries[PATH].kind, 'detected');
  assert.equal(icons.getSnapshot().entries[PATH].source, 'favicon.svg');
});

test('AC-004: only the Host not-found code counts as a miss', () => {
  assert.equal(isMissingFileFailure({ code: 'workspace-file/not-found' }), true);
  assert.equal(isMissingFileFailure({ code: 'gateway/internal', message: 'ENOENT: no such file' }), false);
  assert.equal(isMissingFileFailure(new Error('boom')), false);
  assert.equal(isMissingFileFailure(undefined), false);
});
