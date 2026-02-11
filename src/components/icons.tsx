import React from "react";
import { BsFillPauseFill, BsFillPlayFill, BsTrash3 } from "react-icons/bs";

export const TRASH_ICON = (size?: string | number, className?: string) =>
  Spicetify.ReactDOMServer.renderToString(<BsTrash3 size={size} className={className} />);

export const PLAY_ICON = (size: number = 26) =>
  Spicetify.ReactDOMServer.renderToString(<BsFillPlayFill size={size} />);

export const PAUSE_ICON = (size: number = 26) =>
  Spicetify.ReactDOMServer.renderToString(<BsFillPauseFill size={size} />);
