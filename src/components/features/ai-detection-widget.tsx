import React, { useEffect, useRef } from "react";
import { CgSpinner } from "react-icons/cg";
import { useAiStore } from "../../store/ai-store";
import { useTrashbinStore } from "../../store/trashbin-store";
import { i18n } from "../providers/providers";
import { AiIndicator } from "./ai-probability-indicator";

const widgetIcon = (prob: number) =>
  Spicetify.ReactDOMServer.renderToString(
    <span className="ml-2">
      <AiIndicator probability={prob} size={20} />
    </span>,
  );

const widgetSpinner = () =>
  Spicetify.ReactDOMServer.renderToString(
    <span
      className="ml-2 inline-flex animate-spin"
      style={{ color: "rgba(255,255,255,0.6)" }}
    >
      <CgSpinner size={20} />
    </span>,
  );

export const AiDetectionWidget: React.FC = () => {
  const aiDetectionEnabled = useTrashbinStore((s) => s.aiDetectionEnabled);
  const aiReady = useAiStore((s) => s.ready);
  const widgetRef = useRef<Spicetify.Playbar.Widget | null>(null);
  const enabled = aiDetectionEnabled && aiReady;

  useEffect(() => {
    if (!enabled) return;

    const widget = new Spicetify.Playbar.Widget(
      i18n.t("AI_WIDGET_LABEL"),
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
        widget.label = i18n.t("AI_WIDGET_LABEL");
        return;
      }

      const prob = useAiStore.getState().results[track.uri];
      if (prob !== undefined) {
        if (prob >= 0) {
          widget.icon = widgetIcon(prob);
          widget.label = i18n.t("AI_WIDGET_PERCENT", {
            pct: Math.round(prob * 100),
          });
        } else {
          widget.icon = widgetIcon(0.5);
          widget.label = i18n.t("AI_WIDGET_LABEL");
        }
      } else {
        widget.icon = widgetSpinner();
        widget.label = i18n.t("AI_WIDGET_ANALYZING");
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
