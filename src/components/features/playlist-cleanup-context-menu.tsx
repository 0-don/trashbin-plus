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

    // Reposition the menu item to appear near "Delete" instead of at the top
    let repositioning = false;
    const observer = new MutationObserver(() => {
      if (repositioning) return;

      const menu = document.querySelector<HTMLElement>(
        "[data-tippy-root] ul, #context-menu ul",
      );
      if (!menu) return;

      const items = Array.from(menu.querySelectorAll<HTMLElement>(":scope > li"));
      const label = t("ACTION_REMOVE_TRASHED");
      const trashItem = items.find(
        (li) => li.textContent?.trim() === label,
      );
      const deleteItem = items.find(
        (li) => li.querySelector("button")?.textContent?.trim() === "Delete",
      );

      if (trashItem && deleteItem && deleteItem.nextElementSibling !== trashItem) {
        repositioning = true;
        deleteItem.after(trashItem);
        repositioning = false;
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      contextMenuItem.deregister();
      observer.disconnect();
    };
  }, [trashbinEnabled, t]);

  return null;
}
