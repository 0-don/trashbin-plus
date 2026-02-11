import React, { useEffect, useRef } from "react";
import { AI_TRASH_THRESHOLD, enqueue, getCachedResult, onResult } from "../../lib/ai-classifier";
import { useTrashbinStore } from "../../store/trashbin-store";
import { createAiIndicatorHTML } from "./ai-probability-indicator";

const widgetIcon = (prob: number) =>
  `<span style="margin-left:4px">${createAiIndicatorHTML(prob, 20)}</span>`;

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

    const applyResult = (uri: string, prob: number) => {
      const current = Spicetify.Player.data?.item;
      if (current?.uri !== uri) return;

      const pct = Math.round(prob * 100);
      widget.icon = widgetIcon(prob);
      widget.label = `${pct}% AI`;

      const state = useTrashbinStore.getState();
      if (
        state.trashAiSongs &&
        prob >= AI_TRASH_THRESHOLD &&
        !state.trashSongList[uri]
      ) {
        state.toggleSongTrash(uri, false);
      }
    };

    const update = () => {
      const track = Spicetify.Player.data?.item;
      if (!track?.uri || !track.uri.startsWith("spotify:track:")) {
        widget.icon = widgetIcon(0.5);
        widget.label = "AI Detection";
        return;
      }

      const cached = getCachedResult(track.uri);
      if (cached !== undefined) {
        applyResult(track.uri, cached);
        return;
      }

      widget.icon = widgetIcon(0.5);
      widget.label = "Analyzing...";
      enqueue(track.uri);
    };

    const unsub = onResult(applyResult);
    update();

    const handleSongChange = () => update();
    Spicetify.Player.addEventListener("songchange", handleSongChange);

    return () => {
      unsub();
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
      widget.deregister();
      widgetRef.current = null;
    };
  }, [enabled]);

  return null;
};
