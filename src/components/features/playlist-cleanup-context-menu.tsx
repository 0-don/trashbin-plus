import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { removeTrashedFromPlaylist } from "../../lib/playlist-utils";
import { useTrashbinStore } from "../../store/trashbin-store";
import { TRASH_ICON } from "../icons";

export function PlaylistCleanupContextMenu() {
  const { t } = useTranslation();
  const trashbinEnabled = useTrashbinStore((s) => s.trashbinEnabled);

  useEffect(() => {
    const shouldAdd = (uris: string[]): boolean => {
      if (!useTrashbinStore.getState().trashbinEnabled) return false;
      if (uris.length !== 1) return false;
      return Spicetify.URI.isPlaylistV1OrV2(uris[0]);
    };

    const onClick = (uris: string[]) => {
      removeTrashedFromPlaylist(uris[0], t);
    };

    const contextMenuItem = new Spicetify.ContextMenu.Item(
      t("ACTION_REMOVE_TRASHED"),
      onClick,
      shouldAdd,
      TRASH_ICON(15),
    );

    contextMenuItem.register();

    return () => contextMenuItem.deregister();
  }, [trashbinEnabled, t]);

  return null;
}
