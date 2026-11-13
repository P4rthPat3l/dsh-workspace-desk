import test from 'node:test';
import assert from 'node:assert/strict';
import { ICON_ROUTE, createIconStoreClient } from '../src/client/icon-store-rpc.ts';

const PNG = 'data:image/png;base64,iVBORw0KGgo=';

function fake(resultFor) {
  const calls = [];
  return {
    calls,
    connection: {
      rpc: {
        async call(route, method, payload) {
          calls.push([route, method, payload]);
          return resultFor(method, payload);
        },
      },
    },
  };
}

test('read returns the saved data URL and maps null to undefined', async () => {
  const ok = fake(() => ({ ok: true, value: { dataUrl: PNG } }));
  assert.equal(await createIconStoreClient(ok.connection).read('/w/app'), PNG);
  assert.deepEqual(ok.calls, [[ICON_ROUTE, 'get', { path: '/w/app' }]]);

  const empty = fake(() => ({ ok: true, value: { dataUrl: null } }));
  assert.equal(await createIconStoreClient(empty.connection).read('/w/app'), undefined);
});

test('read ignores a malformed value', async () => {
  const client = createIconStoreClient({ rpc: { call: async () => ({ ok: true, value: 'nope' }) } });
  assert.equal(await client.read('/w/app'), undefined);
});

test('a failure surfaces the host code', async () => {
  const client = createIconStoreClient({
    rpc: {
      call: async () => ({ ok: false, error: { code: 'lab-icons/unsupported', message: 'bad image', details: {} } }),
    },
  });
  await assert.rejects(() => client.read('/w/app'), /lab-icons\/unsupported/u);
});

test('save and remove post the expected payloads', async () => {
  const fakeConnection = fake(() => ({ ok: true, value: {} }));
  const client = createIconStoreClient(fakeConnection.connection);
  await client.save('/w/app', PNG);
  await client.remove('/w/app');
  assert.deepEqual(fakeConnection.calls, [
    [ICON_ROUTE, 'set', { path: '/w/app', dataUrl: PNG }],
    [ICON_ROUTE, 'reset', { path: '/w/app' }],
  ]);
});
