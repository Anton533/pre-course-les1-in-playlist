import { playlists } from "./components/data.component.js";
import { renderPlaylists } from "./components/renderPlaylists.component.js";

renderPlaylists(playlists);

const trackAudio = document.querySelector(".track__audio");
