import { createElementWithClass } from "../helpers.js";

export function renderCover(data, ele) {
  const playlistCoverWrapper = createElementWithClass(
    "div",
    "playlist__cover-wrapper"
  );
  const playlistCoverImageEle = createElementWithClass("img", "playlist-cover");
  playlistCoverImageEle.src = data.coverImageUrl;
  playlistCoverWrapper.append(playlistCoverImageEle);
  ele.append(playlistCoverWrapper);
}
