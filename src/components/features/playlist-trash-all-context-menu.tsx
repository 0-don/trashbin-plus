import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  getPlaylistTrashCounts,
  toggleTrashForPlaylist,
} from "../../lib/playlist-utils";
import { useTrashbinStore } from "../../store/trashbin-store";
import { RESTORE_ICON, TRASH_ICON } from "../icons";

export function PlaylistTrashAllContextMenu() {
  const { t } = useTranslation();
  const trashbinEnabled = useTrashbinStore((s) => s.trashbinEnabled);
  const itemRef = useRef<{ name: string; icon: string } | null>(null);

  useEffect(() => {
    // Spicetify reads `name` synchronously while rendering, so the all-trashed
    // check has to be resolved before the menu opens, not awaited inside shouldAdd.
    const restoreCache = new Map<string, boolean>();

    const applyLabel = (isRestore: boolean) => {
      if (!itemRef.current) return;
      itemRef.current.name = isRestore
        ? t("ACTION_RESTORE_ALL")
        : t("ACTION_TRASH_ALL");
      itemRef.current.icon = isRestore ? RESTORE_ICON(15) : TRASH_ICON(15);
    };

    const shouldAdd = (uris: string[]): boolean => {
      if (!useTrashbinStore.getState().trashbinEnabled) return false;
      if (uris.length !== 1) return false;
      if (!Spicetify.URI.isPlaylistV1OrV2(uris[0])) return false;

      applyLabel(restoreCache.get(uris[0]) ?? false);
      return true;
    };

    const onClick = (uris: string[]) => {
      restoreCache.delete(uris[0]);
      toggleTrashForPlaylist(uris[0], t);
    };

    const contextMenuItem = new Spicetify.ContextMenu.Item(
      t("ACTION_TRASH_ALL"),
      onClick,
      shouldAdd,
      TRASH_ICON(15),
    );

    itemRef.current = contextMenuItem;
    contextMenuItem.register();

    const warmCache = (uri: string) => {
      getPlaylistTrashCounts(uri)
        .then((counts) => {
          const isRestore = counts.total > 0 && counts.untrashed === 0;
          restoreCache.set(uri, isRestore);
          applyLabel(isRestore);
        })
        .catch(() => {});
    };

    const onContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href*="/playlist/"]');
      const id = link?.href.match(/\/playlist\/([a-zA-Z0-9]+)/)?.[1];
      if (id) warmCache(`spotify:playlist:${id}`);
    };

    document.addEventListener("contextmenu", onContextMenu, true);

    return () => {
      contextMenuItem.deregister();
      document.removeEventListener("contextmenu", onContextMenu, true);
    };
  }, [trashbinEnabled, t]);

  return null;
}
