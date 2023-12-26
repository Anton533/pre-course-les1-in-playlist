import { ele } from "../helpers.js";
import { secondsToMinutesAndSeconds } from "../helpers.js";

import { renderTrack } from "./renderTrack.component.js";
import { renderHeader } from "./renderHeader.component.js";

export function renderPlaylist(playlistForRendering, parentElement) {
  const playlistEl = ele("div", "playlist");
  const tracksListEl = ele("ul", "tracks-list");

  renderHeader(playlistForRendering, playlistEl);

  parentElement.append(playlistEl);
  playlistEl.append(tracksListEl);

  const songsDurationList = [];
  const playlistForRederingLength = playlistForRendering.tracks.length;

  playlistForRendering.tracks.forEach((track) => {
    const trackAudioEle = renderTrack(track, tracksListEl);

    trackAudioEle.addEventListener("loadedmetadata", () => {
      songsDurationList.push(trackAudioEle.duration);

      if (songsDurationList.length === playlistForRederingLength) {
        const playlistDuration = playlistEl.querySelector(
          ".playlist__duration"
        );
        const time = songsDurationList.reduce((acc, value) => acc + value, 0);
        playlistDuration.textContent = secondsToMinutesAndSeconds(time);
      }
    });
  });
}
