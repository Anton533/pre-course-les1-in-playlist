import { playlists } from "./data.js";
import { renderPlaylists } from "./components/renderPlaylists.component.js";
import { setupAudioPlaylist } from "./components/setupAudioPlaylist.component.js";

renderPlaylists(playlists);

setupAudioPlaylist();
