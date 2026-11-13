import test from 'node:test';
import assert from 'node:assert/strict';
import {
  capStore, clearIcon, dataUrlBytes, emptyIconStore, fitsIconLimit, hueFor,
  iconFor, initialsOf, isIconDataUrl, parseIconStore, setNegativeIcon,
  setUploadedIcon, ICON_KEY,
} from '../src/client/icons.ts';

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

test('AC-007: a stored value that is not a data image URL is discarded', () => {
  const store = parseIconStore(JSON.stringify({
    version: 1,
    entries: {
      '/a': { kind: 'uploaded', dataUrl: 'javascript:alert(1)', updatedAt: '2026-01-01T00:00:00.000Z' },
      '/b': { kind: 'uploaded', dataUrl: PNG, updatedAt: '2026-01-01T00:00:00.000Z' },
      '/c': { kind: 'nonsense', updatedAt: '2026-01-01T00:00:00.000Z' },
    },
  }));
  assert.equal(store.entries['/a'], undefined);
  assert.equal(store.entries['/b']?.kind, 'uploaded');
  assert.equal(store.entries['/c'], undefined);
});

test('AC-005: an uploaded icon is stored against the canonical path', () => {
  const store = setUploadedIcon(emptyIconStore(), '/work/app', PNG, '2026-11-13T00:00:00.000Z');
  assert.equal(store.entries['/work/app']?.kind, 'uploaded');
  assert.equal(store.entries['/work/app']?.dataUrl, PNG);
  assert.equal(writeAndRead(store).entries['/work/app']?.dataUrl, PNG);
});

test('AC-006: a file over the limit is rejected and the store is unchanged', () => {
  const big = `data:image/png;base64,${'A'.repeat(200 * 1024)}`;
  const before = emptyIconStore();
  const after = setUploadedIcon(before, '/work/app', big);
  assert.deepEqual(after, before);
  assert.equal(fitsIconLimit(big), false);
});

test('uploaded records survive a storage round trip', () => {
  const storage = memoryStorage();
  const store = setUploadedIcon(emptyIconStore(), '/work/app', PNG);
  storage.setItem(ICON_KEY, JSON.stringify(store));
  const read = parseIconStore(storage.getItem(ICON_KEY));
  assert.equal(read.entries['/work/app']?.dataUrl, PNG);
});

test('a negative record hides the icon until its retry horizon', () => {
  const now = Date.parse('2026-11-13T00:00:00.000Z');
  const store = setNegativeIcon(emptyIconStore(), '/work/app', '2026-11-14T00:00:00.000Z', '2026-11-13T00:00:00.000Z');
  assert.equal(iconFor(store, '/work/app', now)?.kind, 'negative');
  assert.equal(iconFor(store, '/work/app', now + 2 * 24 * 60 * 60 * 1000), undefined);
});

test('clearing one path keeps the others', () => {
  let store = setUploadedIcon(emptyIconStore(), '/a', PNG);
  store = setUploadedIcon(store, '/b', PNG);
  store = clearIcon(store, '/a');
  assert.equal(store.entries['/a'], undefined);
  assert.equal(store.entries['/b']?.kind, 'uploaded');
});

test('the store keeps at most 64 records, newest first', () => {
  let store = emptyIconStore();
  for (let index = 0; index < 70; index += 1) {
    store = setUploadedIcon(store, `/p${index}`, PNG, new Date(Date.UTC(2026, 0, 1, 0, index)).toISOString());
  }
  const capped = capStore(store);
  assert.equal(Object.keys(capped.entries).length, 64);
  assert.equal(capped.entries['/p0'], undefined);
  assert.equal(capped.entries['/p69']?.kind, 'uploaded');
});

test('initials and hue are stable and readable', () => {
  assert.equal(initialsOf('my-app', '/work/my-app'), 'MA');
  assert.equal(initialsOf('', '/work/solo'), 'S');
  assert.equal(initialsOf('  '), '?');
  assert.equal(hueFor('/work/app'), hueFor('/work/app'));
  assert.ok(hueFor('/work/app') >= 0 && hueFor('/work/app') < 360);
});

test('data URL byte length matches base64 decoding', () => {
  assert.equal(dataUrlBytes(PNG), 70);
  assert.equal(isIconDataUrl('data:image/svg+xml;base64,PHN2Zy8+'), true);
  assert.equal(isIconDataUrl('data:text/html;base64,PHN2Zy8+'), false);
});

function writeAndRead(store) {
  const storage = memoryStorage();
  storage.setItem(ICON_KEY, JSON.stringify(store));
  return parseIconStore(storage.getItem(ICON_KEY));
}

function memoryStorage() {
  const map = new Map();
  return {
    getItem: key => map.get(key) ?? null,
    setItem: (key, value) => { map.set(key, String(value)); },
  };
}
