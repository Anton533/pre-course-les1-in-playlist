import { createElementWithClass } from "../helpers.js";

export function renderTrack(data, ele) {
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
