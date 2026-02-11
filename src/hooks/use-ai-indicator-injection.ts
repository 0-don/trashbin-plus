import { useEffect } from "react";
import { createAiIndicatorHTML } from "../components/features/ai-probability-indicator";
import { TRACKLIST_CONFIG } from "../lib/constants";
import {
  classifyTracks,
  getCachedResult,
  isProcessing,
} from "../lib/ai-classifier";
import { extractTrackData } from "../lib/track-utils";
import { useTrashbinStore } from "../store/trashbin-store";
import { useMutationObserver } from "./use-mutation-observer";

const INDICATOR_CLASS = "trashbin-ai-indicator";

export const useAiIndicatorInjection = () => {
  const store = useTrashbinStore();
  const enabled =
    store.aiDetectionEnabled && store.aiAssetsReady && store.trashbinEnabled;

  const removeIndicators = () => {
    document
      .querySelectorAll(`.${INDICATOR_CLASS}`)
      .forEach((el) => el.remove());
  };

  const injectCachedIndicators = () => {
    if (!enabled) return;

    const container = document.querySelector(
      TRACKLIST_CONFIG.containerSelector,
    );
    if (!container) return;

    const rows = container.querySelectorAll(TRACKLIST_CONFIG.rowSelector);

    for (const row of rows) {
      if (row.querySelector(`.${INDICATOR_CLASS}`)) continue;

      const trackData = extractTrackData(row);
      if (!trackData.trackURI) continue;

      const cached = getCachedResult(trackData.trackURI);
      if (cached === undefined) continue;

      const indicator = document.createElement("span");
      indicator.innerHTML = createAiIndicatorHTML(cached);
      indicator.className = INDICATOR_CLASS;
      indicator.style.marginLeft = "auto";
      indicator.style.pointerEvents = "auto";

      const moreBtn = row.querySelector(
        TRACKLIST_CONFIG.moreButtonSelector,
      );
      if (moreBtn?.parentElement) {
        moreBtn.parentElement.insertBefore(indicator, moreBtn);
      }
    }
  };

  const injectIndicators = () => {
    if (!enabled) return;

    // First inject any cached results
    injectCachedIndicators();

    // Collect uncached track URIs for batch classification
    const container = document.querySelector(
      TRACKLIST_CONFIG.containerSelector,
    );
    if (!container) return;

    const rows = container.querySelectorAll(TRACKLIST_CONFIG.rowSelector);
    const uncachedUris: string[] = [];

    for (const row of rows) {
      const trackData = extractTrackData(row);
      if (!trackData.trackURI) continue;
      if (getCachedResult(trackData.trackURI) !== undefined) continue;
      if (isProcessing(trackData.trackURI)) continue;
      uncachedUris.push(trackData.trackURI);
    }

    if (uncachedUris.length === 0) return;

    // Batch classify — re-inject cached indicators as results arrive
    classifyTracks(uncachedUris, () => {
      injectCachedIndicators();
    });
  };

  useEffect(() => {
    if (!enabled) {
      removeIndicators();
    } else {
      injectIndicators();
    }
  }, [enabled]);

  const shouldTrigger = (mutations: MutationRecord[]): boolean =>
    mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return false;
        const element = node as Element;
        return (
          (element.closest?.(TRACKLIST_CONFIG.containerSelector) ||
            element.querySelector?.(TRACKLIST_CONFIG.containerSelector)) &&
          !element.classList?.contains(INDICATOR_CLASS)
        );
      }),
    );

  useMutationObserver(injectIndicators, shouldTrigger, { enabled });
};
