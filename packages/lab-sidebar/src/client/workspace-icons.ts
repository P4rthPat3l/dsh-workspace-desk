/** Workspace icon state: the in-memory store, the host store, and detection runs.
 * The Harness calls arrive as functions, so the tests run this in plain Node. */
import type { SessionId } from '@deepseek-ai/dsh-session/types';
import { detectIcon, type DetectedIcon } from './detect.ts';
import {
  clearIcon, emptyIconStore, fitsIconLimit, iconFor, setDetectedIcon, setNegativeIcon, setUploadedIcon,
  type IconStore,
} from './icons.ts';

/** The Host reports a missing file with this Remote code; any other failure is real. */
export function isMissingFileFailure(error: unknown): boolean {
  if (typeof error !== 'object' || error === null || !('code' in error)) return false;
  return error.code === 'workspace-file/not-found';
}

/** How long a workspace without an icon waits before detection runs again. A
 * favicon added later waits at most this long, or until Reset icon. */
export const NEGATIVE_RETRY_MS = 30 * 60 * 1000;

/** Detection runs at once; the sidebar mounts every workspace row together. */
const CONCURRENCY = 2;

/** Harness access the icon state needs. */
export interface WorkspaceIconDeps {
  /** Read the custom icon saved on the host, if any. */
  readonly load?: (workspacePath: string) => Promise<string | undefined>;
  /** Persist one custom icon on the host. */
  readonly save?: (workspacePath: string, dataUrl: string) => Promise<void>;
  /** Remove the custom icon saved on the host. */
  readonly remove?: (workspacePath: string) => Promise<void>;
  /** Read a file by absolute path through a session's file scope. */
  readonly read: (sessionId: SessionId, absolutePath: string) => Promise<Uint8Array | undefined>;
  /** Any session whose file scope can read the workspace; undefined when none exists yet. */
  readonly sessionFor: (workspacePath: string) => SessionId | undefined;
  readonly now?: () => number;
}

/** Observable icon store with its commands. */
export interface WorkspaceIcons {
  getSnapshot(): IconStore;
  subscribe(listener: () => void): () => void;
  /** Load the saved icon or detect one, unless a record already decides it. Concurrent calls share one run. */
  ensure(workspacePath: string): Promise<void>;
  /** Store an uploaded data URL on the host and in the store; false when the value is not an accepted image. */
  save(workspacePath: string, dataUrl: string): Promise<boolean>;
  /** Drop the saved icon and the record, then detect again. */
  reset(workspacePath: string): Promise<void>;
}

/**
 * Create the icon state over the injected host functions.
 * @param deps - host store access, file reader, and session lookup.
 * @returns the observable store and its commands.
 */
export function createWorkspaceIcons(deps: WorkspaceIconDeps): WorkspaceIcons {
  const now = deps.now ?? Date.now;
  let store = emptyIconStore();
  const listeners = new Set<() => void>();
  const pending = new Map<string, Promise<void>>();
  /** Paths whose saved icon was already looked up in this session. */
  const checked = new Set<string>();
  /** Per-path change counters; a detection run discards a result that a save or reset outran. */
  const revisions = new Map<string, number>();
  let running = 0;
  const waiting: Array<() => void> = [];

  const stamp = (instant = now()): string => new Date(instant).toISOString();
  const commit = (next: IconStore): void => {
    store = next;
    for (const listener of listeners) listener();
  };
  const acquire = async (): Promise<void> => {
    if (running >= CONCURRENCY) await new Promise<void>(resolve => { waiting.push(resolve); });
    running += 1;
  };
  const release = (): void => {
    running -= 1;
    waiting.shift()?.();
  };

  const revisionOf = (path: string): number => revisions.get(path) ?? 0;
  const bump = (path: string): number => {
    const next = revisionOf(path) + 1;
    revisions.set(path, next);
    return next;
  };

  const detect = async (path: string): Promise<void> => {
    const sessionId = deps.sessionFor(path);
    if (sessionId === undefined) return;
    await acquire();
    const revision = revisionOf(path);
    try {
      let loadFailed = false;
      if (deps.load !== undefined && !checked.has(path)) {
        checked.add(path);
        try {
          const saved = await deps.load(path);
          if (saved !== undefined) {
            if (!fitsIconLimit(saved)) {
              console.warn('[lab-sidebar] ignoring an oversized saved workspace icon:', path);
            } else if (revisionOf(path) === revision) {
              commit(setUploadedIcon(store, path, saved, stamp()));
              return;
            } else {
              return;
            }
          }
        } catch (reason) {
          // The saved icon is unknown. Detection still runs; a miss is not cached,
          // so the next mount retries the host.
          checked.delete(path);
          loadFailed = true;
          console.warn('[lab-sidebar] saved workspace icon read failed:', path, reason);
        }
      }
      if (revisionOf(path) !== revision) return;
      let failed = false;
      const read = async (file: string): Promise<Uint8Array | undefined> => {
        try {
          return await deps.read(sessionId, file);
        } catch (reason) {
          // A missing file is an ordinary answer. Anything else keeps detection
          // going but must not become a cached miss.
          if (!isMissingFileFailure(reason)) {
            failed = true;
            console.warn('[lab-sidebar] workspace icon read failed:', file, reason);
          }
          return undefined;
        }
      };
      const icon: DetectedIcon | undefined = await detectIcon(path, read);
      // A failure this run means the answer is unknown, so nothing is recorded
      // and the next mount tries again.
      if (icon === undefined && (failed || loadFailed)) return;
      // An upload or a reset during the reads outranks this result.
      if (revisionOf(path) !== revision) return;
      commit(icon === undefined
        ? setNegativeIcon(store, path, new Date(now() + NEGATIVE_RETRY_MS).toISOString(), stamp())
        : setDetectedIcon(store, path, icon.dataUrl, icon.source, stamp()));
    } finally {
      release();
    }
  };

  const ensure = (path: string): Promise<void> => {
    if (iconFor(store, path, now()) !== undefined) return Promise.resolve();
    const inFlight = pending.get(path);
    if (inFlight !== undefined) return inFlight;
    const job = detect(path).finally(() => { pending.delete(path); });
    pending.set(path, job);
    return job;
  };

  const save = async (path: string, dataUrl: string): Promise<boolean> => {
    if (deps.save === undefined || !fitsIconLimit(dataUrl)) return false;
    await deps.save(path, dataUrl);
    bump(path);
    checked.add(path);
    commit(setUploadedIcon(store, path, dataUrl, stamp()));
    return true;
  };

  const reset = async (path: string): Promise<void> => {
    // Reset is authoritative: clear a saved icon even when this client shows a
    // detected one, so another client's upload cannot reappear after the click.
    if (deps.remove !== undefined) await deps.remove(path);
    bump(path);
    checked.delete(path);
    commit(clearIcon(store, path));
    // A detection started before the reset must finish before a fresh one starts;
    // its result is discarded by the revision check.
    const inFlight = pending.get(path);
    if (inFlight !== undefined) await inFlight.catch(() => {});
    await ensure(path);
  };

  return {
    getSnapshot: () => store,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => { listeners.delete(listener); };
    },
    ensure,
    save,
    reset,
  };
}
