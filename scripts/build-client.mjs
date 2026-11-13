// Builds the LabSideBar client half into the Harness module-loader format.
// Sources are TypeScript; only the emitted client.js is loaded at runtime.
//
// The ported upstream components import CSS modules. esbuild has no CSS-module
// support, so this script transforms each `.module.css` into a deterministic
// class map plus one concatenated stylesheet, and exposes that stylesheet to
// the bundle through `__LAB_CSS__`.
import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const PACKAGE = 'lab-sidebar';

// Modules the page's shared table provides. Everything else is bundled.
const EXTERNAL = [
  'react', 'react-dom', 'react/jsx-runtime', 'react-dom/client',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-store',
  '@deepseek-ai/dsh-client-ui-primitives',
  '@deepseek-ai/dsh-client-ui-slots',
];

const cssChunks = [];

/** Deterministic CSS-module class map and prefixed stylesheet. */
function cssModulesPlugin() {
  return {
    name: 'css-modules',
    setup(build) {
      build.onLoad({ filter: /\.module\.css$/ }, async (args) => {
        const source = await fs.readFile(args.path, 'utf8');
        const stem = path.basename(args.path, '.module.css').replace(/[^A-Za-z0-9_]/gu, '_');
        const map = {};
        for (const match of source.replace(/\/\*[\s\S]*?\*\//gu, '').matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/gu)) {
          if (map[match[1]] === undefined) map[match[1]] = `${stem}_${match[1]}`;
        }
        const protectedParts = [];
        const protect = (text) => {
          protectedParts.push(text);
          return `\u0000${protectedParts.length - 1}\u0000`;
        };
        // Comments go first: an apostrophe in prose would otherwise open a
        // "string" that shields the rules after it from renaming.
        let css = source
          .replace(/\/\*[\s\S]*?\*\//gu, '')
          // `:global(x)` is CSS-module syntax, not CSS: emit `x` unrenamed. A
          // leftover `:global(...)` invalidates the whole selector list it sits in.
          .replace(/:global\(([^)]*)\)/gu, (_, inner) => protect(inner))
          .replace(/url\(([^)]*)\)/gu, protect)
          .replace(/(['"])(?:\\.|(?!\1)[^\\])*\1/gu, protect);
        css = css.replace(/\.([A-Za-z_][A-Za-z0-9_-]*)/gu, (whole, name) => (
          map[name] === undefined ? whole : `.${map[name]}`
        ));
        // CSS modules scope keyframe names too; a global name would collide with
        // another plugin's keyframes of the same name.
        for (const match of css.matchAll(/@keyframes\s+([A-Za-z_][A-Za-z0-9_-]*)/gu)) {
          const scoped = `${stem}_${match[1]}`;
          css = css
            .replace(new RegExp(`(@keyframes\\s+)${match[1]}\\b`, 'gu'), `$1${scoped}`)
            .replace(new RegExp(`(animation(?:-name)?\\s*:[^;{}]*?)\\b${match[1]}\\b`, 'gu'), `$1${scoped}`);
        }
        css = css.replace(/\u0000(\d+)\u0000/gu, (_, index) => protectedParts[Number(index)]);
        cssChunks.push(css);
        return {
          contents: `export default ${JSON.stringify(map)};`,
          loader: 'js',
          resolveDir: path.dirname(args.path),
        };
      });
    },
  };
}

/** Wrap a CommonJS bundle in the Harness module-loader shape. */
function wrap(id, js, css) {
  return `globalThis.__LAB_CSS__ = ${JSON.stringify(css)};
window.__ModuleLoader__.load({
  id: ${JSON.stringify(id)},
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
${js}
    return module.exports;
  },
});
`;
}

const dir = path.join(ROOT, 'packages', PACKAGE);
const entry = path.join(dir, 'src/client/index.tsx');
const manifest = JSON.parse(await fs.readFile(path.join(dir, 'package.json'), 'utf8'));

const result = await build({
  entryPoints: [entry],
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome120'],
  minify: false,
  sourcemap: false,
  jsx: 'automatic',
  jsxImportSource: 'react',
  external: EXTERNAL,
  plugins: [cssModulesPlugin()],
  logLevel: 'silent',
});

if (result.errors.length > 0) {
  for (const error of result.errors) console.error(error.text);
  throw new Error(`bundle failed: ${PACKAGE}`);
}

const css = cssChunks.join('\n');
const out = path.join(dir, 'client.js');
await fs.writeFile(out, wrap(manifest.name, result.outputFiles[0].text, css));
console.log(`${PACKAGE}: client.js ${result.outputFiles[0].text.length} bytes, css ${css.length} bytes`);
