import type { BunPlugin } from "bun";
import { execSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import postcss from "postcss";
import postcssrc from "postcss-load-config";

const NAME_ID = "trashbin-plus";
const STYLE_ID = NAME_ID.replace(/-/g, "D");
const ENTRY = path.resolve("src/app.tsx");
const TEMP_DIR = path.join(os.tmpdir(), "trashbin-plus-build");
const TEMP_ENTRY = path.join(TEMP_DIR, "entry.ts");

const args = Bun.argv.slice(2);
const watchMode = args.includes("--watch");
const minifyMode = args.includes("--minify");
const outArg = args.find((a) => a.startsWith("--out="));

let outDir: string;
if (outArg) {
  outDir = path.resolve(outArg.split("=")[1]);
} else {
  const spicetifyConfig = execSync("spicetify -c", {
    encoding: "utf-8",
  }).trim();
  outDir = path.join(path.dirname(spicetifyConfig), "Extensions");
}

fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, `${NAME_ID}.js`);

const postcssPlugin: BunPlugin = {
  name: "postcss",
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args) => {
      const source = await Bun.file(args.path).text();
      const { plugins } = await postcssrc({}, path.dirname(args.path));
      const result = await postcss(plugins).process(source, {
        from: args.path,
      });
      return { contents: result.css, loader: "css" };
    });
  },
};

const externalGlobalPlugin: BunPlugin = {
  name: "external-global",
  setup(build) {
    const externals: Record<string, string> = {
      react: "Spicetify.React",
      "react-dom": "Spicetify.ReactDOM",
    };
    const filter = new RegExp(
      "^(" + Object.keys(externals).join("|") + ")$"
    );

    build.onResolve({ filter }, (args) => ({
      path: args.path,
      namespace: "external-global",
    }));

    build.onLoad(
      { filter: /.*/, namespace: "external-global" },
      (args) => ({
        contents: `module.exports = ${externals[args.path]}`,
        loader: "js",
      })
    );
  },
};

async function runBuild() {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  fs.writeFileSync(
    TEMP_ENTRY,
    `import main from '${ENTRY.replace(/\\/g, "/")}';(async () => { await main() })();`
  );

  const result = await Bun.build({
    entrypoints: [TEMP_ENTRY],
    outdir: TEMP_DIR,
    target: "browser",
    format: "esm",
    naming: `${NAME_ID}.[ext]`,
    minify: minifyMode,
    plugins: [postcssPlugin, externalGlobalPlugin],
  });

  if (!result.success) {
    console.error("Build failed:");
    for (const log of result.logs) console.error(log);
    return;
  }

  const tempOut = path.join(TEMP_DIR, `${NAME_ID}.js`);
  let js = fs.readFileSync(tempOut, "utf-8");

  const tempCss = path.join(TEMP_DIR, `${NAME_ID}.css`);
  if (fs.existsSync(tempCss)) {
    const css = fs.readFileSync(tempCss, "utf-8");
    js += `\n(async()=>{if(!document.getElementById("${STYLE_ID}")){var el=document.createElement("style");el.id="${STYLE_ID}";el.textContent=(String.raw\`${css}\`).trim();document.head.appendChild(el)}})()`;
  }

  js = `(async function(){while(!Spicetify.React||!Spicetify.ReactDOM){await new Promise(r=>setTimeout(r,10))}${js}})();`;

  fs.writeFileSync(outFile, js);
  console.log("Build succeeded.");
}

await runBuild();

if (watchMode) {
  console.log("Watching src/ for changes...");
  let debounce: Timer | null = null;
  const watcher = fs.watch("src", { recursive: true }, (_event, filename) => {
    if (!filename) return;
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(async () => {
      console.log(`\n${filename} changed, rebuilding...`);
      await runBuild();
    }, 200);
  });
  process.on("SIGINT", () => {
    watcher.close();
    process.exit(0);
  });
}
