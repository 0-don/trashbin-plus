import React, { useEffect, useRef } from "react";
import { AI_TRASH_THRESHOLD, classifyTrack, getCachedResult } from "../../lib/ai-classifier";
import { useTrashbinStore } from "../../store/trashbin-store";
import { createAiIndicatorHTML } from "./ai-probability-indicator";

export const AiDetectionWidget: React.FC = () => {
  const store = useTrashbinStore();
  const widgetRef = useRef<Spicetify.Playbar.Widget | null>(null);
  const enabled = store.aiDetectionEnabled && store.aiAssetsReady;

  useEffect(() => {
    if (!enabled) return;

    const widget = new Spicetify.Playbar.Widget(
      "AI Detection",
      createAiIndicatorHTML(0.5),
      () => {},
      false,
      false,
      true,
    );
    widgetRef.current = widget;

    const update = async () => {
      const track = Spicetify.Player.data?.item;
      if (!track?.uri || !track.uri.startsWith("spotify:track:")) {
        widget.icon = createAiIndicatorHTML(0.5);
        widget.label = "AI Detection";
        return;
      }

      const cached = getCachedResult(track.uri);
      if (cached !== undefined) {
        applyResult(widget, track.uri, cached);
        return;
      }

      widget.icon = createAiIndicatorHTML(0.5);
      widget.label = "Analyzing...";

      const result = await classifyTrack(track.uri);
      const current = Spicetify.Player.data?.item;
      if (current?.uri === track.uri && result !== null) {
        applyResult(widget, track.uri, result);
      }
    };

    const applyResult = (w: Spicetify.Playbar.Widget, uri: string, prob: number) => {
      const pct = Math.round(prob * 100);
      w.icon = createAiIndicatorHTML(prob);
      w.label = `${pct}% AI`;

      const state = useTrashbinStore.getState();
      if (
        state.trashAiSongs &&
        prob >= AI_TRASH_THRESHOLD &&
        !state.trashSongList[uri]
      ) {
        state.toggleSongTrash(uri);
      }
    };

    update();

    const handleSongChange = () => update();
    Spicetify.Player.addEventListener("songchange", handleSongChange);

    return () => {
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
      widget.deregister();
      widgetRef.current = null;
    };
  }, [enabled]);

  return null;
};
