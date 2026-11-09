import { version } from "../../package.json";
import { useAiStore } from "../store/ai-store";
import { useTrashbinStore } from "../store/trashbin-store";
import { getDebugLog, logDebug } from "./debug-log";
import { trackedWidgets } from "./playbar-utils";

// icons and cover art are noise in a bug report; the markup is what tells us which Spotify layout the user has
const stripMarkup = (html: string, limit: number) =>
  html
    .replace(/<svg[\s\S]*?<\/svg>/g, "<svg/>")
    .replace(/<img[^>]*>/g, "<img/>")
    .slice(0, limit);

const count = (selector: string) => document.querySelectorAll(selector).length;

function settings() {
  const state = useTrashbinStore.getState();
  return Object.fromEntries(
    Object.entries(state).filter(([, value]) => typeof value === "boolean"),
  );
}

function probePage() {
  const bar =
    document.querySelector('[data-testid="now-playing-bar"]') ??
    document.querySelector("footer");
  return {
    playbarWidgetApi: typeof Spicetify.Playbar?.Widget,
    uriApi: typeof Spicetify.URI?.fromString,
    reactDom: typeof Spicetify.ReactDOM,
    nowPlayingMappedClass: !!document.querySelector(".main-nowPlayingWidget-nowPlaying"),
    nowPlayingTestId: !!document.querySelector('[data-testid="now-playing-widget"]'),
    trackListRowClass: count(".main-trackList-trackListRow"),
    mainRoleRows: count('main [role="row"]'),
    tracklistButtons: count(".trashbin-tracklist-btn"),
    queueButtons: count(".trashbin-queue-btn"),
    aiIndicators: count(".trashbin-ai-indicator"),
    widgets: Object.fromEntries(
      [...trackedWidgets].map(([name, widget]) => [
        name,
        {
          connected: widget.element.isConnected,
          parent: widget.element.parentElement?.className.slice(0, 120) ?? null,
        },
      ]),
    ),
    nowPlayingBar: bar ? stripMarkup(bar.outerHTML, 6000) : null,
  };
}

export function buildDebugReport() {
  const trash = useTrashbinStore.getState();
  const ai = useAiStore.getState();
  return {
    generatedAt: new Date().toISOString(),
    versions: {
      trashbin: version,
      spotify: Spicetify.Platform?.version ?? null,
      spicetify: Spicetify.Config?.version ?? null,
    },
    theme: Spicetify.Config?.current_theme ?? null,
    colorScheme: Spicetify.Config?.color_scheme ?? null,
    extensions: Spicetify.Config?.extensions ?? [],
    userAgent: navigator.userAgent,
    language: navigator.language,
    settings: settings(),
    trashCounts: {
      songs: Object.keys(trash.trashSongList).length,
      artists: Object.keys(trash.trashArtistList).length,
    },
    ai: { ready: ai.ready, storedResults: Object.keys(ai.results).length },
    localStorageChars: Object.keys(localStorage).reduce(
      (total, key) => total + key.length + (localStorage.getItem(key)?.length ?? 0),
      0,
    ),
    page: probePage(),
    log: getDebugLog(),
  };
}

export async function saveDebugReport(): Promise<boolean> {
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  let report: unknown;
  try {
    report = buildDebugReport();
  } catch (e) {
    logDebug("report.build_failed", { error: String(e).slice(0, 300) });
    report = { generatedAt: new Date().toISOString(), partial: true, buildError: String(e).slice(0, 500), versions: { trashbin: version }, log: getDebugLog() };
  }
  try {
    const handle = await window.showSaveFilePicker?.({
      suggestedName: `trashbin-debug-${stamp}.json`,
      types: [{ accept: { "application/json": [".json"] } }],
    });
    if (!handle) return false;
    const writable = await handle.createWritable();
    await writable.write(JSON.stringify(report, null, 2));
    await writable.close();
    return true;
  } catch {
    return false;
  }
}
