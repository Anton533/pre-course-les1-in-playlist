import { createElementWithClass } from "../helpers.js";

import { renderTrack } from "./renderTrack.component.js";
import { renderHeading as renderHeader } from "./renderHeading.component.js";

export function renderPlaylist(playlistForRendering, parentElement) {
  const playlistEl = createElementWithClass("div", "playlist");
  const tracksListEl = createElementWithClass("ul", "tracks-list");
  parentElement.append(playlistEl);

  renderHeader(playlistForRendering, playlistEl);
  playlistEl.append(tracksListEl);

  playlistForRendering.tracks.forEach((track) => {
    renderTrack(track, tracksListEl);
  });
}
