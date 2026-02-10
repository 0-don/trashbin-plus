import React, { useEffect, useState } from "react";
import { classifyTrack, getCachedResult } from "../../lib/ai-track-handler";
import { useTrashbinStore } from "../../store/trashbin-store";
import { AiProbabilityIndicator } from "./ai-probability-indicator";

export const AiDetectionWidget: React.FC = () => {
  const store = useTrashbinStore();
  const [probability, setProbability] = useState<number | null>(null);
  const [currentUri, setCurrentUri] = useState<string | null>(null);

  useEffect(() => {
    if (!store.aiDetectionEnabled || !store.aiAssetsReady) {
      setProbability(null);
      return;
    }

    const classify = async () => {
      const track = Spicetify.Player.data?.item;
      if (!track?.uri || !track.uri.startsWith("spotify:track:")) {
        setProbability(null);
        return;
      }

      setCurrentUri(track.uri);

      const cached = getCachedResult(track.uri);
      if (cached !== undefined) {
        setProbability(cached);
        return;
      }

      setProbability(null);
      const result = await classifyTrack(track.uri);
      // Only update if the track hasn't changed while we were classifying
      const current = Spicetify.Player.data?.item;
      if (current?.uri === track.uri) {
        setProbability(result);
      }
    };

    classify();

    const handleSongChange = () => classify();
    Spicetify.Player.addEventListener("songchange", handleSongChange);

    return () => {
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [store.aiDetectionEnabled, store.aiAssetsReady]);

  if (
    !store.aiDetectionEnabled ||
    !store.aiAssetsReady ||
    probability === null
  ) {
    return null;
  }

  return (
    <div
      className="pointer-events-auto! fixed! z-50!"
      style={{ bottom: "90px", right: "24px" }}
    >
      <AiProbabilityIndicator probability={probability} />
    </div>
  );
};
