import { useEffect } from "react";
import { TRASH_ICON } from "../components/icons";
import { createAiIndicatorHTML } from "../components/features/ai-probability-indicator";
import {
  AI_TRASH_THRESHOLD,
  classifyTracks,
  getCachedResult,
  isProcessing,
} from "../lib/ai-classifier";
import { extractTrackData } from "../lib/track-utils";
import { useTrashbinStore } from "../store/trashbin-store";
import { useMutationObserver } from "./use-mutation-observer";

const AI_INDICATOR_CLASS = "trashbin-ai-indicator";

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
    document
      .querySelectorAll(config.buttonSelector)
      .forEach((btn) => btn.remove());
    document
      .querySelectorAll(`.${AI_INDICATOR_CLASS}`)
      .forEach((el) => el.remove());
  };

  const inject = () => {
    removeInjected();

    if (!enabled || !store.trashbinEnabled) return;

    const container = document.querySelector(config.containerSelector);
    if (!container) return;

    const uncachedUris: string[] = [];

    container.querySelectorAll(config.moreButtonSelector).forEach((moreBtn) => {
      const row = moreBtn.closest(config.rowSelector);
      if (!row) return;

      const trackData = extractTrackData(moreBtn.parentElement || row);
      if (!trackData.trackURI || row.querySelector(config.buttonSelector))
        return;

      // Trash button
      const isTrashed = !!store.trashSongList[trackData.trackURI];
      const btn = document.createElement("button");
      btn.className = `${config.buttonClassName} bg-transparent border-none p-2 opacity-70 cursor-pointer hover:opacity-100 transition-opacity`;
      btn.innerHTML = TRASH_ICON(16, isTrashed ? "fill-[#22c55e]" : "");
      btn.dataset.visuallyTrashed = isTrashed.toString();

      btn.onclick = (e) => {
        e.stopPropagation();
        const newState = btn.dataset.visuallyTrashed !== "true";
        btn.innerHTML = TRASH_ICON(16, newState ? "fill-[#22c55e]" : "");
        btn.dataset.visuallyTrashed = newState.toString();
        store.toggleSongTrash(trackData.trackURI!);
      };

      moreBtn.parentElement?.insertBefore(btn, moreBtn);

      // AI indicator (next to trash button)
      if (aiEnabled) {
        const cached = getCachedResult(trackData.trackURI);
        if (cached !== undefined) {
          injectAiIndicator(btn, cached);
        } else if (!isProcessing(trackData.trackURI)) {
          uncachedUris.push(trackData.trackURI);
        }
      }
    });

    // Batch classify uncached tracks, inject indicators as results arrive
    if (aiEnabled && uncachedUris.length > 0) {
      classifyTracks(uncachedUris, (uri, prob) => {
        injectAiIndicatorsForCached(config);
        const state = useTrashbinStore.getState();
        if (
          state.trashAiSongs &&
          prob >= AI_TRASH_THRESHOLD &&
          !state.trashSongList[uri]
        ) {
          state.toggleSongTrash(uri);
        }
      });
    }
  };

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
        return (
          (element.closest?.(config.containerSelector) ||
            element.querySelector?.(config.containerSelector)) &&
          !element.classList?.contains(config.buttonClassName.split(" ")[0])
        );
      }),
    );

  useMutationObserver(inject, shouldTrigger, {
    enabled: store.trashbinEnabled && enabled,
  });
};

function injectAiIndicator(trashBtn: Element, probability: number): void {
  if (trashBtn.previousElementSibling?.classList.contains(AI_INDICATOR_CLASS))
    return;

  const indicator = document.createElement("span");
  indicator.innerHTML = createAiIndicatorHTML(probability);
  indicator.className = AI_INDICATOR_CLASS;
  indicator.style.pointerEvents = "auto";
  trashBtn.parentElement?.insertBefore(indicator, trashBtn);
}

function injectAiIndicatorsForCached(config: TrashButtonConfig): void {
  const container = document.querySelector(config.containerSelector);
  if (!container) return;

  container.querySelectorAll(config.buttonSelector).forEach((trashBtn) => {
    if (trashBtn.previousElementSibling?.classList.contains(AI_INDICATOR_CLASS))
      return;

    const row = trashBtn.closest(config.rowSelector);
    if (!row) return;

    const trackData = extractTrackData(row);
    if (!trackData.trackURI) return;

    const cached = getCachedResult(trackData.trackURI);
    if (cached !== undefined) {
      injectAiIndicator(trashBtn, cached);
    }
  });
}
