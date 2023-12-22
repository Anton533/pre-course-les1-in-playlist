import { createElementWithClass } from "../helpers.js";

export function renderCountDuration(data, parentElement) {
  const playlistCountDurationWrapperEle = createElementWithClass(
    "div",
    "playlist__count-duration-wrapper"
  );
  renderCount(data, playlistCountDurationWrapperEle);
  renderDuration(data, playlistCountDurationWrapperEle);
  parentElement.append(playlistCountDurationWrapperEle);
}

function renderCount(data, parentElement) {
  const playlistCountEle = createElementWithClass("span", "playlist__count");
  playlistCountEle.append(`${data.tracks.length} tracks, `);
  parentElement.append(playlistCountEle);
}

function renderDuration(data, parentElement) {
  const playlistDurationEle = createElementWithClass(
    "span",
    "playlist__duration"
  );
  parentElement.append(playlistDurationEle);
}
