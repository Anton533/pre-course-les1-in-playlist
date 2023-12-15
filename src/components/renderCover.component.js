import { createEle } from "../helpers.js";

export function renderCover(data, ele) {
  const div = createEle("div", "playlist__cover-wrapper");
  const playlistImageEle = createEle("img", "playlist-cover");
  playlistImageEle.src = data.coverImageUrl;
  div.append(playlistImageEle);
  ele.append(div);
}
