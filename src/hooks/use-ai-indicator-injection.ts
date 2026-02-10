import { useEffect } from "react";
import { createAiIndicatorHTML } from "../components/features/ai-probability-indicator";
import { TRACKLIST_CONFIG } from "../lib/constants";
import {
  classifyTrack,
  getCachedResult,
  isProcessing,
} from "../lib/ai-track-handler";
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

  const injectIndicators = async () => {
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

      if (cached !== undefined) {
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
      } else if (!isProcessing(trackData.trackURI)) {
        // Trigger async classification
        classifyTrack(trackData.trackURI).then((result) => {
          if (result !== null) {
            injectIndicators();
          }
        });
      }
    }
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
