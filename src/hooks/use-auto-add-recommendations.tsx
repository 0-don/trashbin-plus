import { useEffect, useRef } from "react";
import { PAUSE_ICON, PLAY_ICON } from "../components/icons";
import { AUTO_ADD_CONFIG } from "../lib/constants";
import { useTrashbinStore } from "../store/trashbin-store";

const DELAY_BETWEEN_ADDS = 800;
const DELAY_AFTER_REFRESH = 3000;
const DELAY_BETWEEN_CYCLES = 1500;
const INJECT_CHECK_INTERVAL = 2000;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function findRefreshButton(): HTMLButtonElement | null {
  const grid = document.querySelector(AUTO_ADD_CONFIG.gridSelector);
  if (!grid) return null;

  let container = grid.parentElement;
  while (container && container.tagName !== "MAIN") {
    const buttons = container.querySelectorAll("button");
    for (const btn of buttons) {
      if (btn.textContent?.trim() === "Refresh") {
        return btn as HTMLButtonElement;
      }
    }
    container = container.parentElement;
  }
  return null;
}

export const useAutoAddRecommendations = () => {
  const store = useTrashbinStore();
  const isRunningRef = useRef(false);
  const abortRef = useRef(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const updateButtonIcon = () => {
    if (buttonRef.current) {
      buttonRef.current.innerHTML = isRunningRef.current
        ? PAUSE_ICON()
        : PLAY_ICON();
    }
  };

  const runLoop = async () => {
    while (isRunningRef.current && !abortRef.current) {
      const grid = document.querySelector(AUTO_ADD_CONFIG.gridSelector);
      if (!grid) {
        isRunningRef.current = false;
        updateButtonIcon();
        return;
      }

      const rows = grid.querySelectorAll(AUTO_ADD_CONFIG.rowSelector);
      if (rows.length === 0) {
        await wait(DELAY_BETWEEN_CYCLES);
        continue;
      }

      const nonTrashedRows: Element[] = [];
      let allHaveTrashButtons = true;

      for (const row of rows) {
        const trashBtn = row.querySelector(AUTO_ADD_CONFIG.trashButtonSelector);
        if (!trashBtn) {
          allHaveTrashButtons = false;
          continue;
        }
        const isTrashed =
          (trashBtn as HTMLElement).dataset.visuallyTrashed === "true";
        if (!isTrashed) {
          nonTrashedRows.push(row);
        }
      }

      if (!allHaveTrashButtons && nonTrashedRows.length === 0) {
        await wait(DELAY_BETWEEN_CYCLES);
        continue;
      }

      if (nonTrashedRows.length > 0) {
        for (const row of nonTrashedRows) {
          if (!isRunningRef.current || abortRef.current) return;

          const addBtn = row.querySelector(
            AUTO_ADD_CONFIG.addButtonSelector,
          ) as HTMLButtonElement | null;
          if (addBtn) {
            addBtn.click();
            await wait(DELAY_BETWEEN_ADDS);
          }
        }
        await wait(DELAY_BETWEEN_CYCLES);
      } else {
        const refreshBtn = findRefreshButton();
        if (refreshBtn) {
          refreshBtn.click();
          await wait(DELAY_AFTER_REFRESH);
        } else {
          isRunningRef.current = false;
          updateButtonIcon();
          return;
        }
      }
    }
  };

  const startLoop = () => {
    isRunningRef.current = true;
    abortRef.current = false;
    updateButtonIcon();
    runLoop();
  };

  const stopLoop = () => {
    isRunningRef.current = false;
    updateButtonIcon();
  };

  const cleanupButton = () => {
    const wrapper = document.querySelector(
      `.${AUTO_ADD_CONFIG.autoAddButtonClassName}-wrapper`,
    );
    if (wrapper) {
      // Move Refresh button back to wrapper's parent before removing wrapper
      const refreshBtn = wrapper.querySelector(
        `button:not(.${AUTO_ADD_CONFIG.autoAddButtonClassName})`,
      );
      if (refreshBtn) {
        wrapper.parentElement?.insertBefore(refreshBtn, wrapper);
      }
      wrapper.remove();
    }
    buttonRef.current = null;
  };

  const injectAutoAddButton = () => {
    if (!store.trashbinEnabled) {
      cleanupButton();
      return;
    }

    // If button is still in the DOM, nothing to do
    if (buttonRef.current?.isConnected) return;

    const refreshBtn = findRefreshButton();
    if (!refreshBtn) return;

    const btn = document.createElement("button");
    btn.className = `${refreshBtn.className} ${AUTO_ADD_CONFIG.autoAddButtonClassName}`;
    btn.title = "Auto-add recommendations";
    btn.innerHTML = isRunningRef.current ? PAUSE_ICON() : PLAY_ICON();
    btn.setAttribute(
      "data-encore-id",
      refreshBtn.getAttribute("data-encore-id") || "buttonTertiary",
    );

    btn.onclick = (e) => {
      e.stopPropagation();
      if (isRunningRef.current) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    buttonRef.current = btn;
    // Wrap Refresh + our button in a flex row so they sit side by side
    const wrapper = document.createElement("div");
    wrapper.className = `${AUTO_ADD_CONFIG.autoAddButtonClassName}-wrapper flex items-center justify-between w-full`;
    refreshBtn.parentElement?.insertBefore(wrapper, refreshBtn);
    wrapper.appendChild(btn);
    wrapper.appendChild(refreshBtn);
  };

  // Poll to inject button when recommendation section appears
  useEffect(() => {
    if (!store.trashbinEnabled) {
      abortRef.current = true;
      isRunningRef.current = false;
      cleanupButton();
      return;
    }

    injectAutoAddButton();
    const interval = setInterval(injectAutoAddButton, INJECT_CHECK_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [store.trashbinEnabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      abortRef.current = true;
      isRunningRef.current = false;
      cleanupButton();
    };
  }, []);
};
