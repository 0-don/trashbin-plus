import type { BunPlugin } from "bun";
import { execSync } from "child_process";
import { existsSync, mkdirSync, readFileSync, watch, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join, resolve } from "path";
import postcss from "postcss";
import postcssrc from "postcss-load-config";

const NAME_ID = "trashbin-plus";
const STYLE_ID = NAME_ID.replace(/-/g, "D");
const ENTRY = resolve("src/app.tsx");
const TEMP = join(tmpdir(), NAME_ID);
const TEMP_ENTRY = join(TEMP, "entry.ts");
const argv = Bun.argv.join(" ");
const watchMode = argv.includes("--watch");
const minifyMode = argv.includes("--minify");
const outMatch = argv.match(/--out=(\S+)/);
const outDir = outMatch
  ? resolve(outMatch[1])
  : join(dirname(execSync("spicetify -c", { encoding: "utf-8" }).trim()), "Extensions");
const outFile = join(outDir, `${NAME_ID}.js`);

mkdirSync(outDir, { recursive: true });

const postcssPlugin: BunPlugin = {
  name: "postcss",
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async ({ path: p }) => {
      const { plugins } = await postcssrc({}, dirname(p));
      const result = await postcss(plugins).process(readFileSync(p, "utf-8"), { from: p });
      return { contents: result.css, loader: "css" };
    });
  },
};

const externalGlobals: BunPlugin = {
  name: "external-globals",
  setup(build) {
    const map: Record<string, string> = {
      react: "Spicetify.React",
      "react-dom": "Spicetify.ReactDOM",
    };
    const filter = new RegExp(`^(${Object.keys(map).join("|")})$`);
    build.onResolve({ filter }, ({ path: p }) => ({ path: p, namespace: "ext" }));
    build.onLoad({ filter: /.*/, namespace: "ext" }, ({ path: p }) => ({
      contents: `module.exports = ${map[p]}`,
      loader: "js",
    }));
  },
};

const ortWorkerString: BunPlugin = {
  name: "ort-worker-string",
  setup(build) {
    build.onResolve({ filter: /^virtual:ort-worker-wasm$/ }, ({ path: p }) => ({
      path: p,
      namespace: "ort-worker",
    }));
    build.onLoad({ filter: /.*/, namespace: "ort-worker" }, () => {
      let code = readFileSync(resolve("node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs"), "utf-8");
      code = code.replace(/import\.meta\.url/g, "self.location.href");
      code = code.replace(/new URL\("ort-wasm-simd-threaded[^"]*\.wasm",self\.location\.href\)\.href/g, '""');
      code = code.replace(/export\{(.+?)\}/, (_, e: string) =>
        `self.ort={${e.replace(/(\w+) as (\w+)/g, "$2:$1")}}`,
      );
      return { contents: `export const ORT_WASM_CODE = ${JSON.stringify(code)};`, loader: "js" };
    });
  },
};

async function runBuild() {
  mkdirSync(TEMP, { recursive: true });
  writeFileSync(TEMP_ENTRY, `import main from '${ENTRY.replace(/\\/g, "/")}';(async()=>{await main()})();`);

  const result = await Bun.build({
    entrypoints: [TEMP_ENTRY],
    outdir: TEMP,
    target: "browser",
    format: "esm",
    naming: `${NAME_ID}.[ext]`,
    minify: minifyMode,
    define: { "import.meta.url": "location.href" },
    plugins: [postcssPlugin, externalGlobals, ortWorkerString],
  });

  if (!result.success) {
    for (const log of result.logs) console.error(log);
    return;
  }

  let js = readFileSync(join(TEMP, `${NAME_ID}.js`), "utf-8");
  const cssPath = join(TEMP, `${NAME_ID}.css`);
  if (existsSync(cssPath)) {
    const css = readFileSync(cssPath, "utf-8");
    js += `\n;(()=>{if(!document.getElementById("${STYLE_ID}")){const s=document.createElement("style");s.id="${STYLE_ID}";s.textContent=String.raw\`${css}\`.trim();document.head.appendChild(s)}})()`;
  }

  writeFileSync(outFile, `(async()=>{while(!Spicetify.React||!Spicetify.ReactDOM)await new Promise(r=>setTimeout(r,10));${js}})()`);
  console.log("Build succeeded.");
}

await runBuild();

if (watchMode) {
  console.log("Watching...");
  let t: Timer | null = null;
  watch("src", { recursive: true }, (_e, f) => {
    if (!f) return;
    if (t) clearTimeout(t);
    t = setTimeout(async () => { console.log(`\n${f} changed`); await runBuild(); }, 200);
  });
}
