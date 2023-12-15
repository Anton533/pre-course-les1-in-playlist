import { playlists } from "./src/components/data.module.js";

const playlistWrapper = document.getElementById("playlists-wrapper");

playlists.forEach((playlist) => renderPlaylist(playlist, playlistWrapper));

function renderPlaylist(playlistForRendering, ele) {
  const playlistEle = createEle("div", "playlist");
  const tracksListEle = createEle("ul", "tracks-list");
  ele.append(playlistEle);

  createPlaylistHeading(playlistForRendering, playlistEle);
  playlistEle.append(tracksListEle);

  playlistForRendering.tracks.forEach((track) => {
    renderTrack(track, tracksListEle);
  });
}

function createEle(tagName, className) {
  const tag = document.createElement(tagName);
  tag.classList = className;
  return tag;
}

function createPlaylistHeading(playlistForRendering, ele) {
  const playlistHeadingEle = createEle("div", "playlist__heading");
  createCover(playlistForRendering, playlistHeadingEle);
  createInfo(playlistForRendering, playlistHeadingEle);
  ele.append(playlistHeadingEle);
}

function createCover(data, ele) {
  const div = createEle("div", "playlist__cover-wrapper");
  const playlistImageEle = createEle("img", "playlist-cover");
  playlistImageEle.src = data.coverImageUrl;
  div.append(playlistImageEle);
  ele.append(div);
}

function createInfo(data, ele) {
  const playlistInfoEle = createEle("div", "playlist__info-wrapper");
  createSubtitle(playlistInfoEle);
  createTitle(data, playlistInfoEle);
  createCountDuration(data, playlistInfoEle);
  createArtistsInfo(data, playlistInfoEle);
  ele.append(playlistInfoEle);
}

function createSubtitle(ele) {
  const playlistSubtitleWrapperEle = createEle(
    "div",
    "playlist__subtitle-wrapper"
  );
  const playlistSubtitleEle = createEle("span", "playlist__subtitle");
  playlistSubtitleEle.innerHTML = `Playlist`;
  playlistSubtitleWrapperEle.append(playlistSubtitleEle);
  ele.append(playlistSubtitleWrapperEle);
}

function createTitle(data, ele) {
  const playlistTitleEle = createEle("h2", "playlist__title");
  playlistTitleEle.append(data.title);
  ele.append(playlistTitleEle);
}

function createCountDuration(data, ele) {
  const playlistCountDurationWrapperEle = createEle(
    "div",
    "playlist__count-duration-wrapper"
  );
  createCount(data, playlistCountDurationWrapperEle);
  createDuration(data, playlistCountDurationWrapperEle);
  ele.append(playlistCountDurationWrapperEle);
}

function createCount(data, ele) {
  const playlistCountEle = createEle("span", "playlist__count");
  playlistCountEle.append(`${data.info.totalTracksCount} tracks, `);
  ele.append(playlistCountEle);
}
function createDuration(data, ele) {
  const playlistDurationEle = createEle("span", "playlist__duration");
  const min =
    (data.info.totalTracksDurationInSeconds -
      (data.info.totalTracksDurationInSeconds % 60)) /
    60;
  const sec = data.info.totalTracksDurationInSeconds % 60;
  playlistDurationEle.append(`${min}m ${sec}s`);
  ele.append(playlistDurationEle);
}

function createArtistsInfo(data, ele) {
  const arr = data.tracks.slice(0, 3);
  const playlistArtistsWrapperEle = createEle("span", "playlist__artists");
  const artists = arr.map((ele) => " " + ele.artistName);
  const andOther = createEle("span", "playlist__and-other");
  andOther.append(" " + "and others");
  playlistArtistsWrapperEle.append(artists, andOther);
  ele.append(playlistArtistsWrapperEle);
}

function renderTrack(data, ele) {
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
