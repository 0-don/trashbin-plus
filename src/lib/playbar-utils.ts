import { logDebug } from "./debug-log";

// Spotify renamed its own marker in 1.3.8 (now-playing-widget-v2); the region inside the bar outlasted both names
export const NOW_PLAYING_TARGETS = [
  '[data-testid="now-playing-widget"]',
  '[data-testid="now-playing-widget-v2"]',
  '[data-testid="now-playing-bar"] [role="region"]',
];

export const trackedWidgets = new Map<string, Spicetify.Playbar.Widget>();

// Spicetify mounts Playbar widgets under a remapped class; on Spotify builds its class map misses, they never appear
export function keepWidgetMounted(
  name: string,
  widget: Spicetify.Playbar.Widget,
  isWanted: () => boolean,
): () => void {
  trackedWidgets.set(name, widget);
  let lastState = "";
  const report = (state: string) => {
    if (state === lastState) return;
    lastState = state;
    logDebug("widget", { name, state });
  };
  const mount = () => {
    if (!isWanted()) return report("not wanted");
    if (widget.element.isConnected) return report("mounted");
    const target = NOW_PLAYING_TARGETS.map((selector) =>
      document.querySelector(selector),
    ).find((element) => element !== null);
    if (!target) return report("no now playing widget in page");
    target.append(widget.element);
    report("mounted by fallback");
  };
  mount();
  const timer = setInterval(mount, 2000);
  return () => {
    clearInterval(timer);
    trackedWidgets.delete(name);
  };
}
