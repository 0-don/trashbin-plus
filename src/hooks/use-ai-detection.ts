import { useEffect } from "react";
import { useAiStore } from "../store/ai-store";
import { useTrashbinStore } from "../store/trashbin-store";

export const useAiDetection = () => {
  const aiDetectionEnabled = useTrashbinStore((s) => s.aiDetectionEnabled);

  useEffect(() => {
    if (!aiDetectionEnabled) return;

    const aiStore = useAiStore.getState();
    aiStore.initialize();

    return () => {
      aiStore.cleanup();
    };
  }, [aiDetectionEnabled]);
};
