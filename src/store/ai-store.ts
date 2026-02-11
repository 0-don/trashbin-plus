import { create } from "zustand";
import { classifyTrack, disposeClassifier, initClassifier } from "../lib/ai-classifier";
import { type ModelId, MODELS } from "../lib/ai-engine";
import { AI_INDICATOR_CLASS } from "../lib/constants";
import { useTrashbinStore } from "./trashbin-store";

const LS_KEY_PREFIX = "trashbin-ai-results:";
const POLL_INTERVAL = 500;
const AI_TRASH_THRESHOLD = 0.8;

interface AiState {
  results: Record<string, number>;
  lsKey: string | null;

  enqueue: (trackUri: string) => void;
  clearStorage: () => void;
  initialize: (modelId: ModelId, onProgress?: (message: string) => void) => Promise<boolean>;
  cleanup: () => void;
}

const queue = new Set<string>();
let processing = false;
let intervalId: ReturnType<typeof setInterval> | null = null;

function autoTrashIfNeeded(uri: string, probability: number): void {
  const state = useTrashbinStore.getState();
  if (
    state.trashAiSongs &&
    probability >= AI_TRASH_THRESHOLD &&
    !state.trashSongList[uri]
  ) {
    state.toggleSongTrash(uri, false);
  }
}

function setResult(uri: string, probability: number): void {
  const state = useAiStore.getState();
  const results = { ...state.results, [uri]: probability };
  useAiStore.setState({ results });
  if (state.lsKey) {
    Spicetify.LocalStorage.set(state.lsKey, JSON.stringify(results));
  }
}

async function processNext(): Promise<void> {
  if (processing || queue.size === 0) return;

  const uri = queue.values().next().value!;
  queue.delete(uri);

  if (useAiStore.getState().results[uri] !== undefined) return;

  processing = true;
  try {
    const probability = await classifyTrack(uri);
    if (probability !== null) {
      setResult(uri, probability);
      autoTrashIfNeeded(uri, probability);
    }
  } catch (error) {
    // classify failed
  } finally {
    processing = false;
  }
}

function startQueue(): void {
  if (intervalId) return;
  intervalId = setInterval(processNext, POLL_INTERVAL);
}

function stopQueue(): void {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  queue.clear();
  processing = false;
}

export const useAiStore = create<AiState>(() => ({
  results: {},
  lsKey: null,

  enqueue: (trackUri: string) => {
    if (useAiStore.getState().results[trackUri] !== undefined) return;
    queue.add(trackUri);
  },

  clearStorage: () => {
    const state = useAiStore.getState();
    if (state.lsKey) {
      Spicetify.LocalStorage.remove(state.lsKey);
    }
    queue.clear();
    useAiStore.setState({ results: {} });
    document
      .querySelectorAll(`.${AI_INDICATOR_CLASS}`)
      .forEach((el) => el.remove());
  },

  initialize: async (modelId: ModelId, onProgress?: (message: string) => void) => {
    try {
      const lsKey = `${LS_KEY_PREFIX}${modelId}`;
      let results: Record<string, number> = {};
      try {
        const raw = Spicetify.LocalStorage.get(lsKey);
        results = raw ? JSON.parse(raw) : {};
      } catch {
        results = {};
      }
      useAiStore.setState({ lsKey, results });

      const initialized = await initClassifier(modelId, onProgress);
      if (initialized) {
        onProgress?.("Ready");
        startQueue();
      }
      return initialized;
    } catch (error) {
      // init failed
      return false;
    }
  },

  cleanup: () => {
    stopQueue();
    disposeClassifier();
    useAiStore.setState({ results: {}, lsKey: null });
  },
}));
