/** Workspace icon detection over a byte reader. It imports nothing from the
 * Harness, so the tests run it in plain Node with a fake reader. */
import { MAX_ICON_BYTES } from './icons.ts';

/** Read one file by absolute path; undefined when it is missing or unreadable. */
export type ReadFile = (absolutePath: string) => Promise<Uint8Array | undefined>;

/** A detected icon and the workspace-relative file it came from. */
export interface DetectedIcon {
  readonly dataUrl: string;
  readonly source: string;
}

const MIME: Readonly<Record<string, string>> = {
  svg: 'image/svg+xml',
  png: 'image/png',
  ico: 'image/x-icon',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
};

/** HTML entry points whose `<link rel="icon">` names the project icon. */
const HTML_ENTRIES = ['index.html', 'public/index.html', 'src/index.html'];

/** Conventional icon locations, tried after the declared ones. */
export const CONVENTIONAL_ICONS = [
  'favicon.svg', 'favicon.png', 'favicon.ico',
  'public/favicon.svg', 'public/favicon.png', 'public/favicon.ico',
  'app/icon.svg', 'app/icon.png', 'app/favicon.ico',
  'src/app/icon.svg', 'src/app/icon.png', 'src/app/favicon.ico',
  'static/favicon.svg', 'static/favicon.png', 'static/favicon.ico',
  'assets/icon.png', 'icon.svg', 'icon.png', 'logo.svg', 'logo.png',
];

/**
 * Find a project icon: icons declared by an HTML entry or `package.json`
 * first, then the conventional files.
 * @param root - absolute workspace directory.
 * @param read - byte reader; a file over the icon limit must come back longer than the limit.
 * @returns the first usable icon, or undefined.
 */
export async function detectIcon(root: string, read: ReadFile): Promise<DetectedIcon | undefined> {
  const tried = new Set<string>();
  for (const relative of [...await declaredIcons(root, read), ...CONVENTIONAL_ICONS]) {
    if (tried.has(relative)) continue;
    tried.add(relative);
    const icon = await iconAt(root, relative, read);
    if (icon !== undefined) return icon;
  }
  return undefined;
}

/** Workspace-relative icon paths that an HTML entry or `package.json` names. */
async function declaredIcons(root: string, read: ReadFile): Promise<string[]> {
  const found: string[] = [];
  for (const entry of HTML_ENTRIES) {
    const html = await readText(root, entry, read);
    if (html === undefined) continue;
    const base = entry.includes('/') ? entry.slice(0, entry.lastIndexOf('/')) : '';
    for (const href of linkIconHrefs(html)) found.push(...resolveHref(href, base));
  }
  const manifest = await readText(root, 'package.json', read);
  if (manifest !== undefined) {
    const icon = packageIcon(manifest);
    if (icon !== undefined) found.push(...resolveHref(icon, ''));
  }
  return found;
}

/** `href` values of icon links, in document order. */
export function linkIconHrefs(html: string): string[] {
  const hrefs: string[] = [];
  for (const [tag] of html.matchAll(/<link\b[^>]*>/giu)) {
    const rel = /\brel\s*=\s*["']([^"']*)["']/iu.exec(tag)?.[1]?.toLowerCase() ?? '';
    if (!rel.split(/\s+/u).some(token => token === 'icon' || token === 'apple-touch-icon')) continue;
    const href = /\bhref\s*=\s*["']([^"']+)["']/iu.exec(tag)?.[1];
    if (href !== undefined) hrefs.push(href);
  }
  return hrefs;
}

function packageIcon(text: string): string | undefined {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return undefined;
  }
  if (typeof parsed !== 'object' || parsed === null || !('icon' in parsed)) return undefined;
  return typeof parsed.icon === 'string' && parsed.icon !== '' ? parsed.icon : undefined;
}

/**
 * Workspace-relative candidates for one href. A root-relative href is served
 * from either the project root or its `public/` directory, so both are tried.
 * Remote URLs and paths that leave the workspace yield nothing.
 */
export function resolveHref(href: string, baseDir: string): string[] {
  const clean = href.replace(/%PUBLIC_URL%/gu, '').replace(/[?#].*$/u, '').trim();
  if (clean === '' || /^[a-z][a-z0-9+.-]*:/iu.test(clean) || clean.startsWith('//')) return [];
  if (clean.startsWith('/')) {
    const fromRoot = normalize(clean.slice(1));
    return fromRoot === undefined ? [] : [fromRoot, `public/${fromRoot}`];
  }
  const relative = normalize(baseDir === '' ? clean : `${baseDir}/${clean}`);
  return relative === undefined ? [] : [relative];
}

function normalize(path: string): string | undefined {
  const parts: string[] = [];
  for (const part of path.split('/')) {
    if (part === '' || part === '.') continue;
    if (part === '..') {
      if (parts.length === 0) return undefined;
      parts.pop();
    } else {
      parts.push(part);
    }
  }
  return parts.length === 0 ? undefined : parts.join('/');
}

async function iconAt(root: string, relative: string, read: ReadFile): Promise<DetectedIcon | undefined> {
  const extension = relative.slice(relative.lastIndexOf('.') + 1).toLowerCase();
  const mime = MIME[extension];
  if (mime === undefined) return undefined;
  const bytes = await read(join(root, relative));
  if (bytes === undefined || bytes.length === 0 || bytes.length > MAX_ICON_BYTES) return undefined;
  if (mime === 'image/svg+xml' && !new TextDecoder().decode(bytes).includes('<svg')) return undefined;
  return { dataUrl: `data:${mime};base64,${base64(bytes)}`, source: relative };
}

async function readText(root: string, relative: string, read: ReadFile): Promise<string | undefined> {
  const bytes = await read(join(root, relative));
  return bytes === undefined ? undefined : new TextDecoder().decode(bytes);
}

function join(root: string, relative: string): string {
  return `${root.replace(/[\\/]+$/u, '')}/${relative}`;
}

function base64(bytes: Uint8Array): string {
  let binary = '';
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }
  return btoa(binary);
}
