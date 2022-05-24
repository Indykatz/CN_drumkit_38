// JS for Drum kit

// sounds
const Boom = new Audio("sounds/boom.wav");
const Clap = new Audio("sounds/clap.wav");
const HiHat = new Audio("sounds/hithat.wav");
const Kick = new Audio("sounds/kick.wav");
const OpenHat = new Audio("sounds/openhat.wav");
const Ride = new Audio("sounds/ride.wav");
const Snare = new Audio("sounds/snare.wav");
const Tink = new Audio("sounds/tink.wav");
const Tom = new Audio("sounds/tom.wav");

let button = document.getElementById("button");

button.addEventListener("click", () => {
  let list = document.get("drumList");
});

// tip from josh
//   audioBoom.pause();
//   audioBoom.load();
//   audioBoom.currentTime = 0;
//   audioBoom.volume = 1.0;
//   audioBoom.play();

// const clap = document.getElementById("clap");
// clap.addEventListener("click", () => {
//   audioClap.play();
// });

// const hiHat = document.getElementById("hiHat");
// hiHat.addEventListener("click", () => {
//   audioHiHat.play();
// });

// const kick = document.getElementById("kick");
// kick.addEventListener("click", () => {
//   audioKick.play();
// });
