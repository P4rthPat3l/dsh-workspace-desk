/** Host half of the LabSideBar bundle: the custom workspace icon store. */
import { dshHomePath } from '@deepseek-ai/dsh-home-paths';
import { registerIconRoute } from './http.ts';
import { createIconStore } from './store.ts';
import type { HostContext } from './types.ts';

/** Services the route registers against. */
export const inject = ['connection', 'webServer'];

/**
 * Compose the icon store and its authenticated route.
 * @param ctx - host context carrying the connection and web server.
 */
export function apply(ctx: HostContext): void {
  const store = createIconStore(dshHomePath('plugins', 'lab-sidebar', 'icons'));
  ctx.effect(() => registerIconRoute(ctx, store), 'dsh-workspaces: workspace icon store');
}
