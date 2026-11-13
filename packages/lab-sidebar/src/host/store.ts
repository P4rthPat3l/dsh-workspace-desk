/** Host storage for custom workspace icons: validation, index, files, eviction.
 * Pure filesystem work over one directory, so the tests run it in a temp dir. */
import { Buffer } from 'node:buffer';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

/** Largest accepted source icon, before any encoding. */
export const MAX_ICON_BYTES = 1024 * 1024;

/** Default number of stored workspace icons. */
export const MAX_ICON_ENTRIES = 200;

/** Default total bytes of stored icon files. */
export const MAX_STORE_BYTES = 32 * 1024 * 1024;

const INDEX_FILE = 'index.json';
const INDEX_VERSION = 1;

/** A stored file name: the workspace path hash plus a MIME-derived extension. */
const FILE_NAME = /^[a-f0-9]{64}\.(?:png|jpg|webp|gif|svg|ico)$/u;

/** One base64 image data URL with an accepted MIME type. */
const DATA_URL = /^data:(image\/(?:png|jpeg|webp|gif|svg\+xml|x-icon|vnd\.microsoft\.icon));base64,([A-Za-z0-9+/]+={0,2})$/u;

/** Accepted MIME types and the extension each writes. */
const EXTENSION: Readonly<Record<string, string>> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
  'image/x-icon': 'ico',
  'image/vnd.microsoft.icon': 'ico',
};

/** One stored icon record as the index holds it. */
export interface StoredIcon {
  readonly file: string;
  readonly mime: string;
  readonly bytes: number;
  readonly updatedAt: string;
}

/** The versioned index of stored icons keyed by workspace path. */
export interface IconIndex {
  readonly version: 1;
  readonly entries: Readonly<Record<string, StoredIcon>>;
}

/** One read icon ready to become a data URL. */
export interface StoredIconValue {
  readonly dataUrl: string;
  readonly updatedAt: string;
}

/** A store failure the route maps to a wire code. */
export class IconStoreError extends Error {
  readonly code: string;

  /** @param code - stable wire code.
   * @param message - operator-facing description. */
  constructor(code: string, message: string) {
    super(message);
    this.name = 'IconStoreError';
    this.code = code;
  }
}

/** Caps one store instance; the tests lower them. */
export interface IconStoreOptions {
  readonly maxEntries?: number;
  readonly maxBytes?: number;
  /** Clock override for deterministic tests. */
  readonly now?: () => number;
}

/** Custom icon persistence for one directory. */
export interface IconStore {
  /** Read one workspace icon, or undefined when none is stored. */
  get(workspacePath: string): Promise<StoredIconValue | undefined>;
  /** Validate and store one icon; a stored file replaces the previous one. */
  set(workspacePath: string, dataUrl: string): Promise<{ readonly updatedAt: string }>;
  /** Remove one workspace icon; false when none was stored. */
  remove(workspacePath: string): Promise<boolean>;
}

/** Empty index shape. */
export function emptyIndex(): IconIndex {
  return { version: INDEX_VERSION, entries: {} };
}

/**
 * Check one absolute workspace path.
 * @param value - candidate value from the wire.
 * @returns the path, or undefined when it is not a usable absolute path.
 */
export function validateWorkspacePath(value: unknown): string | undefined {
  if (typeof value !== 'string' || value === '' || value.length > 4096 || value.includes('\u0000')) return undefined;
  if (value.startsWith('/')) return value;
  if (/^[A-Za-z]:[\\/]/u.test(value)) return value;
  if (value.startsWith('\\\\')) return value;
  return undefined;
}

/**
 * Decode and validate one icon data URL.
 * @param value - candidate data URL.
 * @returns the MIME type and bytes, or undefined when the value is unusable.
 */
export function parseIconDataUrl(value: unknown): { readonly mime: string; readonly bytes: Uint8Array } | undefined {
  if (typeof value !== 'string') return undefined;
  const match = DATA_URL.exec(value);
  if (match === null) return undefined;
  const mime = match[1] ?? '';
  if (EXTENSION[mime] === undefined) return undefined;
  const encoded = match[2] ?? '';
  const bytes = Buffer.from(encoded, 'base64');
  if (bytes.length === 0 || bytes.length > MAX_ICON_BYTES) return undefined;
  if (!looksLikeImage(mime, bytes)) return undefined;
  return { mime, bytes: new Uint8Array(bytes) };
}

/** Content check: an extension must not put a broken image in a row. */
function looksLikeImage(mime: string, bytes: Uint8Array): boolean {
  const at = (index: number): number => bytes[index] ?? -1;
  const starts = (prefix: readonly number[]): boolean => prefix.every((value, index) => at(index) === value);
  switch (mime) {
    case 'image/svg+xml': return Buffer.from(bytes).toString('utf8').includes('<svg');
    case 'image/png': return starts([0x89, 0x50, 0x4e, 0x47]);
    case 'image/jpeg': return starts([0xff, 0xd8, 0xff]);
    case 'image/gif': return starts([0x47, 0x49, 0x46, 0x38]);
    case 'image/webp': return starts([0x52, 0x49, 0x46, 0x46]) && at(8) === 0x57 && at(9) === 0x45 && at(10) === 0x42 && at(11) === 0x50;
    case 'image/x-icon':
    case 'image/vnd.microsoft.icon': return starts([0x00, 0x00, 0x01, 0x00]);
    default: return false;
  }
}

/**
 * File name for one workspace path and MIME type.
 * @param workspacePath - canonical workspace path.
 * @param mime - accepted image MIME type.
 * @returns a hash plus the MIME extension.
 */
export function iconFileName(workspacePath: string, mime: string): string {
  const hash = createHash('sha256').update(workspacePath).digest('hex');
  return `${hash}.${EXTENSION[mime] ?? 'png'}`;
}

/**
 * Parse the index, dropping entries that cannot point at a stored file.
 * @param raw - index file text, or null when it does not exist.
 * @returns the usable index; a corrupt file yields an empty one.
 */
export function parseIndex(raw: string | null | undefined): IconIndex {
  if (raw === null || raw === undefined || raw === '') return emptyIndex();
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return emptyIndex();
  }
  if (typeof parsed !== 'object' || parsed === null || !('version' in parsed) || parsed.version !== INDEX_VERSION) {
    return emptyIndex();
  }
  const entries = 'entries' in parsed ? parsed.entries : undefined;
  if (typeof entries !== 'object' || entries === null) return emptyIndex();
  const next: Record<string, StoredIcon> = {};
  for (const [workspacePath, value] of Object.entries(entries)) {
    const entry = parseEntry(value);
    if (entry !== undefined) next[workspacePath] = entry;
  }
  return { version: INDEX_VERSION, entries: next };
}

/** One usable index entry, or undefined for a malformed one. */
function parseEntry(value: unknown): StoredIcon | undefined {
  if (typeof value !== 'object' || value === null) return undefined;
  const record: { readonly [key: string]: unknown } = { ...value };
  const file = record.file;
  const mime = record.mime;
  const bytes = record.bytes;
  const updatedAt = record.updatedAt;
  if (typeof file !== 'string' || !FILE_NAME.test(file)) return undefined;
  if (typeof mime !== 'string' || EXTENSION[mime] === undefined) return undefined;
  if (!file.endsWith(`.${EXTENSION[mime]}`)) return undefined;
  if (typeof bytes !== 'number' || !Number.isSafeInteger(bytes) || bytes <= 0 || bytes > MAX_ICON_BYTES) return undefined;
  if (typeof updatedAt !== 'string' || Number.isNaN(Date.parse(updatedAt))) return undefined;
  return { file, mime, bytes, updatedAt };
}

/**
 * Create one icon store over a directory.
 * @param directory - absolute data directory; created on the first write.
 * @param options - cap overrides for tests.
 * @returns the store.
 */
export function createIconStore(directory: string, options: IconStoreOptions = {}): IconStore {
  const maxEntries = options.maxEntries ?? MAX_ICON_ENTRIES;
  const maxBytes = options.maxBytes ?? MAX_STORE_BYTES;
  const clock = options.now ?? Date.now;
  let index: IconIndex | undefined;
  let queue: Promise<unknown> = Promise.resolve();

  const readIndex = async (): Promise<IconIndex> => {
    if (index !== undefined) return index;
    let raw: string | null = null;
    try {
      raw = await readFile(join(directory, INDEX_FILE), 'utf8');
    } catch (error) {
      if (!isMissing(error)) throw error;
    }
    index = parseIndex(raw);
    return index;
  };

  const writeIndex = async (next: IconIndex): Promise<void> => {
    await mkdir(directory, { recursive: true, mode: 0o700 });
    const temp = join(directory, `.${INDEX_FILE}.${randomUUID()}.tmp`);
    await writeFile(temp, JSON.stringify(next), { encoding: 'utf8', mode: 0o600 });
    await rename(temp, join(directory, INDEX_FILE));
    index = next;
  };

  const writeBytes = async (file: string, bytes: Uint8Array): Promise<void> => {
    await mkdir(directory, { recursive: true, mode: 0o700 });
    const temp = join(directory, `.${file}.${randomUUID()}.tmp`);
    await writeFile(temp, bytes, { mode: 0o600 });
    await rename(temp, join(directory, file));
  };

  const run = <T>(task: () => Promise<T>): Promise<T> => {
    const job = queue.then(task, task);
    queue = job.then(() => undefined, () => undefined);
    return job;
  };

  const read = (workspacePath: string): Promise<StoredIconValue | undefined> => run(async () => {
    const current = await readIndex();
    const entry = current.entries[workspacePath];
    if (entry === undefined) return undefined;
    let bytes: Buffer;
    try {
      bytes = await readFile(join(directory, entry.file));
    } catch (error) {
      if (!isMissing(error)) throw error;
      await writeIndex({ version: INDEX_VERSION, entries: without(current.entries, workspacePath) });
      return undefined;
    }
    if (bytes.length === 0 || bytes.length > MAX_ICON_BYTES) {
      await writeIndex({ version: INDEX_VERSION, entries: without(current.entries, workspacePath) });
      return undefined;
    }
    return { dataUrl: `data:${entry.mime};base64,${bytes.toString('base64')}`, updatedAt: entry.updatedAt };
  });

  const write = (workspacePath: string, dataUrl: string): Promise<{ readonly updatedAt: string }> => run(async () => {
    const parsed = parseIconDataUrl(dataUrl);
    if (parsed === undefined) {
      throw new IconStoreError('lab-icons/unsupported', 'The icon is not a supported image within the size limit.');
    }
    const current = await readIndex();
    const file = iconFileName(workspacePath, parsed.mime);
    await writeBytes(file, parsed.bytes);
    const updatedAt = new Date(clock()).toISOString();
    const entries: Record<string, StoredIcon> = {
      ...current.entries,
      [workspacePath]: { file, mime: parsed.mime, bytes: parsed.bytes.length, updatedAt },
    };
    const kept = capIndex({ version: INDEX_VERSION, entries }, maxEntries, maxBytes);
    const keptFiles = new Set(Object.values(kept.entries).map(entry => entry.file));
    for (const entry of Object.values(entries)) {
      if (keptFiles.has(entry.file)) continue;
      await unlink(join(directory, entry.file)).catch((error: unknown) => {
        if (!isMissing(error)) throw error;
      });
    }
    await writeIndex(kept);
    return { updatedAt };
  });

  const drop = (workspacePath: string): Promise<boolean> => run(async () => {
    const current = await readIndex();
    const entry = current.entries[workspacePath];
    if (entry === undefined) return false;
    await unlink(join(directory, entry.file)).catch((error: unknown) => {
      if (!isMissing(error)) throw error;
    });
    await writeIndex({ version: INDEX_VERSION, entries: without(current.entries, workspacePath) });
    return true;
  });

  return { get: read, set: write, remove: drop };
}

/** Keep the newest entries inside both caps, oldest first to drop. */
function capIndex(index: IconIndex, maxEntries: number, maxBytes: number): IconIndex {
  const rows = Object.entries(index.entries);
  let total = rows.reduce((sum, [, entry]) => sum + entry.bytes, 0);
  if (rows.length <= maxEntries && total <= maxBytes) return index;
  rows.sort((left, right) => Date.parse(left[1].updatedAt) - Date.parse(right[1].updatedAt));
  const kept: Record<string, StoredIcon> = { ...index.entries };
  let count = rows.length;
  for (const [workspacePath, entry] of rows) {
    if (count <= maxEntries && total <= maxBytes) break;
    delete kept[workspacePath];
    count -= 1;
    total -= entry.bytes;
  }
  return { version: INDEX_VERSION, entries: kept };
}

/** One record map without a key. */
function without(entries: Readonly<Record<string, StoredIcon>>, key: string): Record<string, StoredIcon> {
  const next: Record<string, StoredIcon> = { ...entries };
  delete next[key];
  return next;
}

/** Whether a filesystem error reports absence. */
function isMissing(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT';
}
