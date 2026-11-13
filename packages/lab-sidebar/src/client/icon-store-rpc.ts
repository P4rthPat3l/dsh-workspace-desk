/** Browser caller for the host workspace icon store over the authenticated connection. */

/** One failure the connection reports. */
export interface RpcFailure {
  readonly code: string;
  readonly message: string;
  readonly details: Record<string, unknown>;
}

/** One connection RPC outcome. */
export type RpcOutcome =
  | { readonly ok: true; readonly value: unknown }
  | { readonly ok: false; readonly error: RpcFailure };

/** One generic RPC channel on the connection service. */
export interface RpcClient {
  call(route: string, method: string, payload: unknown, signal?: AbortSignal): Promise<RpcOutcome>;
}

/** The connection service shape this client needs. */
export interface ConnectionRpc {
  readonly rpc: RpcClient;
}

/** Route the host registers for custom workspace icons. */
export const ICON_ROUTE = '/lab-icons';

/** The three host commands the icon state calls. */
export interface IconStoreClient {
  read(workspacePath: string): Promise<string | undefined>;
  save(workspacePath: string, dataUrl: string): Promise<void>;
  remove(workspacePath: string): Promise<void>;
}

/**
 * Create the host icon client.
 * @param connection - authenticated connection service.
 * @returns the three commands.
 */
export function createIconStoreClient(connection: ConnectionRpc): IconStoreClient {
  const call = async (method: string, payload: unknown): Promise<unknown> => {
    const result = await connection.rpc.call(ICON_ROUTE, method, payload);
    if (!result.ok) throw new Error(`${ICON_ROUTE}/${method}: ${result.error.code}: ${result.error.message}`);
    return result.value;
  };
  return {
    async read(workspacePath) {
      const value = await call('get', { path: workspacePath });
      const dataUrl = isRecord(value) ? value.dataUrl : undefined;
      return typeof dataUrl === 'string' ? dataUrl : undefined;
    },
    async save(workspacePath, dataUrl) {
      await call('set', { path: workspacePath, dataUrl });
    },
    async remove(workspacePath) {
      await call('reset', { path: workspacePath });
    },
  };
}

/** Whether a wire value is a plain object. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
