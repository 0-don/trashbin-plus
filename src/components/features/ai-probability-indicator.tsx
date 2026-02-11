import React from "react";
import {
  BsCpuFill,
  BsPersonCheck,
  BsPersonFill,
  BsQuestionCircle,
  BsRobot,
} from "react-icons/bs";
import { i18n } from "../providers/providers";

const TIERS = [
  { max: 0.2, Icon: BsPersonCheck, color: "#22c55e", labelKey: "AI_TIER_LIKELY_HUMAN" as const },
  { max: 0.4, Icon: BsPersonFill, color: "#4ade80", labelKey: "AI_TIER_PROBABLY_HUMAN" as const },
  { max: 0.6, Icon: BsQuestionCircle, color: "#eab308", labelKey: "AI_TIER_UNCERTAIN" as const },
  { max: 0.8, Icon: BsCpuFill, color: "#f97316", labelKey: "AI_TIER_PROBABLY_AI" as const },
  { max: 1.0, Icon: BsRobot, color: "#ef4444", labelKey: "AI_TIER_LIKELY_AI" as const },
];

function getTier(probability: number) {
  return TIERS.find((t) => probability <= t.max) ?? TIERS[TIERS.length - 1];
}

export function createAiIndicatorHTML(probability: number, size = 14): string {
  const tier = getTier(probability);
  const pct = Math.round(probability * 100);
  const label = i18n.t(tier.labelKey);
  const svg = Spicetify.ReactDOMServer.renderToString(<tier.Icon size={size} />);
  return `<span title="${pct}% AI — ${label}" style="cursor:default;color:${tier.color};line-height:1;display:inline-flex">${svg}</span>`;
}
