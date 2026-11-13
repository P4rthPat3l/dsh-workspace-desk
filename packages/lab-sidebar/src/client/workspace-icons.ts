/** Workspace icon state: the persisted store, detection runs, and uploads.
 * The Harness calls arrive as functions, so the tests run it in plain Node. */
import type { SessionId } from '@deepseek-ai/dsh-session/types';
import { detectIcon, type DetectedIcon } from './detect.ts';
import {
  clearIcon, iconFor, readIconStore, setDetectedIcon, setNegativeIcon, setUploadedIcon, writeIconStore,
  type IconStore, type StorageLike,
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
  readonly storage: StorageLike | undefined;
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
  /** Detect the icon unless a record already decides it. Concurrent calls share one run. */
  ensure(workspacePath: string): Promise<void>;
  /** Store an uploaded data URL; false when it is not an accepted image within the limit. */
  upload(workspacePath: string, dataUrl: string): boolean;
  /** Drop the stored record and detect again. */
  reset(workspacePath: string): Promise<void>;
}

/**
 * Create the icon state over one storage.
 * @param deps - storage, file reader, and session lookup.
 * @returns the observable store and its commands.
 */
export function createWorkspaceIcons(deps: WorkspaceIconDeps): WorkspaceIcons {
  const now = deps.now ?? Date.now;
  let store = readIconStore(deps.storage);
  const listeners = new Set<() => void>();
  const pending = new Map<string, Promise<void>>();
  let running = 0;
  const waiting: Array<() => void> = [];

  const commit = (next: IconStore): void => {
    store = writeIconStore(next, deps.storage);
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
  const detect = async (path: string): Promise<void> => {
    const sessionId = deps.sessionFor(path);
    if (sessionId === undefined) return;
    await acquire();
    try {
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
      if (icon === undefined && failed) return;
      // An upload or a reset during the reads outranks this result.
      const current = iconFor(store, path, now());
      if (current !== undefined && current.kind === 'uploaded') return;
      const stamp = new Date(now()).toISOString();
      commit(icon === undefined
        ? setNegativeIcon(store, path, new Date(now() + NEGATIVE_RETRY_MS).toISOString(), stamp)
        : setDetectedIcon(store, path, icon.dataUrl, icon.source, stamp));
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

  return {
    getSnapshot: () => store,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => { listeners.delete(listener); };
    },
    ensure,
    upload: (path, dataUrl) => {
      const next = setUploadedIcon(store, path, dataUrl, new Date(now()).toISOString());
      if (next === store) return false;
      commit(next);
      return true;
    },
    reset: (path) => {
      commit(clearIcon(store, path));
      return ensure(path);
    },
  };
}
