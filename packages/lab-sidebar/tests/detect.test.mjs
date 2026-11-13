import test from 'node:test';
import assert from 'node:assert/strict';
import { detectIcon, linkIconHrefs, resolveHref } from '../src/client/detect.ts';
import { createWorkspaceIcons, NEGATIVE_RETRY_MS } from '../src/client/workspace-icons.ts';
import { MAX_ICON_BYTES } from '../src/client/icons.ts';

const ROOT = '/w/app';
const bytes = text => new TextEncoder().encode(text);
const SVG = bytes('<svg xmlns="http://www.w3.org/2000/svg"/>');
const PNG = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 1, 2, 3]);

/** Fake reader over a map of absolute paths; records every path asked for. */
function fakeFiles(files) {
  const asked = [];
  const read = async (path) => { asked.push(path); return files[path]; };
  return { read, asked };
}

function memoryStorage() {
  const data = new Map();
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => { data.set(key, value); } };
}

test('AC-003: a workspace with favicon.svg gets that icon', async () => {
  const { read } = fakeFiles({ [`${ROOT}/favicon.svg`]: SVG });
  const icon = await detectIcon(ROOT, read);
  assert.equal(icon?.source, 'favicon.svg');
  assert.match(icon?.dataUrl ?? '', /^data:image\/svg\+xml;base64,/);
});

test('AC-003: an icon declared in index.html wins over conventional files', async () => {
  const { read } = fakeFiles({
    [`${ROOT}/index.html`]: bytes('<head><link rel="stylesheet" href="a.css"><link rel="icon" type="image/png" href="/brand/mark.png?v=2"></head>'),
    [`${ROOT}/public/brand/mark.png`]: PNG,
    [`${ROOT}/favicon.svg`]: SVG,
  });
  const icon = await detectIcon(ROOT, read);
  assert.equal(icon?.source, 'public/brand/mark.png');
});

test('AC-003: package.json icon field is used', async () => {
  const { read } = fakeFiles({
    [`${ROOT}/package.json`]: bytes(JSON.stringify({ name: 'x', icon: 'media/logo.png' })),
    [`${ROOT}/media/logo.png`]: PNG,
  });
  assert.equal((await detectIcon(ROOT, read))?.source, 'media/logo.png');
});

test('AC-004: a workspace with no icon files detects nothing', async () => {
  const { read } = fakeFiles({});
  assert.equal(await detectIcon(ROOT, read), undefined);
});

test('a file over the icon limit is skipped', async () => {
  const { read } = fakeFiles({
    [`${ROOT}/favicon.png`]: new Uint8Array(MAX_ICON_BYTES + 1),
    [`${ROOT}/favicon.ico`]: PNG,
  });
  assert.equal((await detectIcon(ROOT, read))?.source, 'favicon.ico');
});

test('an .svg file that is not SVG markup is skipped', async () => {
  const { read } = fakeFiles({ [`${ROOT}/favicon.svg`]: bytes('not an image') });
  assert.equal(await detectIcon(ROOT, read), undefined);
});

test('hrefs that leave the workspace or point at the network are ignored', () => {
  assert.deepEqual(resolveHref('https://cdn.example/icon.png', ''), []);
  assert.deepEqual(resolveHref('//cdn.example/icon.png', ''), []);
  assert.deepEqual(resolveHref('../../etc/icon.png', ''), []);
  assert.deepEqual(resolveHref('data:image/png;base64,AA', ''), []);
  assert.deepEqual(resolveHref('%PUBLIC_URL%/favicon.ico', 'public'), ['favicon.ico', 'public/favicon.ico']);
  assert.deepEqual(resolveHref('img/i.png', 'src'), ['src/img/i.png']);
});

test('only icon links are read from HTML', () => {
  const html = '<link href="a.css" rel="stylesheet"><LINK REL="shortcut icon" HREF="/f.ico"><link rel="apple-touch-icon" href="t.png">';
  assert.deepEqual(linkIconHrefs(html), ['/f.ico', 't.png']);
});

test('AC-004: no icon stores one negative record and does not retry before the horizon', async () => {
  const storage = memoryStorage();
  let clock = Date.UTC(2026, 10, 13);
  const { read, asked } = fakeFiles({});
  const icons = createWorkspaceIcons({ storage, read: (_id, path) => read(path), sessionFor: () => 's1', now: () => clock });
  await icons.ensure(ROOT);
  assert.equal(icons.getSnapshot().entries[ROOT]?.kind, 'negative');
  const firstRun = asked.length;
  await icons.ensure(ROOT);
  assert.equal(asked.length, firstRun);
  clock += NEGATIVE_RETRY_MS + 1;
  await icons.ensure(ROOT);
  assert.ok(asked.length > firstRun);
});

test('AC-003: concurrent rows for one workspace share one detection run', async () => {
  const { read, asked } = fakeFiles({ [`${ROOT}/favicon.svg`]: SVG });
  const icons = createWorkspaceIcons({ storage: memoryStorage(), read: (_id, path) => read(path), sessionFor: () => 's1' });
  let notified = 0;
  icons.subscribe(() => { notified += 1; });
  await Promise.all([icons.ensure(ROOT), icons.ensure(ROOT)]);
  assert.equal(icons.getSnapshot().entries[ROOT]?.kind, 'detected');
  assert.equal(asked.filter(path => path === `${ROOT}/favicon.svg`).length, 1);
  assert.equal(notified, 1);
});

test('AC-005: an upload survives a reload of the store', () => {
  const storage = memoryStorage();
  const deps = { storage, read: async () => undefined, sessionFor: () => 's1' };
  const url = 'data:image/png;base64,iVBORw0KGgo=';
  assert.equal(createWorkspaceIcons(deps).upload(ROOT, url), true);
  assert.equal(createWorkspaceIcons(deps).getSnapshot().entries[ROOT]?.dataUrl, url);
});

test('AC-006: an oversized upload is refused and storage is unchanged', () => {
  const storage = memoryStorage();
  const icons = createWorkspaceIcons({ storage, read: async () => undefined, sessionFor: () => 's1' });
  const big = `data:image/png;base64,${'A'.repeat(Math.ceil((MAX_ICON_BYTES + 10) * 4 / 3))}`;
  assert.equal(icons.upload(ROOT, big), false);
  assert.equal(storage.getItem('dsh.lab.icons.v1'), null);
});

test('reset drops an upload and detects again', async () => {
  const { read } = fakeFiles({ [`${ROOT}/favicon.svg`]: SVG });
  const icons = createWorkspaceIcons({ storage: memoryStorage(), read: (_id, path) => read(path), sessionFor: () => 's1' });
  icons.upload(ROOT, 'data:image/png;base64,iVBORw0KGgo=');
  await icons.reset(ROOT);
  assert.equal(icons.getSnapshot().entries[ROOT]?.kind, 'detected');
});

test('a workspace with no readable session waits without storing a record', async () => {
  const icons = createWorkspaceIcons({ storage: memoryStorage(), read: async () => undefined, sessionFor: () => undefined });
  await icons.ensure(ROOT);
  assert.equal(icons.getSnapshot().entries[ROOT], undefined);
});
