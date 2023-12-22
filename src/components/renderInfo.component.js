import { createElementWithClass } from "../helpers.js";
import { renderCountDuration } from "./renderCountDuration.component.js";
import { renderArtistsInfo } from "./renderArtistsInfo.component.js";

export function renderInfo(data, parentElement) {
  const playlistInfoEle = createElementWithClass(
    "div",
    "playlist__info-wrapper"
  );
  renderSubtitle(playlistInfoEle);
  renderTitle(data, playlistInfoEle);
  renderCountDuration(data, playlistInfoEle);
  renderArtistsInfo(data, playlistInfoEle);
  parentElement.append(playlistInfoEle);
}

function renderSubtitle(parentElement) {
  const playlistSubtitleWrapperEle = createElementWithClass(
    "div",
    "playlist__subtitle-wrapper"
  );
  const playlistSubtitleEle = createElementWithClass(
    "span",
    "playlist__subtitle"
  );
  playlistSubtitleEle.innerHTML = `Playlist`;
  playlistSubtitleWrapperEle.append(playlistSubtitleEle);
  parentElement.append(playlistSubtitleWrapperEle);
}

function renderTitle(data, parentElement) {
  const playlistTitleEle = createElementWithClass("h2", "playlist__title");
  playlistTitleEle.append(data.title);
  parentElement.append(playlistTitleEle);
}
