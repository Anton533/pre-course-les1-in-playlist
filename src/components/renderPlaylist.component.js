import { createEle } from "../helpers.js";

import { renderTrack } from "./renderTrack.component.js";
import { renderHeading } from "./renderHeading.component.js";

export function renderPlaylist(playlistForRendering, ele) {
  const playlistEle = createEle("div", "playlist");
  const tracksListEle = createEle("ul", "tracks-list");
  ele.append(playlistEle);

  renderHeading(playlistForRendering, playlistEle);
  playlistEle.append(tracksListEle);

  playlistForRendering.tracks.forEach((track) => {
    renderTrack(track, tracksListEle);
  });
}
