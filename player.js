const playlistOne = {
  title: "Hip-Hop Hits",
  coverImageUrl: "./img/hip-hop-hits.jpg",
  info: {
    totalTracksCount: 4,
    totalTracksDurationInSeconds: 733,
  },
  label: "./icons/isHot.png",
  tracks: [
    {
      coverImageUrl: "./img/eminem.png",
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "./audio/eminem-rap-god.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./img/50cent.png",
      artistName: "50cent",
      title: "In da Club",
      fileUrl: "./audio/50сent-in-da-club.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./img/dmx.png",
      artistName: "DMX",
      title: "X Gon' Give It To Ya",
      fileUrl: "./audio/dmx-x-gon-give-it-to-ya.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./img/eminem50cent.png",
      artistName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
      title: "You Don't Know",
      fileUrl: "./audio/eminem-50cent-you-dont-know.mp3",
      isHot: true,
    },
  ],
};

const playlistTwo = {
  title: "Rap Hits 1990s",
  coverImageUrl: "./img/Rap-Hits-1990s.png",
  info: {
    totalTracksCount: 4,
    totalTracksDurationInSeconds: 942,
  },
  label: "./src/isHot.png",
  tracks: [
    {
      coverImageUrl: "./img/public-enemy.png",
      artistName: "Public Enemy",
      title: "Fight the Power",
      fileUrl: "./audio/public-enemy-fight-the-power.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./img/vanila-ice.png",
      artistName: "Vanila Ice",
      title: "Ice Ice Baby",
      fileUrl: "./audio/vanilla-ice-ice-ice-baby.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./img/mc-hammer.png",
      artistName: "MC Hammer",
      title: "You Can’t Touch This",
      fileUrl: "./audio/mc-hammer-u-can't-touch-this.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./img/public-enemy.png",
      artistName: "Brand Nubian",
      title: "Brand Nubian",
      fileUrl: "./audio/brand-nubian-brand-nubian.mp3",
      isHot: false,
    },
  ],
};
const playlist1 = document.getElementById("playlist-1");
const playlist2 = document.getElementById("playlist-2");

renderPlaylist(playlistOne, playlist1);
renderPlaylist(playlistTwo, playlist2);

function renderPlaylist(playlistForRendering, ele) {
  createPlaylistHeading(playlistForRendering, ele);

  playlistForRendering.tracks.forEach((track) => {
    renderTrack(track, ele);
  });
}

function createEle(tagName, className) {
  tag = document.createElement(tagName);
  tag.classList = className;
  return tag;
}

function createPlaylistHeading(playlistForRendering, ele) {
  const div = createEle("div", "playlist__heading");
  createCover(playlistForRendering, div);
  createInfo(playlistForRendering, div);
  ele.append(div);
}

function createCover(data, ele) {
  const div = createEle("div", "playlist__cover-wrapper");
  const playlistImageElement = createEle("img", "playlist-cover");
  playlistImageElement.src = data.coverImageUrl;
  div.append(playlistImageElement);
  ele.append(div);
}

function createInfo(data, ele) {
  const div = createEle("div", "playlist__info-wrapper");
  createSubtitle(div);
  createTitle(data, div);
  createCountDuration(data, div);
  createArtistsInfo(data, div);
  ele.append(div);
}

function createSubtitle(ele) {
  const div = createEle("div", "playlist__subtitle-wrapper");
  const span = createEle("span", "playlist__subtitle");
  span.innerHTML = `Playlist`;
  div.append(span);
  ele.append(div);
}

function createTitle(data, ele) {
  const playlistTitleElement = createEle("h2", "playlist__title");
  playlistTitleElement.append(data.title);
  ele.append(playlistTitleElement);
}

function createCountDuration(data, ele) {
  const div = createEle("div", "playlist__count-duration-wrapper");
  createCount(data, div);
  createDuration(data, div);
  ele.append(div);
}

function createCount(data, ele) {
  const span = createEle("span", "playlist__count");
  span.append(`${data.info.totalTracksCount} tracks, `);
  ele.append(span);
}
function createDuration(data, ele) {
  const span = createEle("span", "playlist__duration");
  const min =
    (data.info.totalTracksDurationInSeconds -
      (data.info.totalTracksDurationInSeconds % 60)) /
    60;
  const sec = data.info.totalTracksDurationInSeconds % 60;
  span.append(`${min}m ${sec}s`);
  ele.append(span);
}

function createArtistsInfo(data, ele) {
  const arr = data.tracks.slice(0, 3);
  const artistsWrapper = createEle("span", "playlist__artists");
  const artists = arr.map((ele) => " " + ele.artistName);
  const andOther = createEle("span", "playlist__and-other");
  andOther.append(" " + "and others");
  artistsWrapper.append(artists, andOther);
  ele.append(artistsWrapper);
}

function renderTrack(data, ele) {
  const trackEle = createEle("div", "track");
  const trackEleImage = createEle("img", "track__cover");
  const trackInfo = createEle("div", "track__info");
  const trackTitle = createEle("div", "track__title");
  const trackArtistName = createEle("span", "track__artist-name");
  const trackName = createEle("span", "track__name");
  const trackAudio = createEle("audio", "track__audio");

  trackEleImage.src = data.coverImageUrl;
  trackArtistName.innerHTML = `${data.artistName} - `;
  trackName.innerHTML = `${data.title}`;
  trackAudio.controls = "controls";
  trackAudio.src = data.fileUrl;

  trackTitle.append(trackArtistName, trackName);
  trackInfo.append(trackTitle, trackAudio);
  trackEle.append(trackEleImage, trackInfo);
  ele.append(trackEle);
}
