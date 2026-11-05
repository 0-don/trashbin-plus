import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTrashbinStore } from "../../store/trashbin-store";
import { keepWidgetMounted } from "../../lib/playbar-utils";
import { TRASH_ICON } from "../icons";

export const TrashbinWidget = React.memo(() => {
  const { t } = useTranslation();
  const store = useTrashbinStore();
  const widgetRef = useRef<Spicetify.Playbar.Widget | null>(null);

  useEffect(() => {
    const updateWidgetState = (widget: Spicetify.Playbar.Widget) => {
      const currentTrack = Spicetify.Player.data?.item;
      if (!currentTrack) return;

      const isTrack =
        Spicetify.URI.fromString(currentTrack.uri).type ===
        Spicetify.URI.Type.TRACK;
      const isTrashed =
        !!useTrashbinStore.getState().trashSongList[currentTrack.uri];

      if (isTrack) {
        widget.active = isTrashed;
        widget.label = isTrashed ? t("ACTION_UNTHROW") : t("ACTION_THROW");
        widget.icon = TRASH_ICON(20, isTrashed ? "fill-[#22c55e]" : "");
      } else {
        widget.deregister();
      }
    };

    const widget = new Spicetify.Playbar.Widget(
      t("ACTION_THROW"),
      TRASH_ICON(20),
      () => {
        const currentTrack = Spicetify.Player.data?.item;
        if (currentTrack) store.toggleSongTrash(currentTrack.uri);
      },
      false,
      false,
      store.widgetEnabled && store.trashbinEnabled,
    );

    widgetRef.current = widget;
    updateWidgetState(widget);

    const stopMounting = keepWidgetMounted(widget, () => {
      const state = useTrashbinStore.getState();
      const uri = Spicetify.Player.data?.item?.uri;
      return (
        state.widgetEnabled &&
        state.trashbinEnabled &&
        !!uri &&
        Spicetify.URI.fromString(uri).type === Spicetify.URI.Type.TRACK
      );
    });

    const handleSongChange = () => updateWidgetState(widget);
    Spicetify.Player.addEventListener("songchange", handleSongChange);

    const unsubscribe = useTrashbinStore.subscribe(() =>
      updateWidgetState(widget),
    );

    return () => {
      stopMounting();
      unsubscribe();
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
      widget.deregister();
    };
  }, [store.trashbinEnabled, store.widgetEnabled]);

  return null;
});
