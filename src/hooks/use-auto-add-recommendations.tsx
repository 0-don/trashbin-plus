import React, { useEffect, useRef } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { PAUSE_ICON, PLAY_ICON } from "../components/icons";
import { AUTO_ADD_CONFIG } from "../lib/constants";
import { useTrashbinStore } from "../store/trashbin-store";

const DELAY_BETWEEN_ADDS = 800;
const DELAY_AFTER_REFRESH = 3000;
const DELAY_BETWEEN_CYCLES = 1500;
const INJECT_CHECK_INTERVAL = 2000;

const WRAPPER_CLASS = `${AUTO_ADD_CONFIG.autoAddButtonClassName}-wrapper`;
const BTN_DATA_ATTR = "data-auto-add-btn";

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

function renderAutoAddButton(opts: {
  isRunning: boolean;
  buttonClassName: string;
  encoreId: string;
  title: string;
}): string {
  return Spicetify.ReactDOMServer.renderToString(
    <button
      data-auto-add-btn="true"
      data-encore-id={opts.encoreId}
      className={`${opts.buttonClassName} ${AUTO_ADD_CONFIG.autoAddButtonClassName}`}
      title={opts.title}
    >
      {opts.isRunning ? (
        <BsFillPauseFill size={26} />
      ) : (
        <BsFillPlayFill size={26} />
      )}
    </button>,
  );
}

export const useAutoAddRecommendations = () => {
  const store = useTrashbinStore();
  const { t } = useTranslation();
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
        if ((trashBtn as HTMLElement).dataset.visuallyTrashed !== "true") {
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
    const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
    if (wrapper) {
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

    if (buttonRef.current?.isConnected) return;

    const refreshBtn = findRefreshButton();
    if (!refreshBtn) return;

    const temp = document.createElement("div");
    temp.innerHTML = renderAutoAddButton({
      isRunning: isRunningRef.current,
      buttonClassName: refreshBtn.className,
      encoreId: refreshBtn.getAttribute("data-encore-id") || "buttonTertiary",
      title: t("TOOLTIP_AUTO_ADD"),
    });
    const btn = temp.querySelector(`[${BTN_DATA_ATTR}]`) as HTMLButtonElement;

    btn.onclick = (e) => {
      e.stopPropagation();
      if (isRunningRef.current) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    buttonRef.current = btn;

    const wrapper = document.createElement("div");
    wrapper.className = `${WRAPPER_CLASS} flex w-full items-center justify-between`;
    refreshBtn.parentElement?.insertBefore(wrapper, refreshBtn);
    wrapper.appendChild(btn);
    wrapper.appendChild(refreshBtn);
  };

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

  useEffect(() => {
    return () => {
      abortRef.current = true;
      isRunningRef.current = false;
      cleanupButton();
    };
  }, []);
};
