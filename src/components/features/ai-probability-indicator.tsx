import React, { useEffect, useRef } from "react";

interface AiProbabilityIndicatorProps {
  probability: number;
}

export const AiProbabilityIndicator: React.FC<AiProbabilityIndicatorProps> = (
  props,
) => {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fillRef.current) {
        fillRef.current.style.width = `${props.probability * 100}%`;
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [props.probability]);

  return (
    <span className="inline-flex! items-center! gap-0.5! whitespace-nowrap!">
      <span className="text-xs!">🧑‍🎤</span>
      <span
        className="relative! inline-block! h-2! w-12! overflow-hidden! rounded-full!"
        style={{ backgroundColor: "#22c55e" }}
      >
        <span
          ref={fillRef}
          className="absolute! right-0! h-full!"
          style={{
            backgroundColor: "#c53232",
            transition: "width 0.5s ease-out",
            width: "50%",
          }}
        />
      </span>
      <span className="text-xs!">🤖</span>
    </span>
  );
};

export function createAiIndicatorHTML(probability: number): string {
  const fillWidth = `${probability * 100}%`;
  return `<span style="display:inline-flex;align-items:center;gap:2px;white-space:nowrap" class="trashbin-ai-indicator">
    <span style="font-size:12px">🧑‍🎤</span>
    <span style="position:relative;display:inline-block;width:50px;height:8px;border-radius:9999px;background:#22c55e;overflow:hidden">
      <span style="position:absolute;right:0;height:100%;width:${fillWidth};background:#c53232;transition:width 0.5s ease-out"></span>
    </span>
    <span style="font-size:12px">🤖</span>
  </span>`;
}
