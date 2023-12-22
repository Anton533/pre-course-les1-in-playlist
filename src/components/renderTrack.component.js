import { createElementWithClass } from "../helpers.js";
import { secondsToMinutesAndSeconds } from "../helpers.js";

export function renderTrack(
  data,
  parentElement,
  playlistDurationList,
  playlistForRendering
) {
  const trackEle = createElementWithClass("li", "track");
  const trackImageEle = createElementWithClass("img", "track__cover");
  const trackInfoEle = createElementWithClass("div", "track__info");
  const trackTitleEle = createElementWithClass("span", "track__title");
  const trackArtistNameEle = createElementWithClass(
    "span",
    "track__artist-name"
  );
  const trackNameEle = createElementWithClass("span", "track__name");
  const trackAudioEle = createElementWithClass("audio", "track__audio");
  const isHotEle = createElementWithClass("img", "track__is-hot");
  if (data.isHot) {
    isHotEle.src = "./src/icons/is-hot.png";
  }

  trackAudioEle.addEventListener("loadedmetadata", () => {
    playlistDurationList.push(trackAudioEle.duration);

    if (playlistDurationList.length === playlistForRendering.tracks.length) {
      const playlist = trackAudioEle.closest(".playlist");
      const playlistDuration = playlist.querySelector(".playlist__duration");
      const time = playlistDurationList.reduce((acc, value) => acc + value, 0);
      playlistDuration.textContent = secondsToMinutesAndSeconds(time);
    }
  });

  trackImageEle.src = data.coverImageUrl;
  trackArtistNameEle.innerHTML = `${data.artistName} - `;
  trackNameEle.innerText = `${data.title}`;
  trackAudioEle.controls = true;
  trackAudioEle.src = data.fileUrl;

  trackTitleEle.append(isHotEle, trackArtistNameEle, trackNameEle);
  trackInfoEle.append(trackTitleEle, trackAudioEle);
  trackEle.append(trackImageEle, trackInfoEle);
  parentElement.append(trackEle);
}
