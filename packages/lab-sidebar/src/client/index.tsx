import type { Context } from '@deepseek-ai/cordis';
import { apply as applyWorkspace, inject as workspaceInject } from './plugin/client/index.ts';

/** Services the ported workspace plugin waits on. */
export const inject = workspaceInject;

/**
 * Activate the ported workspace plugin and install its stylesheet.
 *
 * The copy replaces the shipped package, so it must not throw: a failed
 * activation leaves `ui-sidebar` without `uiWorkspace` and rejects boot.
 * A caught failure is logged and the shipped row is restored by uninstalling
 * this bundle, whose patch owns the disable.
 */
export function apply(ctx: Context): void {
  try {
    if (typeof document !== 'undefined' && __LAB_CSS__ !== undefined && __LAB_CSS__ !== '') {
      const style = document.createElement('style');
      style.setAttribute('data-plugin-css', 'dsh-lab-sidebar');
      style.textContent = __LAB_CSS__;
      document.head.appendChild(style);
    }
    applyWorkspace(ctx);
  } catch (error: unknown) {
    console.error('[lab-sidebar] failed to activate the workspace copy', error);
  }
}
