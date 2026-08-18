import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RADIO_ICON } from "../icons";
import { RadioCollectView } from "../views/radio-collect";

export function RadioCollectContextMenu() {
  const { t } = useTranslation();

  useEffect(() => {
    const shouldAdd = (uris: string[]): boolean =>
      uris.length === 1 && Spicetify.URI.isPlaylistV1OrV2(uris[0]);

    const onClick = async (uris: string[]) => {
      const contents = await Spicetify.Platform.PlaylistAPI.getContents(
        uris[0],
        { limit: 9999999 },
      );
      const seeds = (contents?.items ?? [])
        .map((item: { uri?: string }) => item.uri)
        .filter((uri?: string): uri is string =>
          !!uri?.startsWith("spotify:track:"),
        );

      if (seeds.length === 0) {
        Spicetify.showNotification(t("MESSAGE_PLAYLIST_EMPTY"));
        return;
      }

      Spicetify.PopupModal.display({
        title: t("ACTION_COLLECT_RADIOS"),
        content: (
          <RadioCollectView seedUris={seeds} sourceName={uris[0]} />
        ) as unknown as Element,
        isLarge: true,
      });
    };

    const contextMenuItem = new Spicetify.ContextMenu.Item(
      t("ACTION_COLLECT_RADIOS"),
      onClick,
      shouldAdd,
      RADIO_ICON(15),
    );

    contextMenuItem.register();
    return () => contextMenuItem.deregister();
  }, [t]);

  return null;
}
