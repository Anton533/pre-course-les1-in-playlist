import { ele } from "../helpers.js";

export function renderArtistsInfo(data, parentElement) {
  const wrapperEle = ele("span", "playlist__artists");
  const andOtherEle = ele("span", "playlist__and-other");

  const arr = data.tracks.slice(0, 3);
  const artists = arr.map((ele) => " " + ele.artistName);

  andOtherEle.append(" " + "and others");
  wrapperEle.append(artists, andOtherEle);
  parentElement.append(wrapperEle);
}
