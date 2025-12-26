import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTrashOperations } from "../../hooks/use-trash-operations";
import { TRASH_ICON } from "../icons";

export function TrashbinContextMenu() {
  const { t } = useTranslation();
  const trashOperations = useTrashOperations();
  const contextMenuItemRef = useRef<{ name: string } | null>(null);

  const shouldAddContextMenuWithUpdate = (uris: string[]): boolean => {
    const shouldAdd = trashOperations.shouldAddContextMenu(uris);

    if (shouldAdd && contextMenuItemRef.current) {
      contextMenuItemRef.current.name = trashOperations.getContextMenuLabel(
        uris[0],
      );
    }

    return shouldAdd;
  };

  useEffect(() => {
    const contextMenuItem = new Spicetify.ContextMenu.Item(
      t("ACTION_THROW"),
      trashOperations.handleTrashToggle,
      shouldAddContextMenuWithUpdate,
      TRASH_ICON(15),
    );

    contextMenuItemRef.current = contextMenuItem;
    contextMenuItem.register();

    return () => contextMenuItem.deregister();
  }, [trashOperations.handleTrashToggle, shouldAddContextMenuWithUpdate]);

  return null;
}
