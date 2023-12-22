import { createElementWithClass } from "../helpers.js";

export function renderCover(data, parentElement) {
  const playlistCoverWrapper = createElementWithClass(
    "div",
    "playlist__cover-wrapper"
  );
  const playlistCoverImageEle = createElementWithClass("img", "playlist-cover");
  playlistCoverImageEle.src = data.coverImageUrl;
  playlistCoverWrapper.append(playlistCoverImageEle);
  parentElement.append(playlistCoverWrapper);
}
