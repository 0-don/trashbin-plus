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

## Storage and debug reports

- Persist data in IndexedDB, never in `localStorage`: Spotify gives all extensions together about 2 MB of `localStorage`, and our AI caches once filled 1.9 MB of it (QuotaExceededError for everyone). Trash lists live in the `songs`/`artists` stores of the `trashbin-plus` database; any other value goes through `storedRecord(key, empty)` in `src/lib/kv-storage.ts` (`kv` store, loaded once, saved in batches, moves a same-named `localStorage` value over on first load). Only the small settings toggles stay in `localStorage`.
- For a bug report, ask for the debug report first: Settings, Storage, "Save a debug report". The JSON has versions, theme, extensions, settings, the page probe (Spicetify APIs, `main-*` class versus `data-testid` markers, row and button counts, where each player bar widget sits, the player bar markup) and the log from `logDebug` in `src/lib/debug-log.ts` (widget states, errors). Log new failure points with `logDebug` so the next report shows them.

## Running a local build in Spotify

- `bun run dev` (owner usually has it running): `build.ts --watch` rebuilds on every save in `src/` and `spicetify watch -e` reloads Spotify. Every file save therefore reloads the client, which looks like a crash if you are clicking at that moment.
- Without the watcher: `bun run build && spicetify refresh -e`, then reload the window (CDP `Page.reload`, or Ctrl+R in the client).
- Confirm the client actually runs the new build: `fetch("extensions/trashbin-plus.js")` inside the page and look for a string from the change.
- **After Spotify auto-updates** (it did to 1.2.96 on Linux), `spicetify apply` and `refresh` print "Preprocessed Spotify data is outdated" and silently stop copying the extension: builds succeed but never show up. Fix: `spicetify restore backup apply` (restarts Spotify, so not while the owner is mid-task without asking).

## Testing another Spotify version

The owner's client is `spotify-launcher` (Arch), install in `~/.local/share/spotify-launcher/install`, CDP flags in `~/.config/spotify-launcher.conf`. Linux builds come from `https://repository.spotify.com/dists/{stable,testing}/non-free/binary-amd64/Packages` (testing is ahead; Windows is ahead of both, 1.3.6 never shipped for Linux). Spicetify's release notes list the supported range per OS.

Order matters, or Spicetify keeps the old backup and refuses to apply later ("backup version mismatched"):

1. Download the `.deb`, check its SHA256 against the Packages file.
2. Keep a copy of the current install (`cp -a install install.bak-<ver>`) and of `~/.local/state/spicetify/Backup` (Spicetify's backup lives there, its version in `[Backup]` of `config-xpui.ini`). Old versions vanish from Spotify's repo, so the copy is the only way back.
3. Stop every `spotify` process (`pkill -x spotify`, never `pkill -f` with a pattern that also matches your own shell), then `spotify-launcher --skip-update --force-update --deb <file>`, then stop Spotify again.
4. On the clean, unpatched install: `spicetify backup apply`, check `[Backup] version` shows the new build, then start Spotify.

Never run `spicetify restore` with a backup from another Spotify version: it writes the old files over the new install. Stopping Spotify also stops the owner's `bun run dev` watcher; tell them to restart it.

## Debugging through CDP

Spotify exposes DevTools on `http://127.0.0.1:9225` (Spicetify DevTools enabled). Pick the target whose url contains `xpui`, open its `webSocketDebuggerUrl`, then:

- `Runtime.evaluate` with `awaitPromise: true` to run code in the page (`Spicetify.*`, `localStorage`, store state). Escaping JS inside Python inside bash breaks easily; write the expression into a small `.ts` file run with `bun`.
- `Page.captureScreenshot` for visual checks, then read the PNG.
- Real clicks need `Input.dispatchMouseEvent` (mouseMoved, mousePressed, mouseReleased). Synthetic `dispatchEvent(new MouseEvent("contextmenu"))` does not open Spotify's menus. To open our modals: right click a library row, then click the menu item found by its text (`Collect song radios into playlist`), or open the profile menu (`button[data-testid=user-widget-link]`) and click `Trashbin+` for settings.
- `CSS.getMatchedStylesForNode` shows which rule wins on an element; that is how the modal style bug below was found.
- **`Runtime.enable` replays the page's earlier console messages.** Seeing `[spicetifyWrapper] Waiting for required webpack modules` right after attaching is the replay of the last page load, not a fresh reload.
- No clipboard tool is installed (X11, no xclip/wl-paste): to test copying, wrap `Spicetify.Platform.ClipboardAPI.copy` in the page and record its argument.
- Versions: `Spicetify.Platform.version` (Spotify), `Spicetify.Config.version` (Spicetify CLI), `Spicetify.Config.current_theme`.

## Spotify 1.3.x notes (November 2026)

- Spotify 1.3.4 to 1.3.6 renamed page elements; Spicetify 2.46 maps them for 1.3.4 to 1.3.6. Anything we select by a Spicetify remapped class (`main-*`) disappears when the map misses a build, so pair it with a Spotify attribute (`[role="row"]`, `data-testid`). Issue #3 (Windows 1.3.6) lost the playlist row icons this way.
- `Spicetify.ContextMenu.Item` calls `shouldAdd` while the menu renders, and its `icon` setter (`leadingIcon`) re-renders on every assignment, even with the same value. Never assign `icon` or `name` inside `shouldAdd` unless the value changed: it loops until React throws error #301 and takes the library panel down (issue #3, fixed in 1.1.22). Repro: right click a playlist in the library and check the panel does not turn into "Something went wrong".
- Do not style elements inside `.main-trackCreditsModal-mainSection` globally: every extension's `Spicetify.PopupModal` (Marketplace's Reload dialog included) renders there.
- `Spicetify.Playbar.Widget` mounts under `.main-nowPlayingWidget-nowPlaying` and silently drops the widget when that remapped class is missing. `keepWidgetMounted` (`src/lib/playbar-utils.ts`) re-appends wanted widgets to the first of `NOW_PLAYING_TARGETS`: `now-playing-widget` (up to 1.3.7), `now-playing-widget-v2` (Spotify 1.3.8 renamed it), then any `[role="region"]` inside `now-playing-bar` (issue #3, 1.1.23 and 1.1.25). Never match the prefix `now-playing-widget`: the 1.3.8 byline is `now-playing-widget-v2-byline`. To simulate a missing class, do not strip it from the element: in Spicetify that class also carries the layout, so the bar breaks and the screenshot lies; count the widget elements instead.
- If nothing of ours renders and no error shows, check `Spicetify.ReactDOM`: the bundle waits for it, and on a few reloads right after `spicetify refresh -e` (Spotify 1.3.4, Spicetify 2.46.4) it stayed undefined. A further reload fixed it.

