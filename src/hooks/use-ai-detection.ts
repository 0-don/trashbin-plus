import { useEffect } from "react";
import { disposeBlocklist, initBlocklist } from "../lib/ai-blocklist";
import { DEFAULT_MODEL } from "../lib/ai-engine";
import { useAiStore } from "../store/ai-store";
import { useTrashbinStore } from "../store/trashbin-store";

export const useAiDetection = () => {
  const store = useTrashbinStore();

  // Always initialize the SoulOverAI blocklist (lightweight, independent of ONNX)
  useEffect(() => {
    initBlocklist();
    return () => {
      disposeBlocklist();
    };
  }, []);

  useEffect(() => {
    if (!store.aiDetectionEnabled) return;

    let cancelled = false;
    const aiStore = useAiStore.getState();

    const init = async () => {
      store.setAiAssetsDownloading(true);
      const ready = await aiStore.initialize(DEFAULT_MODEL);
      if (!cancelled) {
        store.setAiAssetsReady(ready);
        store.setAiAssetsDownloading(false);
      }
    };

    init();

    return () => {
      cancelled = true;
      aiStore.cleanup();
    };
  }, [store.aiDetectionEnabled]);
};
