import { createElementWithClass } from "../helpers.js";

export function renderArtistsInfo(data, parentElement) {
  const arr = data.tracks.slice(0, 3);
  const playlistArtistsWrapperEle = createElementWithClass(
    "span",
    "playlist__artists"
  );
  const artists = arr.map((ele) => " " + ele.artistName);
  const andOther = createElementWithClass("span", "playlist__and-other");
  andOther.append(" " + "and others");
  playlistArtistsWrapperEle.append(artists, andOther);
  parentElement.append(playlistArtistsWrapperEle);
}
