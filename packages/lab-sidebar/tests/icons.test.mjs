import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_ICON_BYTES, clearIcon, dataUrlBytes, emptyIconStore, fitsIconLimit,
  iconFor, isIconDataUrl, setDetectedIcon, setNegativeIcon, setUploadedIcon,
} from '../src/client/icons.ts';

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

test('AC-002: icon records are kept in memory with no storage adapter', () => {
  const store = setUploadedIcon(emptyIconStore(), '/work/app', PNG);
  assert.equal(store.entries['/work/app']?.kind, 'uploaded');
  assert.equal(store.entries['/work/app']?.dataUrl, PNG);
});

test('AC-003: the limit is 1 MiB and a value at the boundary fits', () => {
  assert.equal(MAX_ICON_BYTES, 1024 * 1024);
  const fits = `data:image/png;base64,${'A'.repeat(Math.ceil(MAX_ICON_BYTES * 4 / 3))}`;
  const over = `data:image/png;base64,${'A'.repeat(Math.ceil((MAX_ICON_BYTES + 1) * 4 / 3))}`;
  assert.equal(fitsIconLimit(fits), true);
  assert.equal(fitsIconLimit(over), false);
});

test('AC-003: an oversized value leaves the store unchanged', () => {
  const over = `data:image/png;base64,${'A'.repeat(Math.ceil((MAX_ICON_BYTES + 10) * 4 / 3))}`;
  const before = emptyIconStore();
  assert.deepEqual(setUploadedIcon(before, '/work/app', over), before);
});

test('a stored value that is not a data image URL is refused', () => {
  const store = emptyIconStore();
  assert.equal(setUploadedIcon(store, '/a', 'javascript:alert(1)').entries['/a'], undefined);
  assert.equal(isIconDataUrl(PNG), true);
  assert.equal(isIconDataUrl('data:text/html;base64,PHN2Zy8+'), false);
});

test('a detected icon carries its source', () => {
  const store = setDetectedIcon(emptyIconStore(), '/work/app', PNG, 'favicon.svg');
  assert.equal(store.entries['/work/app']?.kind, 'detected');
  assert.equal(store.entries['/work/app']?.source, 'favicon.svg');
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

test('ICO data URLs are accepted', () => {
  assert.equal(isIconDataUrl('data:image/x-icon;base64,AAABAA=='), true);
});

test('data URL byte length matches base64 decoding', () => {
  assert.equal(dataUrlBytes(PNG), 70);
  assert.equal(isIconDataUrl('data:image/svg+xml;base64,PHN2Zy8+'), true);
});
