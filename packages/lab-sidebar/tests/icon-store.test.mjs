import test from 'node:test';
import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import { mkdir, mkdtemp, readFile, rm, unlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  MAX_ICON_BYTES, createIconStore, iconFileName, parseIndex, validateWorkspacePath,
} from '../src/host/store.ts';
import { mayWrite } from '../src/host/http.ts';

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
const SVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=';

async function dataDir(t) {
  const directory = await mkdtemp(join(tmpdir(), 'lab-icons-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  return directory;
}

test('AC-001: a saved icon is served by a new store over the same directory', async (t) => {
  const directory = await dataDir(t);
  await createIconStore(directory).set('/w/app', PNG);
  const got = await createIconStore(directory).get('/w/app');
  assert.equal(got?.dataUrl, PNG);
});

test('AC-003: an icon at the 1 MiB boundary is accepted', async (t) => {
  const directory = await dataDir(t);
  const bytes = Buffer.alloc(MAX_ICON_BYTES);
  bytes.set([0x89, 0x50, 0x4e, 0x47]);
  const dataUrl = `data:image/png;base64,${bytes.toString('base64')}`;
  const saved = await createIconStore(directory).set('/w/app', dataUrl);
  assert.equal(typeof saved.updatedAt, 'string');
  assert.equal((await createIconStore(directory).get('/w/app'))?.dataUrl, dataUrl);
});

test('AC-003: one byte over the limit is refused', async (t) => {
  const directory = await dataDir(t);
  const bytes = Buffer.alloc(MAX_ICON_BYTES + 1);
  bytes.set([0x89, 0x50, 0x4e, 0x47]);
  const dataUrl = `data:image/png;base64,${bytes.toString('base64')}`;
  await assert.rejects(() => createIconStore(directory).set('/w/app', dataUrl), /not a supported image/u);
  const files = await readFile(join(directory, 'index.json'), 'utf8').catch(() => null);
  assert.equal(files, null);
});

test('AC-003: a payload that does not match its declared type is refused', async (t) => {
  const directory = await dataDir(t);
  const store = createIconStore(directory);
  await assert.rejects(() => store.set('/w/app', 'data:image/png;base64,QUJD'), /not a supported image/u);
  await assert.rejects(() => store.set('/w/app', 'data:text/html;base64,PHN2Zy8+'), /not a supported image/u);
});

test('AC-005: remove deletes the file and the record', async (t) => {
  const directory = await dataDir(t);
  const store = createIconStore(directory);
  await store.set('/w/app', PNG);
  assert.equal(await store.remove('/w/app'), true);
  assert.equal(await store.get('/w/app'), undefined);
  assert.equal(await store.remove('/w/app'), false);
});

test('AC-006: a corrupt index starts empty and the store recovers', async (t) => {
  const directory = await dataDir(t);
  await writeFile(join(directory, 'index.json'), 'not json');
  const store = createIconStore(directory);
  assert.equal(await store.get('/w/app'), undefined);
  await store.set('/w/app', PNG);
  assert.equal((await createIconStore(directory).get('/w/app'))?.dataUrl, PNG);
});

test('AC-009: a tampered index entry with a path-like file name is ignored', () => {
  const index = parseIndex(JSON.stringify({
    version: 1,
    entries: {
      '/a': { file: '../evil.png', mime: 'image/png', bytes: 10, updatedAt: '2026-11-14T00:00:00.000Z' },
      '/b': { file: `${'a'.repeat(64)}.png`, mime: 'image/png', bytes: 70, updatedAt: '2026-11-14T00:00:00.000Z' },
      '/c': { file: `${'b'.repeat(64)}.png`, mime: 'image/png', bytes: 70, updatedAt: 'nonsense' },
    },
  }));
  assert.equal(index.entries['/a'], undefined);
  assert.equal(index.entries['/b']?.file, `${'a'.repeat(64)}.png`);
  assert.equal(index.entries['/c'], undefined);
});

test('AC-008: the store evicts the oldest entry beyond the count cap', async (t) => {
  const directory = await dataDir(t);
  let clock = 0;
  const store = createIconStore(directory, { maxEntries: 2, now: () => (clock += 1000) });
  await store.set('/a', PNG);
  await store.set('/b', SVG);
  await store.set('/c', PNG);
  assert.equal(await store.get('/a'), undefined);
  assert.ok(await store.get('/b'));
  assert.ok(await store.get('/c'));
});

test('AC-008: the store evicts the oldest entry beyond the byte cap', async (t) => {
  const directory = await dataDir(t);
  let clock = 0;
  const store = createIconStore(directory, { maxBytes: 100, now: () => (clock += 1000) });
  await store.set('/a', PNG);
  await store.set('/b', PNG);
  await store.set('/c', PNG);
  assert.equal(await store.get('/a'), undefined);
  assert.ok(await store.get('/c'));
});

test('AC-007: any admitted peer may read and only the owner may write', () => {
  assert.equal(mayWrite('get', { principal: { kind: 'guest' } }), true);
  assert.equal(mayWrite('get', { principal: { kind: 'owner' } }), true);
  assert.equal(mayWrite('set', { principal: { kind: 'guest' } }), false);
  assert.equal(mayWrite('reset', { principal: { kind: 'guest' } }), false);
  assert.equal(mayWrite('set', { principal: { kind: 'owner' } }), true);
  assert.equal(mayWrite('set', undefined), false);
});

test('workspace paths must be absolute', () => {
  assert.equal(validateWorkspacePath('/w/app'), '/w/app');
  assert.equal(validateWorkspacePath('C:\\w\\app'), 'C:\\w\\app');
  assert.equal(validateWorkspacePath('\\\\server\\share'), '\\\\server\\share');
  assert.equal(validateWorkspacePath('w/app'), undefined);
  assert.equal(validateWorkspacePath(''), undefined);
  assert.equal(validateWorkspacePath('/w/\u0000app'), undefined);
  assert.equal(validateWorkspacePath(7), undefined);
});

test('file names are a workspace hash plus the MIME extension', () => {
  assert.match(iconFileName('/w/app', 'image/png'), /^[a-f0-9]{64}\.png$/u);
  assert.match(iconFileName('/w/app', 'image/svg+xml'), /^[a-f0-9]{64}\.svg$/u);
});

test('concurrent writes keep both records', async (t) => {
  const directory = await dataDir(t);
  const store = createIconStore(directory);
  await Promise.all([store.set('/a', PNG), store.set('/b', SVG)]);
  assert.ok(await store.get('/a'));
  assert.ok(await store.get('/b'));
});

test('a missing icon file drops its index entry', async (t) => {
  const directory = await dataDir(t);
  const store = createIconStore(directory);
  await store.set('/w/app', PNG);
  await unlink(join(directory, iconFileName('/w/app', 'image/png')));
  assert.equal(await store.get('/w/app'), undefined);
  const index = JSON.parse(await readFile(join(directory, 'index.json'), 'utf8'));
  assert.equal(index.entries['/w/app'], undefined);
});
