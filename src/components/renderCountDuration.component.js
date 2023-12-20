import { createElementWithClass } from "../helpers.js";

export function renderCountDuration(data, ele) {
  const playlistCountDurationWrapperEle = createElementWithClass(
    "div",
    "playlist__count-duration-wrapper"
  );
  renderCount(data, playlistCountDurationWrapperEle);
  renderDuration(data, playlistCountDurationWrapperEle);
  ele.append(playlistCountDurationWrapperEle);
}

function renderCount(data, ele) {
  const playlistCountEle = createElementWithClass("span", "playlist__count");
  playlistCountEle.append(`${data.info.totalTracksCount} tracks, `);
  ele.append(playlistCountEle);
}

function renderDuration(data, ele) {
  const playlistDurationEle = createElementWithClass(
    "span",
    "playlist__duration"
  );
  const min =
    (data.info.totalTracksDurationInSeconds -
      (data.info.totalTracksDurationInSeconds % 60)) /
    60;
  const sec = data.info.totalTracksDurationInSeconds % 60;
  playlistDurationEle.append(`${min}m ${sec}s`);
  ele.append(playlistDurationEle);
}
