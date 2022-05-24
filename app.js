// JS for Drum kit

// sounds
const audioBoom = new Audio("sounds/boom.wav");
const audioClap = new Audio("sounds/clap.wav");
const audioHiHat = new Audio("sounds/hithat.wav");
const audioKick = new Audio("sounds/kick.wav");
const audioOpenHat = new Audio("sounds/openhat.wav");
const audioride = new Audio("sounds/ride.wav");
const audioSnare = new Audio("sounds/snare.wav");
const audioTink = new Audio("sounds/tink.wav");
const audioTom = new Audio("sounds/tom.wav");

const boom = document.getElementById("boom");

boom.addEventListener("click", () => {
  // tip from josh
  audioBoom.pause();
  audioBoom.load();
  audioBoom.currentTime = 0;
  audioBoom.volume = 1.0;
  audioBoom.play();
});

const clap = document.getElementById("clap");
clap.addEventListener("click", () => {
  audioClap.play();
});

const hiHat = document.getElementById("hiHat");
hiHat.addEventListener("click", () => {
  audioHiHat.play();
});

const kick = document.getElementById("kick");
kick.addEventListener("click", () => {
  audioKick.play();
});
