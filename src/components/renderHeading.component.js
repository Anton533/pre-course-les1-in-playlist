import { createElementWithClass } from "../helpers.js";

import { renderCover } from "./renderCover.component.js";
import { renderInfo } from "./renderInfo.component.js";

export function renderHeading(playlistForRendering, parentElement) {
  const playlistHeadingEle = createElementWithClass("div", "playlist__heading");
  renderCover(playlistForRendering, playlistHeadingEle);
  renderInfo(playlistForRendering, playlistHeadingEle);
  parentElement.append(playlistHeadingEle);
}
