/** Argument narrowing and business-rule checks for the LabSideBar agent tools. */
import { isAbsolute } from 'node:path';

/** One lossless JSON object supplied by the model. */
export type JsonRecord = Record<string, unknown>;

/** Whether a value is a plain JSON object. */
export function isRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** Read and validate the action field of one tool call. */
export function readAction<A extends string>(
  args: unknown,
  isAction: (value: string) => value is A,
  accepted: readonly A[],
  toolName: string,
): { record: JsonRecord; action: A } {
  if (!isRecord(args)) throw new Error(toolName + ': arguments must be a JSON object');
  const action = args.action;
  if (typeof action !== 'string') {
    throw new Error(toolName + ': action must be a string; accepted actions are ' + accepted.join(', '));
  }
  if (!isAction(action)) {
    throw new Error(toolName + ': unknown action ' + JSON.stringify(action) + '; accepted actions are ' + accepted.join(', '));
  }
  return { record: args, action };
}

/** Every action the workspace tool accepts. */
export const WORKSPACE_ACTIONS = ['list', 'create', 'rename', 'delete', 'reorder'] as const;

/** One workspace action. */
export type WorkspaceAction = (typeof WORKSPACE_ACTIONS)[number];

/** Whether a string names a workspace action. */
export function isWorkspaceAction(value: string): value is WorkspaceAction {
  return WORKSPACE_ACTIONS.some((action) => action === value);
}

/** Every action the session tool accepts. */
export const SESSION_ACTIONS = ['list', 'archive', 'unarchive', 'pin', 'unpin', 'rename', 'fork'] as const;

/** One session action. */
export type SessionAction = (typeof SESSION_ACTIONS)[number];

/** Whether a string names a session action. */
export function isSessionAction(value: string): value is SessionAction {
  return SESSION_ACTIONS.some((action) => action === value);
}

/** Longest accepted title, in code points. */
export const TITLE_MAX_CHARS = 120;

/** Read one required non-empty string. */
export function requireString(record: JsonRecord, key: string, context: string): string {
  const value = record[key];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(context + ': ' + key + ' must be a non-empty string');
  }
  return value.trim();
}

/** Read one optional non-empty string. */
export function optionalString(record: JsonRecord, key: string, context: string): string | undefined {
  const value = record[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(context + ': ' + key + ' must be a non-empty string when provided');
  }
  return value.trim();
}

/** Read one optional boolean. */
export function optionalBoolean(record: JsonRecord, key: string, context: string): boolean | undefined {
  const value = record[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'boolean') {
    throw new Error(context + ': ' + key + ' must be a boolean when provided');
  }
  return value;
}

/** Read one optional integer, optionally with a minimum. */
export function optionalInteger(
  record: JsonRecord,
  key: string,
  context: string,
  minimum?: number,
): number | undefined {
  const value = record[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    throw new Error(context + ': ' + key + ' must be an integer when provided');
  }
  if (minimum !== undefined && value < minimum) {
    throw new Error(context + ': ' + key + ' must be at least ' + minimum);
  }
  return value;
}

function checkTitle(title: string, key: string, context: string): string {
  const length = Array.from(title).length;
  if (length > TITLE_MAX_CHARS) {
    throw new Error(context + ': ' + key + ' is ' + length + ' characters; the limit is ' + TITLE_MAX_CHARS);
  }
  return title;
}

/** Read one required title that survives trimming and the length limit. */
export function requireTitle(record: JsonRecord, key: string, context: string): string {
  return checkTitle(requireString(record, key, context), key, context);
}

/** Read one optional title that survives trimming and the length limit. */
export function optionalTitle(record: JsonRecord, key: string, context: string): string | undefined {
  const title = optionalString(record, key, context);
  return title === undefined ? undefined : checkTitle(title, key, context);
}

/** Read one required absolute path. */
export function requireAbsolutePath(record: JsonRecord, key: string, context: string): string {
  const path = requireString(record, key, context);
  if (!isAbsolute(path)) {
    throw new Error(context + ': ' + key + ' must be an absolute path, got ' + JSON.stringify(path));
  }
  return path;
}
