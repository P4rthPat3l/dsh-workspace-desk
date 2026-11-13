/** Workspace icon records: validation, precedence, and the in-memory store.
 * Custom icons persist on the host; this module owns only the state a row renders. */

/** One icon decision for a canonical workspace path. */
export interface IconRecord {
  readonly kind: 'uploaded' | 'detected' | 'negative';
  readonly dataUrl?: string;
  readonly source?: string;
  readonly updatedAt: string;
  readonly retryAfter?: string;
}

/** The render state for every workspace that has a decision. */
export interface IconStore {
  readonly entries: Readonly<Record<string, IconRecord>>;
}

/** Largest accepted icon source. The host stores the original bytes. */
export const MAX_ICON_BYTES = 1024 * 1024;

/** Empty store. */
export function emptyIconStore(): IconStore {
  return { entries: {} };
}

/** Whether a string is an accepted base64 image data URL. */
export function isIconDataUrl(value: unknown): value is string {
  return typeof value === 'string'
    && /^data:image\/(png|jpeg|webp|gif|svg\+xml|x-icon|vnd\.microsoft\.icon);base64,[A-Za-z0-9+/=]+$/u.test(value);
}

/** Decoded byte length of a base64 data URL, or 0 when malformed. */
export function dataUrlBytes(value: string): number {
  const comma = value.indexOf(',');
  if (comma < 0) return 0;
  const body = value.slice(comma + 1);
  const padding = body.endsWith('==') ? 2 : body.endsWith('=') ? 1 : 0;
  return Math.max(0, Math.floor((body.length * 3) / 4) - padding);
}

/** Whether an icon data URL fits the source limit. */
export function fitsIconLimit(value: string, maxBytes = MAX_ICON_BYTES): boolean {
  return isIconDataUrl(value) && dataUrlBytes(value) <= maxBytes;
}

/** Record a custom icon chosen by the user. */
export function setUploadedIcon(
  store: IconStore,
  path: string,
  dataUrl: string,
  now = new Date().toISOString(),
): IconStore {
  if (!fitsIconLimit(dataUrl)) return store;
  return writeInMemory(store, path, { kind: 'uploaded', dataUrl, updatedAt: now });
}

/** Record an icon found in the workspace files. */
export function setDetectedIcon(
  store: IconStore,
  path: string,
  dataUrl: string,
  source: string,
  now = new Date().toISOString(),
): IconStore {
  if (!fitsIconLimit(dataUrl)) return store;
  return writeInMemory(store, path, { kind: 'detected', dataUrl, source, updatedAt: now });
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
  return { entries };
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

function writeInMemory(store: IconStore, path: string, record: IconRecord): IconStore {
  return { entries: { ...store.entries, [path]: record } };
}
