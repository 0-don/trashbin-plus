import React, { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { AiIndicator } from "../components/features/ai-probability-indicator";
import { TRASH_ICON } from "../components/icons";
import { AI_INDICATOR_CLASS, AI_SPINNER_CLASS } from "../lib/constants";
import { extractTrackData } from "../lib/track-utils";
import { useAiStore } from "../store/ai-store";
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
        const aiState = useAiStore.getState();
        const stored = aiState.results[trackData.trackURI];
        if (stored !== undefined) {
          if (stored >= 0) wrapper.appendChild(createIndicatorElement(stored));
        } else {
          wrapper.appendChild(createSpinnerElement());
          aiState.enqueue(trackData.trackURI);
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

    let prev = useAiStore.getState().results;
    return useAiStore.subscribe((state) => {
      const next = state.results;
      if (next === prev) return;

      const container = document.querySelector(config.containerSelector);
      if (container) {
        for (const uri in next) {
          if (prev[uri] !== undefined) continue;

          container
            .querySelectorAll(config.buttonSelector)
            .forEach((trashBtn) => {
              const wrapper = trashBtn.closest(`.${WRAPPER_CLASS}`);
              if (!wrapper || wrapper.querySelector(`.${AI_INDICATOR_CLASS}`))
                return;

              const row = wrapper.closest(config.rowSelector);
              if (!row) return;

              if (extractTrackData(row).trackURI === uri) {
                // Remove spinner if present
                const spinner = wrapper.querySelector(`.${AI_SPINNER_CLASS}`);
                if (spinner) spinner.remove();

                if (next[uri] >= 0) {
                  wrapper.insertBefore(
                    createIndicatorElement(next[uri]),
                    trashBtn,
                  );
                }
              }
            });
        }
      }
      prev = next;
    });
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

function createSpinnerElement(): HTMLSpanElement {
  const spinner = document.createElement("span");
  spinner.className = AI_SPINNER_CLASS;
  spinner.innerHTML = Spicetify.ReactDOMServer.renderToString(
    <span className="inline-flex animate-spin" style={{ color: "rgba(255,255,255,0.4)" }}>
      <CgSpinner size={14} />
    </span>,
  );
  return spinner;
}

function createIndicatorElement(probability: number): HTMLSpanElement {
  const indicator = document.createElement("span");
  indicator.innerHTML = Spicetify.ReactDOMServer.renderToString(
    <AiIndicator probability={probability} size={16} />,
  );
  indicator.className = AI_INDICATOR_CLASS;
  indicator.style.pointerEvents = "auto";
  return indicator;
}
