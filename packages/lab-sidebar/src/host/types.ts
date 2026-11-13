import type { IncomingMessage, ServerResponse } from 'node:http';

/** Host services the workspace icon store needs. */

/** The caller behind an admitted request. */
export interface Peer {
  readonly principal?: { readonly kind?: string };
}

/** A request the connection service admitted or rejected. */
export type Admission = { readonly peer: Peer } | { readonly rejection: number };

/** One authenticated browser connection. */
export interface Connection {
  admit(request: IncomingMessage): Admission;
}

/** One route the web server exposes. */
export interface Route {
  readonly kind: 'prefix';
  readonly path: string;
  readonly handler: (request: IncomingMessage, response: ServerResponse) => Promise<void>;
}

/** The web server service. */
export interface WebServer {
  register(route: Route): () => void;
}

/** The host context this plugin receives. */
export interface HostContext {
  readonly connection: Connection;
  readonly webServer: WebServer;
  effect(callback: () => (() => void) | void, label?: string): void;
}
