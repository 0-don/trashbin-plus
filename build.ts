import type { BunPlugin } from "bun";
import { execSync, spawn } from "child_process";
import { mkdirSync, readFileSync, watch, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import postcss from "postcss";
import postcssrc from "postcss-load-config";
import { name as NAME_ID } from "./package.json";

const STYLE_ID = NAME_ID.replace(/-/g, "D");
const watchMode = Bun.argv.includes("--watch");
const minifyMode = !watchMode;
const spicetifyDir = join(
  dirname(execSync("spicetify -c", { encoding: "utf-8" }).trim()),
  "Extensions",
);
const distDir = resolve("dist");

mkdirSync(spicetifyDir, { recursive: true });
if (minifyMode) mkdirSync(distDir, { recursive: true });

const postcssPlugin: BunPlugin = {
  name: "postcss",
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async ({ path: p }) => {
      const { plugins } = await postcssrc({}, dirname(p));
      const result = await postcss(plugins).process(readFileSync(p, "utf-8"), {
        from: p,
      });
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
    build.onResolve({ filter }, ({ path: p }) => ({
      path: p,
      namespace: "ext",
    }));
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
      let code = readFileSync(
        resolve("node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs"),
        "utf-8",
      );
      code = code.replace(/import\.meta\.url/g, "self.location.href");
      code = code.replace(
        /new URL\("ort-wasm-simd-threaded[^"]*\.wasm",self\.location\.href\)\.href/g,
        '""',
      );
      code = code.replace(
        /export\{(.+?)\}/,
        (_, e: string) => `self.ort={${e.replace(/(\w+) as (\w+)/g, "$2:$1")}}`,
      );
      return {
        contents: `export const ORT_WASM_CODE = ${JSON.stringify(code)};`,
        loader: "js",
      };
    });
  },
};

async function runBuild() {
  const result = await Bun.build({
    entrypoints: [resolve("src/app.tsx")],
    target: "browser",
    format: "esm",
    minify: minifyMode,
    plugins: [postcssPlugin, externalGlobals, ortWorkerString],
  });

  if (!result.success) {
    for (const log of result.logs) console.error(log);
    return;
  }

  let js = await result.outputs[0].text();
  const cssOutput = result.outputs.find((o) => o.path.endsWith(".css"));
  if (cssOutput) {
    const css = await cssOutput.text();
    js += `\n;(()=>{if(!document.getElementById("${STYLE_ID}")){const s=document.createElement("style");s.id="${STYLE_ID}";s.textContent=String.raw\`${css}\`.trim();document.head.appendChild(s)}})()`;
  }

  const output = `(async()=>{while(!Spicetify.React||!Spicetify.ReactDOM)await new Promise(r=>setTimeout(r,10));${js}})()`;
  writeFileSync(join(spicetifyDir, `${NAME_ID}.js`), output);
  if (minifyMode) writeFileSync(join(distDir, `${NAME_ID}.js`), output);
  console.log("Build succeeded.");
}

await runBuild();

if (watchMode) {
  console.log("Watching...");
  let t: Timer | null = null;
  watch("src", { recursive: true }, (_e, f) => {
    if (!f) return;
    if (t) clearTimeout(t);
    t = setTimeout(async () => {
      console.log(`\n${f} changed`);
      await runBuild();
    }, 200);
  });
  spawn("spicetify", ["watch", "-e"], { stdio: "inherit" });
}
