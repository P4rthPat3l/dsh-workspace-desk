/** Authenticated HTTP channel for custom workspace icons. The browser half owns
 * no icon files; every read and write goes through this route. */
import { Buffer } from 'node:buffer';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { IconStoreError, validateWorkspacePath, type IconStore } from './store.ts';
import type { Peer, Route } from './types.ts';

const PREFIX = '/lab-icons';
const MAX_BODY = 2 * 1024 * 1024;

/** One failure as the endpoint reports it. */
interface EndpointFailure {
  readonly code: string;
  readonly message: string;
  readonly details: Record<string, unknown>;
}

/** The value one endpoint resolves with. */
type EndpointResult = { readonly ok: true; readonly value: unknown } | { readonly ok: false; readonly error: EndpointFailure };

/** The request envelope a client sends. */
interface RequestEnvelope {
  readonly type: 'client-request';
  readonly rpcId: string;
  readonly method: string;
  readonly payload?: unknown;
}

/** The services the route needs. */
export interface RouteContext {
  readonly connection: { admit(request: IncomingMessage): { readonly peer: Peer } | { readonly rejection: number } };
  readonly webServer: { register(route: Route): () => void };
}

/** Whether one admitted peer may call the endpoint. Reads are open to any admitted peer. */
export function mayWrite(method: string, peer: Peer | undefined): boolean {
  if (method === 'get') return true;
  return peer?.principal?.kind === 'owner';
}

/**
 * Register the icon route.
 * @param ctx - host services.
 * @param store - icon store the route reads and writes.
 * @returns the route disposer.
 */
export function registerIconRoute(ctx: RouteContext, store: IconStore): () => void {
  return ctx.webServer.register({
    kind: 'prefix',
    path: PREFIX,
    handler: async (request: IncomingMessage, response: ServerResponse): Promise<void> => {
      const admitted = admit(ctx, request, response);
      if (admitted === undefined) return;
      if (request.method !== 'POST') {
        response.writeHead(405, { allow: 'POST' });
        response.end('method not allowed');
        return;
      }
      const endpoint = endpointOf(request);
      if (endpoint === undefined) {
        respond(response, 404, failure('unknown', 'lab-icons/not-found', 'Unknown icon endpoint.'));
        return;
      }
      let text: string;
      try {
        text = await readBody(request);
      } catch {
        respond(response, 413, failure('unknown', 'lab-icons/body-too-large', 'The icon request is too large.'));
        return;
      }
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        respond(response, 400, failure('unknown', 'lab-icons/bad-request', 'The icon request is not valid JSON.'));
        return;
      }
      if (!isRequestEnvelope(parsed)) {
        respond(response, 400, failure('unknown', 'lab-icons/bad-request', 'The icon request envelope is invalid.'));
        return;
      }
      const message = parsed;
      if (message.method !== endpoint) {
        respond(response, 400, failure(message.rpcId, 'lab-icons/bad-request', 'The icon endpoint does not match the request method.'));
        return;
      }
      if (!mayWrite(endpoint, admitted)) {
        respond(response, 200, failure(message.rpcId, 'lab-icons/forbidden', 'Icon changes are available only to the local user.'));
        return;
      }
      let result: EndpointResult;
      try {
        result = await dispatch(store, endpoint, message.payload);
      } catch (error) {
        result = error instanceof IconStoreError
          ? { ok: false, error: { code: error.code, message: error.message, details: {} } }
          : { ok: false, error: { code: 'lab-icons/internal', message: error instanceof Error ? error.message : String(error), details: {} } };
      }
      respond(response, 200, { type: 'server-response', rpcId: message.rpcId, result });
    },
  });
}

/** Run one endpoint. */
async function dispatch(store: IconStore, endpoint: string, payload: unknown): Promise<EndpointResult> {
  const workspacePath = validateWorkspacePath(field(payload, 'path'));
  if (workspacePath === undefined) {
    return { ok: false, error: { code: 'lab-icons/bad-request', message: 'The workspace path is invalid.', details: {} } };
  }
  switch (endpoint) {
    case 'get': {
      const icon = await store.get(workspacePath);
      return { ok: true, value: { dataUrl: icon?.dataUrl ?? null } };
    }
    case 'set': {
      const dataUrl = field(payload, 'dataUrl');
      if (typeof dataUrl !== 'string') {
        return { ok: false, error: { code: 'lab-icons/bad-request', message: 'The icon value is missing.', details: {} } };
      }
      const saved = await store.set(workspacePath, dataUrl);
      return { ok: true, value: { updatedAt: saved.updatedAt } };
    }
    case 'reset': {
      const removed = await store.remove(workspacePath);
      return { ok: true, value: { removed } };
    }
    default:
      return { ok: false, error: { code: 'lab-icons/not-found', message: 'Unknown icon endpoint.', details: {} } };
  }
}

/** Admit the request, writing a refusal response. */
function admit(ctx: RouteContext, request: IncomingMessage, response: ServerResponse): Peer | undefined {
  let admission: { readonly peer: Peer } | { readonly rejection: number };
  try {
    admission = ctx.connection.admit(request);
  } catch (error) {
    respond(response, 500, failure('unknown', 'lab-icons/internal', error instanceof Error ? error.message : String(error)));
    return undefined;
  }
  if ('rejection' in admission) {
    response.writeHead(admission.rejection);
    response.end(admission.rejection === 401 ? 'unauthorized' : 'forbidden');
    return undefined;
  }
  return admission.peer;
}

/** The endpoint segment after the route prefix. */
function endpointOf(request: IncomingMessage): string | undefined {
  try {
    const url = new URL(request.url ?? '/', 'http://localhost');
    if (!url.pathname.startsWith(`${PREFIX}/`)) return undefined;
    const endpoint = decodeURIComponent(url.pathname.slice(PREFIX.length + 1));
    return endpoint === '' ? undefined : endpoint;
  } catch {
    return undefined;
  }
}

/** Recognise the request envelope a client sends. */
function isRequestEnvelope(value: unknown): value is RequestEnvelope {
  if (value === null || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return candidate.type === 'client-request' && typeof candidate.rpcId === 'string' && typeof candidate.method === 'string';
}

/** Read one payload field. */
function field(payload: unknown, key: string): unknown {
  return payload !== null && typeof payload === 'object' ? (payload as Record<string, unknown>)[key] : undefined;
}

/** Read a request body under the size cap. */
function readBody(request: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let size = 0;
    let tooLarge = false;
    request.on('data', (chunk: Buffer) => {
      size += chunk.length;
      if (size > MAX_BODY) {
        tooLarge = true;
        chunks.length = 0;
        return;
      }
      if (!tooLarge) chunks.push(chunk);
    });
    request.on('end', () => {
      if (tooLarge) reject(new Error('body-too-large'));
      else resolve(Buffer.concat(chunks).toString('utf8'));
    });
    request.on('error', reject);
  });
}

/** Build one failure envelope. */
function failure(rpcId: string, code: string, message: string): { readonly type: 'server-response'; readonly rpcId: string; readonly result: EndpointResult } {
  return { type: 'server-response', rpcId, result: { ok: false, error: { code, message, details: {} } } };
}

/** Write one JSON response. */
function respond(response: ServerResponse, status: number, payload: unknown): void {
  const body = JSON.stringify(payload);
  response.writeHead(status, {
    'content-type': 'application/json',
    'content-length': Buffer.byteLength(body, 'utf8'),
    'cache-control': 'no-store',
  });
  response.end(body);
}
