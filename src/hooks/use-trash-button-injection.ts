import { useEffect } from "react";
import { createAiIndicatorHTML } from "../components/features/ai-probability-indicator";
import { TRASH_ICON } from "../components/icons";
import {
  autoTrashIfNeeded,
  enqueue,
  getStoredResult,
  onResult,
} from "../lib/ai-classifier";
import { AI_INDICATOR_CLASS } from "../lib/constants";
import { extractTrackData } from "../lib/track-utils";
import { useTrashbinStore } from "../store/trashbin-store";
import { useMutationObserver } from "./use-mutation-observer";

const WRAPPER_CLASS = "trashbin-injected-group";

interface TrashButtonConfig {
  containerSelector: string;
  buttonSelector: string;
  rowSelector: string;
  moreButtonSelector: string;
  buttonClassName: string;
}

export const useTrashButtonInjection = (
  config: TrashButtonConfig,
  enabled: boolean = true,
) => {
  const store = useTrashbinStore();
  const aiEnabled = store.aiDetectionEnabled && store.aiAssetsReady;

  const removeInjected = () => {
    const container = document.querySelector(config.containerSelector);
    if (!container) return;
    container
      .querySelectorAll(`.${WRAPPER_CLASS}`)
      .forEach((el) => el.remove());
  };

  const inject = () => {
    removeInjected();

    if (!enabled || !store.trashbinEnabled) return;

    const container = document.querySelector(config.containerSelector);
    if (!container) return;

    container.querySelectorAll(config.moreButtonSelector).forEach((moreBtn) => {
      const row = moreBtn.closest(config.rowSelector);
      if (!row) return;

      const trackData = extractTrackData(moreBtn.parentElement || row);
      if (!trackData.trackURI || row.querySelector(config.buttonSelector))
        return;

      const wrapper = document.createElement("div");
      wrapper.className = WRAPPER_CLASS;
      wrapper.style.display = "inline-flex";
      wrapper.style.alignItems = "center";
      wrapper.style.gap = "0";
      wrapper.style.margin = "0";

      if (aiEnabled) {
        const stored = getStoredResult(trackData.trackURI);
        if (stored !== undefined) {
          const indicator = createIndicatorElement(stored);
          wrapper.appendChild(indicator);
        } else {
          enqueue(trackData.trackURI);
        }
      }

      const isTrashed = !!store.trashSongList[trackData.trackURI];
      const btn = document.createElement("button");
      btn.className = `${config.buttonClassName} bg-transparent border-none p-2 opacity-70 cursor-pointer hover:opacity-100 transition-opacity m-0!`;
      btn.innerHTML = TRASH_ICON(16, isTrashed ? "fill-[#22c55e]" : "");
      btn.dataset.visuallyTrashed = isTrashed.toString();

      btn.onclick = (e) => {
        e.stopPropagation();
        const newState = btn.dataset.visuallyTrashed !== "true";
        btn.innerHTML = TRASH_ICON(16, newState ? "fill-[#22c55e]" : "");
        btn.dataset.visuallyTrashed = newState.toString();
        store.toggleSongTrash(trackData.trackURI!);
      };

      wrapper.appendChild(btn);
      moreBtn.parentElement?.insertBefore(wrapper, moreBtn);
    });
  };

  useEffect(() => {
    if (!aiEnabled) return;

    const unsub = onResult((uri, prob) => {
      updateIndicatorsForUri(config, uri, prob);
      autoTrashIfNeeded(uri, prob);
    });

    return unsub;
  }, [aiEnabled]);

  useEffect(() => {
    if (!enabled || !store.trashbinEnabled) {
      removeInjected();
    } else {
      inject();
    }
  }, [enabled, store.trashbinEnabled, aiEnabled]);

  const shouldTrigger = (mutations: MutationRecord[]): boolean =>
    mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return false;
        const element = node as Element;
        if (element.classList?.contains(WRAPPER_CLASS)) return false;
        return (
          element.closest?.(config.containerSelector) ||
          element.querySelector?.(config.containerSelector)
        );
      }),
    );

  useMutationObserver(inject, shouldTrigger, {
    enabled: store.trashbinEnabled && enabled,
  });
};

function createIndicatorElement(probability: number): HTMLSpanElement {
  const indicator = document.createElement("span");
  indicator.innerHTML = createAiIndicatorHTML(probability, 16);
  indicator.className = AI_INDICATOR_CLASS;
  indicator.style.pointerEvents = "auto";
  return indicator;
}

function updateIndicatorsForUri(
  config: TrashButtonConfig,
  uri: string,
  probability: number,
): void {
  const container = document.querySelector(config.containerSelector);
  if (!container) return;

  container.querySelectorAll(config.buttonSelector).forEach((trashBtn) => {
    const wrapper = trashBtn.closest(`.${WRAPPER_CLASS}`);
    if (!wrapper || wrapper.querySelector(`.${AI_INDICATOR_CLASS}`)) return;

    const row = wrapper.closest(config.rowSelector);
    if (!row) return;

    const trackData = extractTrackData(row);
    if (trackData.trackURI === uri) {
      const indicator = createIndicatorElement(probability);
      wrapper.insertBefore(indicator, trashBtn);
    }
  });
}
