import { createElementWithClass } from "../helpers.js";
import { renderCountDuration } from "./renderCountDuration.component.js";
import { renderArtistsInfo } from "./renderArtistsInfo.component.js";

export function renderInfo(data, ele) {
  const playlistInfoEle = createElementWithClass(
    "div",
    "playlist__info-wrapper"
  );
  renderSubtitle(playlistInfoEle);
  renderTitle(data, playlistInfoEle);
  renderCountDuration(data, playlistInfoEle);
  renderArtistsInfo(data, playlistInfoEle);
  ele.append(playlistInfoEle);
}

function renderSubtitle(ele) {
  const playlistSubtitleWrapperEle = createElementWithClass(
    "div",
    "playlist__subtitle-wrapper"
  );
  const playlistSubtitleEle = createElementWithClass(
    "span",
    "playlist__subtitle"
  );
  playlistSubtitleEle.innerHTML = `Playlist`;
  playlistSubtitleWrapperEle.append(playlistSubtitleEle);
  ele.append(playlistSubtitleWrapperEle);
}

function renderTitle(data, ele) {
  const playlistTitleEle = createElementWithClass("h2", "playlist__title");
  playlistTitleEle.append(data.title);
  ele.append(playlistTitleEle);
}

setTimeout(() => {
  const playlists = document.querySelectorAll(".playlist");

  playlists.forEach((playlist) => {
    const time = allTracksTime(playlist);
    const playlistDuration = playlist.querySelector(".playlist__duration");
    const min = (time - (time % 60)) / 60;
    const sec = Math.floor(time % 60);
    playlistDuration.textContent = `${min}m ${sec}s`;
  });
}, 2000);

////////////////////////////
function allTracksTime(playlist) {
  let allTracksTime = 0;

  const audioPlayer = playlist.querySelectorAll(".track__audio");
  audioPlayer.forEach((a) => {
    const durationInSeconds = a.duration;
    allTracksTime += durationInSeconds;
  });
  console.log(allTracksTime);
  return allTracksTime;
}
