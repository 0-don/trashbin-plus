import React, { useEffect, useRef } from "react";
import { useAiStore } from "../../store/ai-store";
import { useTrashbinStore } from "../../store/trashbin-store";
import { AiIndicator } from "./ai-probability-indicator";

const widgetIcon = (prob: number) =>
  Spicetify.ReactDOMServer.renderToString(
    <span style={{ marginLeft: 5 }}>
      <AiIndicator probability={prob} size={20} />
    </span>,
  );

export const AiDetectionWidget: React.FC = () => {
  const store = useTrashbinStore();
  const widgetRef = useRef<Spicetify.Playbar.Widget | null>(null);
  const enabled = store.aiDetectionEnabled && store.aiAssetsReady;

  useEffect(() => {
    if (!enabled) return;

    const widget = new Spicetify.Playbar.Widget(
      "AI Detection",
      widgetIcon(0.5),
      () => {},
      false,
      false,
      true,
    );
    widgetRef.current = widget;

    const updateWidget = () => {
      const track = Spicetify.Player.data?.item;
      if (!track?.uri || !track.uri.startsWith("spotify:track:")) {
        widget.icon = widgetIcon(0.5);
        widget.label = "AI Detection";
        return;
      }

      const prob = useAiStore.getState().results[track.uri];
      if (prob !== undefined) {
        widget.icon = widgetIcon(prob);
        widget.label = `${Math.round(prob * 100)}% AI`;
      } else {
        widget.icon = widgetIcon(0.5);
        widget.label = "Analyzing...";
        useAiStore.getState().enqueue(track.uri);
      }
    };

    const unsub = useAiStore.subscribe(updateWidget);
    updateWidget();

    Spicetify.Player.addEventListener("songchange", updateWidget);

    return () => {
      unsub();
      Spicetify.Player.removeEventListener("songchange", updateWidget);
      widget.deregister();
      widgetRef.current = null;
    };
  }, [enabled]);

  return null;
};
