import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

test('AC-001 and AC-002: one bundle inserts the sidebar and tools rows', async () => {
  const manifest = await readJson(join(PACKAGE_DIR, 'package.json'));
  assert.equal(manifest.name, 'dsh-workspaces');
  assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml');
  assert.equal(manifest.dsh.client.platform, 'web');

  const patch = await readFile(join(PACKAGE_DIR, 'cordis.patch.yml'), 'utf8');
  assert.match(patch, /- id: ui-workspace\s+disabled: true/u);
  assert.match(patch, /- id: lab-sidebar\s+name: 'dsh-workspaces'/u);
  assert.match(patch, /- id: lab-tools\s+name: 'dsh-workspaces\/tools'/u);
  assert.equal((patch.match(/- id: lab-/gu) ?? []).length, 2);
});

test('AC-007: both rows resolve to files inside the package', async () => {
  const manifest = await readJson(join(PACKAGE_DIR, 'package.json'));
  const entries = [
    ['.', manifest.exports['.']],
    ['./tools', manifest.exports['./tools']],
    ['./client', manifest.exports['./client']],
    ['./icon', manifest.exports['./icon']],
    ['./tools/icon', manifest.exports['./tools/icon']],
  ];
  for (const [specifier, target] of entries) {
    assert.equal(typeof target, 'string', specifier + ' must be exported');
    assert.ok(existsSync(join(PACKAGE_DIR, target)), specifier + ' points at ' + target);
  }
  for (const target of [
    manifest.exports['./locale/*.json'],
    manifest.exports['./tools/locale/*.json'],
  ]) {
    assert.equal(typeof target, 'string');
    assert.ok(existsSync(join(PACKAGE_DIR, target.replace('*', 'en'))), 'English resource for ' + target);
  }
  for (const file of ['index.js', 'tools.js', 'client.js']) {
    assert.ok(existsSync(join(PACKAGE_DIR, file)), file + ' must be built');
  }
});

test('display metadata exists for the bundle and the tools row', async () => {
  for (const file of ['locale/en.json', 'locale/zh.json', 'tools/locale/en.json', 'tools/locale/zh.json']) {
    const value = await readJson(join(PACKAGE_DIR, file));
    assert.equal(typeof value.meta?.title, 'string', file + ' title');
    assert.equal(typeof value.meta?.description, 'string', file + ' description');
  }
});

test('the separate tools package is gone', () => {
  assert.equal(existsSync(resolve(PACKAGE_DIR, '..', 'lab-tools')), false);
});
