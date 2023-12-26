import { ele } from "../helpers.js";

import { renderCover } from "./renderCover.component.js";
import { renderInfo } from "./renderInfo.component.js";

export function renderHeader(playlistForRendering, parentElement) {
  const playlistHeaderEle = ele("div", "playlist__heading");

  renderCover(playlistForRendering, playlistHeaderEle);
  renderInfo(playlistForRendering, playlistHeaderEle);

  parentElement.append(playlistHeaderEle);
}
