import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorkspaceIcons, isMissingFileFailure, NEGATIVE_RETRY_MS } from '../src/client/workspace-icons.ts';

const PATH = '/w/app';
const SVG = new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"/>');
const UPLOAD = 'data:image/png;base64,iVBORw0KGgo=';

function base(overrides = {}) {
  return { read: async () => undefined, sessionFor: () => 's1', ...overrides };
}

test('AC-004: a saved icon wins over detection', async () => {
  let reads = 0;
  const icons = createWorkspaceIcons(base({
    load: async () => UPLOAD,
    read: async () => { reads += 1; return SVG; },
  }));
  await icons.ensure(PATH);
  assert.equal(icons.getSnapshot().entries[PATH]?.kind, 'uploaded');
  assert.equal(reads, 0);
});

test('AC-010: a failed host load falls back to detection and caches no miss', async () => {
  let attempts = 0;
  let reads = 0;
  const icons = createWorkspaceIcons(base({
    load: async () => { attempts += 1; throw new Error('gateway/internal'); },
    read: async () => { reads += 1; return undefined; },
  }));
  await icons.ensure(PATH);
  assert.ok(reads > 0);
  assert.equal(icons.getSnapshot().entries[PATH], undefined);
  await icons.ensure(PATH);
  assert.equal(attempts, 2);
  assert.equal(icons.getSnapshot().entries[PATH], undefined);
});

test('AC-005: reset removes the saved icon and detects again', async () => {
  let saved = UPLOAD;
  const removed = [];
  const icons = createWorkspaceIcons(base({
    load: async () => saved,
    save: async () => {},
    remove: async (path) => { removed.push(path); saved = undefined; },
    read: async (_sessionId, absolutePath) => (absolutePath.endsWith('favicon.svg') ? SVG : undefined),
  }));
  await icons.ensure(PATH);
  assert.equal(icons.getSnapshot().entries[PATH]?.kind, 'uploaded');
  await icons.reset(PATH);
  assert.deepEqual(removed, [PATH]);
  assert.equal(icons.getSnapshot().entries[PATH]?.kind, 'detected');
});

test('AC-003: save persists through the host and stores the record', async () => {
  const calls = [];
  const icons = createWorkspaceIcons(base({
    save: async (path, dataUrl) => { calls.push([path, dataUrl]); },
  }));
  assert.equal(await icons.save(PATH, UPLOAD), true);
  assert.deepEqual(calls, [[PATH, UPLOAD]]);
  assert.equal(icons.getSnapshot().entries[PATH]?.kind, 'uploaded');
});

test('AC-003: an oversized save is refused before the host is called', async () => {
  let calls = 0;
  const icons = createWorkspaceIcons(base({ save: async () => { calls += 1; } }));
  const over = `data:image/png;base64,${'A'.repeat(Math.ceil((1024 * 1024 + 10) * 4 / 3))}`;
  assert.equal(await icons.save(PATH, over), false);
  assert.equal(calls, 0);
  assert.equal(icons.getSnapshot().entries[PATH], undefined);
});

test('a failed host save rejects and stores nothing', async () => {
  const icons = createWorkspaceIcons(base({ save: async () => { throw new Error('disk full'); } }));
  await assert.rejects(() => icons.save(PATH, UPLOAD), /disk full/u);
  assert.equal(icons.getSnapshot().entries[PATH], undefined);
});

test('AC-004: a miss is written once, skipped inside the horizon, and retried after it', async () => {
  let clock = 0;
  let reads = 0;
  const icons = createWorkspaceIcons(base({
    read: async () => { reads += 1; return undefined; },
    now: () => clock,
  }));
  await icons.ensure(PATH);
  const first = reads;
  assert.ok(first > 0);
  assert.equal(icons.getSnapshot().entries[PATH]?.kind, 'negative');
  await icons.ensure(PATH);
  assert.equal(reads, first);
  clock += NEGATIVE_RETRY_MS + 1;
  await icons.ensure(PATH);
  assert.ok(reads > first);
});

test('AC-003: concurrent rows for one workspace share one run', async () => {
  const asked = [];
  const icons = createWorkspaceIcons(base({
    read: async (_sessionId, absolutePath) => {
      asked.push(absolutePath);
      return absolutePath.endsWith('favicon.svg') ? SVG : undefined;
    },
  }));
  let notified = 0;
  icons.subscribe(() => { notified += 1; });
  await Promise.all([icons.ensure(PATH), icons.ensure(PATH)]);
  assert.equal(icons.getSnapshot().entries[PATH]?.kind, 'detected');
  assert.equal(asked.filter(path => path === `${PATH}/favicon.svg`).length, 1);
  assert.equal(notified, 1);
});

test('an upload made while detection runs is not overwritten', async () => {
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const icons = createWorkspaceIcons(base({
    save: async () => {},
    read: async () => { await gate; return SVG; },
  }));
  const job = icons.ensure(PATH);
  assert.equal(await icons.save(PATH, UPLOAD), true);
  release();
  await job;
  assert.equal(icons.getSnapshot().entries[PATH]?.kind, 'uploaded');
});

test('a failed read records no negative and writes nothing', async () => {
  const icons = createWorkspaceIcons(base({
    read: async () => { throw new Error('gateway/internal: ENOENT: no such file or directory'); },
  }));
  await icons.ensure(PATH);
  assert.deepEqual(icons.getSnapshot().entries, {});
});

test('a workspace with no readable session waits without storing a record', async () => {
  const icons = createWorkspaceIcons(base({ sessionFor: () => undefined }));
  await icons.ensure(PATH);
  assert.equal(icons.getSnapshot().entries[PATH], undefined);
});

test('a missing file is an ordinary answer', () => {
  assert.equal(isMissingFileFailure({ code: 'workspace-file/not-found' }), true);
  assert.equal(isMissingFileFailure({ code: 'gateway/internal' }), false);
  assert.equal(isMissingFileFailure(new Error('x')), false);
});
