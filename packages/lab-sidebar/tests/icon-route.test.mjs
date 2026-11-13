import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { Buffer } from 'node:buffer';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createIconStore } from '../src/host/store.ts';
import { registerIconRoute } from '../src/host/http.ts';

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

async function serve(t, principal = 'owner') {
  const directory = await mkdtemp(join(tmpdir(), 'lab-icons-route-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  let route;
  const ctx = {
    connection: { admit: () => ({ peer: { principal: { kind: principal } } }) },
    webServer: { register(value) { route = value; return () => {}; } },
  };
  const dispose = registerIconRoute(ctx, createIconStore(directory));
  assert.ok(route);
  const server = createServer((request, response) => { void route.handler(request, response); });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { dispose(); server.close(); });
  const port = server.address().port;
  const call = async (method, payload) => {
    const response = await fetch(`http://127.0.0.1:${port}/lab-icons/${method}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ type: 'client-request', rpcId: 'r1', method, payload }),
    });
    return response.json();
  };
  return { call, directory };
}

test('AC-001: the route stores and returns one icon', async (t) => {
  const { call } = await serve(t);
  const saved = await call('set', { path: '/w/app', dataUrl: PNG });
  assert.equal(saved.result.ok, true);
  const got = await call('get', { path: '/w/app' });
  assert.equal(got.result.ok, true);
  assert.equal(got.result.value.dataUrl, PNG);
});

test('AC-005: the route resets one icon', async (t) => {
  const { call } = await serve(t);
  await call('set', { path: '/w/app', dataUrl: PNG });
  const removed = await call('reset', { path: '/w/app' });
  assert.equal(removed.result.value.removed, true);
  const got = await call('get', { path: '/w/app' });
  assert.equal(got.result.value.dataUrl, null);
});

test('AC-003: the route refuses an oversized icon', async (t) => {
  const { call } = await serve(t);
  const bytes = Buffer.alloc(1024 * 1024 + 1);
  bytes.set([0x89, 0x50, 0x4e, 0x47]);
  const body = await call('set', { path: '/w/app', dataUrl: `data:image/png;base64,${bytes.toString('base64')}` });
  assert.equal(body.result.ok, false);
  assert.equal(body.result.error.code, 'lab-icons/unsupported');
});

test('AC-007: a non-owner may read and may not write', async (t) => {
  const { call } = await serve(t, 'guest');
  const read = await call('get', { path: '/w/app' });
  assert.equal(read.result.ok, true);
  const write = await call('set', { path: '/w/app', dataUrl: PNG });
  assert.equal(write.result.ok, false);
  assert.equal(write.result.error.code, 'lab-icons/forbidden');
  assert.equal(write.rpcId, 'r1');
});

test('a non-absolute workspace path is refused', async (t) => {
  const { call } = await serve(t);
  const body = await call('get', { path: 'w/app' });
  assert.equal(body.result.ok, false);
  assert.equal(body.result.error.code, 'lab-icons/bad-request');
});
