/** Host half of the LabSideBar agent tools bundle. */
import { createTools, type LabToolDefinition } from './src/tools.ts';
import type { ApprovalServiceLike } from './src/approve.ts';
import type {
  SessionControllerLike,
  WorkspaceControllerLike,
  WorkspaceRegistryLike,
} from './src/ops.ts';

/** Stable Loader identity. */
export const name = 'lab-tools';

/** Host services the tools need before they can register. */
export const inject = ['tools', 'workspaceRegistry', 'workspaceController', 'sessionController', 'approval'];

interface ToolRegistryLike {
  register(definition: LabToolDefinition): unknown;
}

interface LoggerLike {
  warn(message: string): void;
}

/** The slice of the plugin context this half uses. */
interface ApplyContext {
  readonly tools?: ToolRegistryLike;
  readonly workspaceRegistry?: WorkspaceRegistryLike;
  readonly workspaceController?: WorkspaceControllerLike;
  readonly sessionController?: SessionControllerLike;
  readonly approval?: ApprovalServiceLike;
  logger(name: string): LoggerLike;
}

/** Register both tools, or warn once and register none when a service is absent. */
export function apply(ctx: ApplyContext): void {
  const { tools, workspaceRegistry, workspaceController, sessionController, approval } = ctx;
  const missing: string[] = [];
  if (tools === undefined) missing.push('tools');
  if (workspaceRegistry === undefined) missing.push('workspaceRegistry');
  if (workspaceController === undefined) missing.push('workspaceController');
  if (sessionController === undefined) missing.push('sessionController');
  if (approval === undefined) missing.push('approval');
  if (
    tools === undefined ||
    workspaceRegistry === undefined ||
    workspaceController === undefined ||
    sessionController === undefined ||
    approval === undefined
  ) {
    ctx.logger('lab-tools').warn(
      'dsh-lab-tools did not register: missing Host service ' + missing.join(', ') + '.',
    );
    return;
  }
  const definitions: LabToolDefinition[] = createTools(
    { registry: workspaceRegistry, workspaces: workspaceController, sessions: sessionController },
    approval,
  );
  for (const definition of definitions) tools.register(definition);
}
