# trashbin+ (Spicetify extension)

React + zustand + Tailwind v4, bundled by `build.ts` into one file `dist/trashbin-plus.js`. The AI detector training pipeline lives in `ai/` and has its own `ai/CLAUDE.md`.

## How a release reaches users

There is no release step. Spicetify Marketplace reads `manifest.json` (`"main": "dist/trashbin-plus.js"`) and loads that file from GitHub main on every Spotify start:

- URL: `https://cdn.jsdelivr.net/gh/0-don/trashbin-plus@main/dist/trashbin-plus.js`, falling back to `cdn.jsdelivr.xyz` (same path). Marketplace appends `?time=<now>`, so the browser never caches it, but jsDelivr's edge does.
- So a release is: `bun run build`, commit `dist/trashbin-plus.js` together with the source, push to main, purge jsDelivr.
- The version in `package.json` is not checked by anything. Bump it on every published change anyway: it is what the console line (`trashbin+ loaded vX`) and the settings modal show, and the only way to tell which build a user runs.

### Release checklist

```bash
# bump "version" in package.json, then
bun run build                                   # tsc --noEmit + bundle, writes dist/ and ~/.config/spicetify/Extensions/
git add <paths> dist/trashbin-plus.js && git commit -m "..." && git push origin main
curl -s "https://purge.jsdelivr.net/gh/0-don/trashbin-plus@main/dist/trashbin-plus.js"   # expect "status": "finished"
```

### Verify what users get

Compare hashes; all must match the local build:

```bash
sha256sum dist/trashbin-plus.js
for d in net xyz; do curl -s "https://cdn.jsdelivr.$d/gh/0-don/trashbin-plus@main/dist/trashbin-plus.js?time=$(date +%s)" | sha256sum; done
curl -s https://raw.githubusercontent.com/0-don/trashbin-plus/main/dist/trashbin-plus.js | sha256sum
```

Quicker: grep the served file for the new version string (`grep -o '"1\.1\.[0-9]*"'`).

On the user side: the top of Trashbin+ settings shows `Trashbin+ X | Spotify Y | Spicetify Z`, and clicking it copies the line. Ask users for that line first; it answers "do they have the latest build" and "which Spotify/Spicetify" at once. Themes are not in it (Marketplace themes all report `marketplace`), so ask for the theme name separately.

## Running a local build in Spotify

- `bun run dev` (owner usually has it running): `build.ts --watch` rebuilds on every save in `src/` and `spicetify watch -e` reloads Spotify. Every file save therefore reloads the client, which looks like a crash if you are clicking at that moment.
- Without the watcher: `bun run build && spicetify refresh -e`, then reload the window (CDP `Page.reload`, or Ctrl+R in the client).
- Confirm the client actually runs the new build: `fetch("extensions/trashbin-plus.js")` inside the page and look for a string from the change.
- **After Spotify auto-updates** (it did to 1.2.96 on Linux), `spicetify apply` and `refresh` print "Preprocessed Spotify data is outdated" and silently stop copying the extension: builds succeed but never show up. Fix: `spicetify restore backup apply` (restarts Spotify, so not while the owner is mid-task without asking).

## Debugging through CDP

Spotify exposes DevTools on `http://127.0.0.1:9225` (Spicetify DevTools enabled). Pick the target whose url contains `xpui`, open its `webSocketDebuggerUrl`, then:

- `Runtime.evaluate` with `awaitPromise: true` to run code in the page (`Spicetify.*`, `localStorage`, store state). Escaping JS inside Python inside bash breaks easily; write the expression into a small `.ts` file run with `bun`.
- `Page.captureScreenshot` for visual checks, then read the PNG.
- Real clicks need `Input.dispatchMouseEvent` (mouseMoved, mousePressed, mouseReleased). Synthetic `dispatchEvent(new MouseEvent("contextmenu"))` does not open Spotify's menus. To open our modals: right click a library row, then click the menu item found by its text (`Collect song radios into playlist`), or open the profile menu (`button[data-testid=user-widget-link]`) and click `Trashbin+` for settings.
- `CSS.getMatchedStylesForNode` shows which rule wins on an element; that is how the modal style bug below was found.
- **`Runtime.enable` replays the page's earlier console messages.** Seeing `[spicetifyWrapper] Waiting for required webpack modules` right after attaching is the replay of the last page load, not a fresh reload.
- No clipboard tool is installed (X11, no xclip/wl-paste): to test copying, wrap `Spicetify.Platform.ClipboardAPI.copy` in the page and record its argument.
- Versions: `Spicetify.Platform.version` (Spotify), `Spicetify.Config.version` (Spicetify CLI), `Spicetify.Config.current_theme`.
