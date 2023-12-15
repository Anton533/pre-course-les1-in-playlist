import { createEle } from "../helpers.js";

export function renderArtistsInfo(data, ele) {
  const arr = data.tracks.slice(0, 3);
  const playlistArtistsWrapperEle = createEle("span", "playlist__artists");
  const artists = arr.map((ele) => " " + ele.artistName);
  const andOther = createEle("span", "playlist__and-other");
  andOther.append(" " + "and others");
  playlistArtistsWrapperEle.append(artists, andOther);
  ele.append(playlistArtistsWrapperEle);
}
