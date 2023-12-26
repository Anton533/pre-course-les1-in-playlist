import { renderPlaylist } from "./renderPlaylist.component.js";

export function renderPlaylists(playlists) {
  const wrapperEle = document.getElementById("playlists-wrapper");
  playlists.forEach((playlist) => renderPlaylist(playlist, wrapperEle));
}
