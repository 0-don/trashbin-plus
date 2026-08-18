import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Spicetify prepends each registered item independently, so our three playlist
// entries end up scattered. Keep them contiguous and anchored under "Delete".
export function ContextMenuGrouper() {
  const { t } = useTranslation();

  useEffect(() => {
    const labels = [
      t("ACTION_REMOVE_TRASHED"),
      t("ACTION_TRASH_ALL"),
      t("ACTION_RESTORE_ALL"),
      t("ACTION_COLLECT_RADIOS"),
    ];

    let reordering = false;
    const observer = new MutationObserver(() => {
      if (reordering) return;

      const menu = document.querySelector<HTMLElement>(
        "[data-tippy-root] ul, #context-menu ul",
      );
      if (!menu) return;

      const items = Array.from(
        menu.querySelectorAll<HTMLElement>(":scope > li"),
      );
      const ours = labels
        .map((label) =>
          items.find(
            (li) => li.querySelector("button")?.textContent?.trim() === label,
          ),
        )
        .filter((li): li is HTMLElement => !!li);

      if (ours.length === 0) return;

      const anchor = items.find(
        (li) => li.querySelector("button")?.textContent?.trim() === "Delete",
      );
      if (!anchor || ours.includes(anchor)) return;

      const alreadyGrouped = ours.every(
        (li, i) =>
          (i === 0 ? anchor : ours[i - 1]).nextElementSibling === li,
      );
      if (alreadyGrouped) return;

      reordering = true;
      let prev: HTMLElement = anchor;
      for (const li of ours) {
        prev.after(li);
        prev = li;
      }
      reordering = false;
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [t]);

  return null;
}
