"use strict";

let progress = document.querySelector("#progress");
console.log(progress);

let song = document.querySelector("audio");
console.log(song);

let playIcon = document.querySelector(".big-icon");
const background = document.querySelector(".big");
console.log(playIcon);

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

const playPause = () => {
  if (playIcon.src.includes("play.png")) {
    playIcon.src = "pause.png";
    song.play();
  } else if (playIcon.src.includes("pause.png")) {
    playIcon.src = "play.png";
    song.pause();
  }
};

background.addEventListener("click", playPause);

progress.addEventListener("change", () => {
  song.currentTime = progress.value;
});

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

song.addEventListener("ended", () => {
  playIcon.src = "replay.png";
  song.pause();
  progress.disabled = "true";
  progress.style.cursor = "not-allowed";
  // if (song.pause()) {
  // playIcon.src = "play.png";
  // song.play();
  // }
});
