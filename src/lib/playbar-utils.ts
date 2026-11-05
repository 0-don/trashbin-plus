const NOW_PLAYING_WIDGET = '[data-testid="now-playing-widget"]';

// Spicetify mounts Playbar widgets under a remapped class; on Spotify builds its class map misses, they never appear
export function keepWidgetMounted(
  widget: Spicetify.Playbar.Widget,
  isWanted: () => boolean,
): () => void {
  const mount = () => {
    if (widget.element.isConnected || !isWanted()) return;
    document.querySelector(NOW_PLAYING_WIDGET)?.append(widget.element);
  };
  mount();
  const timer = setInterval(mount, 2000);
  return () => clearInterval(timer);
}
