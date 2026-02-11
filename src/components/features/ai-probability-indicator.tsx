import React from "react";
import { useTranslation } from "react-i18next";
import {
  BsCpuFill,
  BsPersonCheck,
  BsPersonFill,
  BsQuestionCircle,
  BsRobot,
} from "react-icons/bs";
import { TranslationKey } from "../../lib/types";

const TIERS = [
  {
    max: 0.2,
    Icon: BsPersonCheck,
    color: "#22c55e",
    labelKey: "AI_TIER_LIKELY_HUMAN" as TranslationKey,
  },
  {
    max: 0.4,
    Icon: BsPersonFill,
    color: "#4ade80",
    labelKey: "AI_TIER_PROBABLY_HUMAN" as TranslationKey,
  },
  {
    max: 0.6,
    Icon: BsQuestionCircle,
    color: "#eab308",
    labelKey: "AI_TIER_UNCERTAIN" as TranslationKey,
  },
  {
    max: 0.8,
    Icon: BsCpuFill,
    color: "#f97316",
    labelKey: "AI_TIER_PROBABLY_AI" as TranslationKey,
  },
  {
    max: 1.0,
    Icon: BsRobot,
    color: "#ef4444",
    labelKey: "AI_TIER_LIKELY_AI" as TranslationKey,
  },
];

interface AiIndicatorProps {
  probability: number;
  size?: number;
}

export const AiIndicator: React.FC<AiIndicatorProps> = (props) => {
  const { t } = useTranslation();
  const tier =
    TIERS.find((t) => props.probability <= t.max) ?? TIERS[TIERS.length - 1];
  const pct = Math.round(props.probability * 100);
  const label = t(tier.labelKey);

  return (
    <span
      title={`${pct}% AI — ${label}`}
      style={{
        cursor: "default",
        color: tier.color,
        lineHeight: 1,
        display: "inline-flex",
      }}
    >
      <tier.Icon size={props.size ?? 14} />
    </span>
  );
};
