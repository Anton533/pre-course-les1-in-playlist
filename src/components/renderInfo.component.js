import { createEle } from "../helpers.js";
import { renderCountDuration } from "./renderCountDuration.component.js";
import { renderArtistsInfo } from "./renderArtistsInfo.component.js";

export function renderInfo(data, ele) {
  const playlistInfoEle = createEle("div", "playlist__info-wrapper");
  renderSubtitle(playlistInfoEle);
  renderTitle(data, playlistInfoEle);
  renderCountDuration(data, playlistInfoEle);
  renderArtistsInfo(data, playlistInfoEle);
  ele.append(playlistInfoEle);
}

function renderSubtitle(ele) {
  const playlistSubtitleWrapperEle = createEle(
    "div",
    "playlist__subtitle-wrapper"
  );
  const playlistSubtitleEle = createEle("span", "playlist__subtitle");
  playlistSubtitleEle.innerHTML = `Playlist`;
  playlistSubtitleWrapperEle.append(playlistSubtitleEle);
  ele.append(playlistSubtitleWrapperEle);
}

function renderTitle(data, ele) {
  const playlistTitleEle = createEle("h2", "playlist__title");
  playlistTitleEle.append(data.title);
  ele.append(playlistTitleEle);
}
