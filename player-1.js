// data
let playlist = {
  title: "Hip-Hop Hits",
  coverImageUrl: "./playlist1.png",
  info: {
    totalTracksCount: 4,
    totalTracksDurationInSeconds: 733,
  },
  tracks: [
    {
      coverImageUrl: "track1.png",
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "Eminem_-_Rap_God.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "track2.png",
      artistName: "50cent",
      title: "In da Club",
      fileUrl: "50_Cent_-_In_Da_Club_FlexyOkay.com.mp3",
      isHot: true,
    },
  ],
};
let playlist2 = {
  title: "Hip-Hop Hits",
  coverImageUrl: "./playlist1.png",
  info: {
    totalTracksCount: 4,
    totalTracksDurationInSeconds: 733,
  },
  tracks: [
    {
      coverImageUrl: "track1.png",
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "Eminem_-_Rap_God.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "track2.png",
      artistName: "50cent",
      title: "In da Club",
      fileUrl: "50_Cent_-_In_Da_Club_FlexyOkay.com.mp3",
      isHot: true,
    },
  ],
};

// render
renderPlaylist(playlist);
renderPlaylist(playlist2);


function renderPlaylist(playlistForRendering) {
  renderPlaylistHeader(playlistForRendering);

  renderTrack(playlistForRendering.tracks[0]);
  renderTrack(playlistForRendering.tracks[1]);
}
function renderPlaylistHeader(playlistForRendering) {
  let playlistImageElement = document.createElement("img");
  playlistImageElement.src = playlistForRendering.coverImageUrl;
  document.body.append(playlistImageElement);

  let playlistTitleElement = document.createElement("h2");
  playlistTitleElement.append(playlistForRendering.title);
  document.body.append(playlistTitleElement);
}
function renderTrack(inputTrackForRendering) {
  let trackElement = document.createElement("div");
  trackElement.append(
    inputTrackForRendering.artistName + " - " + inputTrackForRendering.title
  );

  let playerElement = document.createElement('audio');
  playerElement.src = inputTrackForRendering.fileUrl;
  playerElement.controls = true;
  trackElement.append(playerElement);

  let coverElement = document.createElement('img');
  coverElement.src = inputTrackForRendering.coverImageUrl;
  trackElement.append(coverElement);

  document.body.append(trackElement);
}
