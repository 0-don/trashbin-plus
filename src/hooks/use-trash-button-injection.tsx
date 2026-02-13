import React, { useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { AiIndicator } from "../components/features/ai-probability-indicator";
import { TRASH_ICON } from "../components/icons";
import { AI_INDICATOR_CLASS, AI_SPINNER_CLASS } from "../lib/constants";
import { extractTrackData } from "../lib/track-utils";
import { useAiStore } from "../store/ai-store";
import { useTrashbinStore } from "../store/trashbin-store";
import { useMutationObserver } from "./use-mutation-observer";

const WRAPPER_CLASS = "trashbin-injected-group";
const TRASH_BTN_DATA_ATTR = "data-trashbin-btn";

interface TrashButtonConfig {
  containerSelector: string;
  buttonSelector: string;
  rowSelector: string;
  moreButtonSelector: string;
  buttonClassName: string;
}

function renderWrapper(opts: {
  aiEnabled: boolean;
  aiProbability: number | undefined;
  enqueued: boolean;
  isTrashed: boolean;
  buttonClassName: string;
}): string {
  return Spicetify.ReactDOMServer.renderToString(
    <div className={`${WRAPPER_CLASS} m-0 inline-flex items-center gap-0`}>
      {opts.aiEnabled &&
        opts.aiProbability !== undefined &&
        opts.aiProbability >= 0 && (
          <span className={`${AI_INDICATOR_CLASS} pointer-events-auto`}>
            <AiIndicator probability={opts.aiProbability} size={16} />
          </span>
        )}
      {opts.aiEnabled && opts.enqueued && (
        <span
          className={`${AI_SPINNER_CLASS} inline-flex animate-spin`}
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <CgSpinner size={14} />
        </span>
      )}
      <button
        data-trashbin-btn="true"
        data-visually-trashed={opts.isTrashed.toString()}
        className={`${opts.buttonClassName} m-0! cursor-pointer border-none bg-transparent p-2 opacity-70 transition-opacity hover:opacity-100`}
      >
        <BsTrash3
          size={16}
          className={opts.isTrashed ? "fill-[#22c55e]" : ""}
        />
      </button>
    </div>,
  );
}

export const useTrashButtonInjection = (
  config: TrashButtonConfig,
  enabled: boolean = true,
) => {
  const store = useTrashbinStore();
  const aiReady = useAiStore((s) => s.ready);
  const aiEnabled = store.aiDetectionEnabled && aiReady;

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

      let aiProbability: number | undefined;
      let enqueued = false;

      if (aiEnabled) {
        const aiState = useAiStore.getState();
        const stored = aiState.results[trackData.trackURI];
        if (stored !== undefined) {
          aiProbability = stored;
        } else {
          enqueued = true;
          aiState.enqueue(trackData.trackURI);
        }
      }

      const isTrashed = !!store.trashSongList[trackData.trackURI];

      const temp = document.createElement("div");
      temp.innerHTML = renderWrapper({
        aiEnabled,
        aiProbability,
        enqueued,
        isTrashed,
        buttonClassName: config.buttonClassName,
      });
      const wrapper = temp.firstElementChild as HTMLElement;

      const btn = wrapper.querySelector(
        `[${TRASH_BTN_DATA_ATTR}]`,
      ) as HTMLButtonElement;
      btn.onclick = (e) => {
        e.stopPropagation();
        const newState = btn.dataset.visuallyTrashed !== "true";
        btn.innerHTML = TRASH_ICON(16, newState ? "fill-[#22c55e]" : "");
        btn.dataset.visuallyTrashed = newState.toString();
        store.toggleSongTrash(trackData.trackURI!);
      };

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
                const spinner = wrapper.querySelector(`.${AI_SPINNER_CLASS}`);
                if (spinner) spinner.remove();

                if (next[uri] >= 0) {
                  const temp = document.createElement("div");
                  temp.innerHTML = Spicetify.ReactDOMServer.renderToString(
                    <span
                      className={`${AI_INDICATOR_CLASS} pointer-events-auto`}
                    >
                      <AiIndicator probability={next[uri]} size={16} />
                    </span>,
                  );
                  wrapper.insertBefore(temp.firstElementChild!, trashBtn);
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
