import React from "react";
import { useAutoAddRecommendations } from "../../../hooks/use-auto-add-recommendations";

export const AutoAddRecommendations: React.FC = () => {
  useAutoAddRecommendations();
  return null;
};
