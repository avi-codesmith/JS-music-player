"use strict";

let progress = document.querySelector("#progress");
let song = document.querySelector("audio");
let playIcon = document.querySelector(".big-icon");
const background = document.querySelector(".big");
const soundTracker = document.querySelector(".sound-range");
const songIcon = document.querySelector(".sound-icon");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
  song.pause();
};

const playPause = () => {
  if (playIcon.src.includes("play.png")) {
    playIcon.src = "pause.png";
    song.play();
    progress.disabled = false;
    progress.style.cursor = "pointer";
  } else if (playIcon.src.includes("pause.png")) {
    playIcon.src = "play.png";
    song.pause();
  }
};

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    playPause();
  }
});

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
});

const soundSystem = () => {
  song.volume = soundTracker.value;

  if (soundTracker.value == 0) {
    songIcon.src = "mute.png";
  } else if (soundTracker.value > 0) {
    songIcon.src = "sound.png";
  }
};

soundTracker.addEventListener("input", soundSystem);
