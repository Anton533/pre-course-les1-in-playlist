import { ele } from "../helpers.js";

export function renderCover(data, parentElement) {
  const coverWrapperEle = ele("div", "playlist__cover-wrapper");
  const coverImageEle = ele("img", "playlist-cover");

  coverImageEle.src = data.coverImageUrl;

  coverWrapperEle.append(coverImageEle);
  parentElement.append(coverWrapperEle);
}
