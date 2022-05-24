// JS for Drum kit

const boom = document.getElementById("boom");
const audioBoom = document.getElementById("audioBoom");

boom.addEventListener("click", () => {
  audioBoom.play();
});

const clap = document.getElementById("clap");
const audioClap = document.getElementById("audioClap");

clap.addEventListener("click", () => {
  audioClap.play();
});

const hiHat = document.getElementById("hiHat");
const audioHiHat = document.getElementById("audioHiHat");

hiHat.addEventListener("click", () => {
  audioHiHat.play();
});
