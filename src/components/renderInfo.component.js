import { ele } from "../helpers.js";
import { renderCountDuration } from "./renderCountDuration.component.js";
import { renderArtistsInfo } from "./renderArtistsInfo.component.js";

export function renderInfo(data, parentElement) {
  const infoEle = ele("div", "playlist__info-wrapper");

  renderSubtitle(infoEle);
  renderTitle(data, infoEle);
  renderCountDuration(infoEle);
  renderArtistsInfo(data, infoEle);

  parentElement.append(infoEle);
}

function renderSubtitle(parentElement) {
  const subtitleWrapperEle = ele("div", "playlist__subtitle-wrapper");
  const subtitleEle = ele("span", "playlist__subtitle");

  subtitleEle.innerHTML = `Playlist`;

  subtitleWrapperEle.append(subtitleEle);
  parentElement.append(subtitleWrapperEle);
}

function renderTitle(data, parentElement) {
  const titleEle = ele("h2", "playlist__title");

  titleEle.append(data.title);

  parentElement.append(titleEle);
}
