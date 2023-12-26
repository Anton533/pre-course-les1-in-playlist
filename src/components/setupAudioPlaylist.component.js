export function setupAudioPlaylist() {
  const tracks = document.querySelectorAll(".track__audio");

  let nowPlayingTrack = tracks[0];

  tracks.forEach((track, index) => {
    track.addEventListener("play", () => {
      if (track !== nowPlayingTrack && nowPlayingTrack !== null) {
        nowPlayingTrack.pause();
      }
      nowPlayingTrack = track;
    });

    track.addEventListener("ended", () => {
      const nextIndex = index + 1;
      if (nextIndex < tracks.length) {
        const nextTrack = tracks[nextIndex];
        nowPlayingTrack = nextTrack;
        nextTrack.play();
      }
    });
  });
}
