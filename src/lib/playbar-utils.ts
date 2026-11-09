import { logDebug } from "./debug-log";

const NOW_PLAYING_WIDGET = '[data-testid="now-playing-widget"]';

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
    const target = document.querySelector(NOW_PLAYING_WIDGET);
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
