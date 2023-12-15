import { renderPlaylist } from "./renderPlaylist.component.js";

export function renderPlaylists(playlists) {
  const playlistWrapper = document.getElementById("playlists-wrapper");
  playlists.forEach((playlist) => renderPlaylist(playlist, playlistWrapper));
}
