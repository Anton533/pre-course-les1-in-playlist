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
      fileUrl: "./src/Eminem_-_Rap_God.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./img/50cent.png",
      artistName: "50cent",
      title: "In da Club",
      fileUrl: "./src/50-cent-In-Da-Club.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./img/dmx.png",
      artistName: "DMX",
      title: "Give It To Ya",
      fileUrl: "./src/DMX-X-Gon-Give-It-To-Ya.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./img/eminem50cent.png",
      artistName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
      title: "You Don't Know",
      fileUrl: "./src/eminem-50cent-you-dont-know.mp3",
      isHot: true,
    },
  ],
};

const playlistsTwo = {
  title: "Rap Hits 1990s",
  coverImageUrl: "./src/Rap-Hits-1990s.jpg",
  info: {
    totalTracksCount: 4,
    totalTracksDurationInSeconds: 733,
  },
  label: "./src/isHot.png",
  tracks: [
    {
      coverImageUrl: "./src/Fight-the-Power.jpg",
      artistName: "Public Enemy",
      title: "Fight the Power",
      fileUrl: "./src/Eminem_-_Rap_God.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./src/Ice-Ice-Baby.jpg",
      artistName: "Vanila Ice",
      title: "Ice Ice Baby",
      fileUrl: "./src/50-cent-In-Da-Club.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./src/MC-Hammer.jpg",
      artistName: "MC Hammer",
      title: "You Can’t Touch This",
      fileUrl: "./src/DMX-X-Gon-Give-It-To-Ya.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./src/Brand-Nubian.jpg",
      artistName: "Brand Nubian",
      title: "Brand Nubian",
      fileUrl: "./src/eminem-50cent-you-dont-know.mp3",
      isHot: false,
    },
  ],
};
const playlist1 = document.getElementById("playlist-1");

console.log(playlist1);

renderPlaylist(playlist);

function renderPlaylist(playlistForRendering) {
  // all render code should be here.
  let playlistImageElement = document.createElement("img");
  playlistImageElement.src = playlist.coverImageUrl;
  playlist1.append(playlistImageElement);

  let playlistTitleElement = document.createElement("h2");
  playlistTitleElement.append(playlist.title);
  playlist1.append(playlistTitleElement);

  let trackListElement = document.createElement("ul");

  let track1Element = document.createElement("li");
  track1Element.append(
    playlist.tracks[0].artistName + " - " + playlist.tracks[0].title
  );
}
