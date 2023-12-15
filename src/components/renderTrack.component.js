import { createEle } from "../helpers.js";

export function renderTrack(data, ele) {
  const trackEle = createEle("li", "track");
  const trackImageEle = createEle("img", "track__cover");
  const trackInfoEle = createEle("div", "track__info");
  const trackTitleEle = createEle("span", "track__title");
  const trackArtistNameEle = createEle("span", "track__artist-name");
  const trackNameEle = createEle("span", "track__name");
  const trackAudioEle = createEle("audio", "track__audio");
  const isHotEle = createEle("img", "track__is-hot");
  if (data.isHot) {
    isHotEle.src = "./src/icons/is-hot.png";
  } else {
    isHotEle.innerHTML = "";
  }

  trackImageEle.src = data.coverImageUrl;
  trackArtistNameEle.innerHTML = `${data.artistName} - `;
  trackNameEle.innerHTML = `${data.title}`;
  trackAudioEle.controls = true;
  trackAudioEle.src = data.fileUrl;

  trackTitleEle.append(isHotEle, trackArtistNameEle, trackNameEle);
  trackInfoEle.append(trackTitleEle, trackAudioEle);
  trackEle.append(trackImageEle, trackInfoEle);
  ele.append(trackEle);
}
