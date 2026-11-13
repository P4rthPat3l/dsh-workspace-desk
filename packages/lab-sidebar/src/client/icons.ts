/** Workspace icon records: validation, storage, fallbacks, and eviction.
 * Pure functions only, so the rules stay testable without a browser. */

/** One stored icon decision for a canonical workspace path. */
export interface IconRecord {
  readonly kind: 'uploaded' | 'detected' | 'negative' | 'invalid';
  readonly dataUrl?: string;
  readonly source?: string;
  readonly updatedAt: string;
  readonly retryAfter?: string;
}

/** The versioned icon store. */
export interface IconStore {
  readonly version: 1;
  readonly entries: Readonly<Record<string, IconRecord>>;
}

/** Minimal storage surface, matching localStorage. */
export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

/** localStorage key for the icon store. */
export const ICON_KEY = 'dsh.lab.icons.v1';

/** Largest accepted icon, before base64 expansion. */
export const MAX_ICON_BYTES = 128 * 1024;

/** Most workspace paths the store keeps. */
export const MAX_ICON_ENTRIES = 64;

/** Empty store. */
export function emptyIconStore(): IconStore {
  return { version: 1, entries: {} };
}

/** Whether a string is an accepted base64 image data URL. */
export function isIconDataUrl(value: unknown): value is string {
  return typeof value === 'string'
    && /^data:image\/(png|jpeg|webp|gif|svg\+xml);base64,[A-Za-z0-9+/=]+$/u.test(value);
}

/** Decoded byte length of a base64 data URL, or 0 when malformed. */
export function dataUrlBytes(value: string): number {
  const comma = value.indexOf(',');
  if (comma < 0) return 0;
  const body = value.slice(comma + 1);
  const padding = body.endsWith('==') ? 2 : body.endsWith('=') ? 1 : 0;
  return Math.max(0, Math.floor((body.length * 3) / 4) - padding);
}

/** Whether an uploaded data URL fits the icon limit. */
export function fitsIconLimit(value: string, maxBytes = MAX_ICON_BYTES): boolean {
  return isIconDataUrl(value) && dataUrlBytes(value) <= maxBytes;
}

/** Validate one parsed record. Returns undefined for records that cannot render. */
export function parseRecord(value: unknown): IconRecord | undefined {
  if (typeof value !== 'object' || value === null) return undefined;
  const record = value as Record<string, unknown>;
  const kind = record.kind;
  if (kind !== 'uploaded' && kind !== 'detected' && kind !== 'negative' && kind !== 'invalid') return undefined;
  if (typeof record.updatedAt !== 'string' || record.updatedAt === '') return undefined;
  if (kind === 'uploaded' || kind === 'detected') {
    if (!isIconDataUrl(record.dataUrl)) return undefined;
    if (dataUrlBytes(record.dataUrl) > MAX_ICON_BYTES) return undefined;
  }
  const source = typeof record.source === 'string' ? record.source : undefined;
  const retryAfter = typeof record.retryAfter === 'string' ? record.retryAfter : undefined;
  return {
    kind,
    ...(record.dataUrl === undefined ? {} : { dataUrl: record.dataUrl as string }),
    ...(source === undefined ? {} : { source }),
    updatedAt: record.updatedAt,
    ...(retryAfter === undefined ? {} : { retryAfter }),
  };
}

/** Parse the stored JSON, discarding invalid entries. */
export function parseIconStore(raw: string | null): IconStore {
  if (raw === null || raw === '') return emptyIconStore();
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw) as unknown;
  } catch {
    return emptyIconStore();
  }
  if (typeof parsed !== 'object' || parsed === null) return emptyIconStore();
  const entries = (parsed as { entries?: unknown }).entries;
  if (typeof entries !== 'object' || entries === null) return emptyIconStore();
  const next: Record<string, IconRecord> = {};
  for (const [path, value] of Object.entries(entries as Record<string, unknown>)) {
    const record = parseRecord(value);
    if (record !== undefined) next[path] = record;
  }
  return { version: 1, entries: next };
}

/** Read the store from storage; a missing or failing storage yields an empty store. */
export function readIconStore(storage: StorageLike | undefined): IconStore {
  if (storage === undefined) return emptyIconStore();
  try {
    return parseIconStore(storage.getItem(ICON_KEY));
  } catch {
    return emptyIconStore();
  }
}

/** Write the store, evicting the oldest records beyond the cap. */
export function writeIconStore(store: IconStore, storage: StorageLike | undefined): IconStore {
  const capped = capStore(store);
  if (storage !== undefined) {
    try {
      storage.setItem(ICON_KEY, JSON.stringify(capped));
    } catch {
      // Quota or private mode: the in-memory store still serves this render.
    }
  }
  return capped;
}

/** Keep the newest records under the cap. */
export function capStore(store: IconStore, max = MAX_ICON_ENTRIES): IconStore {
  const entries = Object.entries(store.entries);
  if (entries.length <= max) return store;
  const keep = entries
    .sort((left, right) => Date.parse(right[1].updatedAt) - Date.parse(left[1].updatedAt))
    .slice(0, max);
  return { version: 1, entries: Object.fromEntries(keep) };
}

/** Record an uploaded icon for one path. */
export function setUploadedIcon(
  store: IconStore,
  path: string,
  dataUrl: string,
  now = new Date().toISOString(),
): IconStore {
  if (!fitsIconLimit(dataUrl)) return store;
  return writeInMemory(store, path, { kind: 'uploaded', dataUrl, updatedAt: now });
}

/** Record a failed or empty detection with a retry horizon. */
export function setNegativeIcon(
  store: IconStore,
  path: string,
  retryAfter: string,
  now = new Date().toISOString(),
): IconStore {
  return writeInMemory(store, path, { kind: 'negative', updatedAt: now, retryAfter });
}

/** Drop one path's record. */
export function clearIcon(store: IconStore, path: string): IconStore {
  const entries = { ...store.entries };
  delete entries[path];
  return { version: 1, entries };
}

/** Resolve the renderable record for a path, honouring a negative retry horizon. */
export function iconFor(store: IconStore, path: string, now = Date.now()): IconRecord | undefined {
  const record = store.entries[path];
  if (record === undefined) return undefined;
  if (record.kind === 'negative' && record.retryAfter !== undefined && Date.parse(record.retryAfter) > now) {
    return record;
  }
  if (record.kind === 'negative') return undefined;
  return record;
}

/** Initials for a fallback tile: two letters for Latin text, one glyph otherwise. */
export function initialsOf(label: string, fallbackPath = ''): string {
  const source = label.trim() !== '' ? label.trim() : basename(fallbackPath);
  if (source === '') return '?';
  const words = source.split(/[\s._/-]+/u).filter(word => word !== '');
  const letters = words.length >= 2
    ? [firstGlyph(words[0]), firstGlyph(words[words.length - 1])]
    : [firstGlyph(words[0] ?? source)];
  return letters.join('').toUpperCase();
}

/** Stable tile hue from the workspace path. */
export function hueFor(path: string): number {
  let hash = 0;
  for (let index = 0; index < path.length; index += 1) {
    hash = (hash * 31 + path.charCodeAt(index)) | 0;
  }
  return Math.abs(hash) % 360;
}

/** Final path segment. */
export function basename(path: string): string {
  const trimmed = path.replace(/[\\/]+$/u, '');
  const parts = trimmed.split(/[\\/]/u);
  return parts[parts.length - 1] ?? '';
}

function firstGlyph(word: string): string {
  const glyph = Array.from(word)[0] ?? '';
  return glyph;
}

function writeInMemory(store: IconStore, path: string, record: IconRecord): IconStore {
  return { version: 1, entries: { ...store.entries, [path]: record } };
}
