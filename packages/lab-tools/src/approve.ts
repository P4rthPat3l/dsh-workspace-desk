/** One destructive-call approval gate for the LabSideBar tools. */
import type { ApprovalOutcome, ApprovalRequest } from '@deepseek-ai/dsh-user-approval';
import type { ToolRunContext } from '@deepseek-ai/dsh-tools';

/** The approval capability the tools use. */
export interface ApprovalServiceLike {
  request(request: ApprovalRequest): Promise<ApprovalOutcome>;
}

/** Ask the user before a destructive call; throw unless the call is granted once. */
export async function confirmDestructive(
  approval: ApprovalServiceLike,
  exec: ToolRunContext,
  summary: string,
): Promise<void> {
  if (exec.agent === undefined) {
    throw new Error('workspace delete needs an agent session to ask for approval; nothing changed');
  }
  const outcome = await approval.request({
    agent: exec.agent,
    toolName: 'workspace',
    callId: exec.callId,
    reason: summary,
    displayReason: { en: summary },
    signal: exec.signal,
  });
  if (outcome !== 'allowed-once') {
    throw new Error('workspace delete was not approved (' + outcome + '); nothing changed');
  }
}
