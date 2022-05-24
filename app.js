// JS for Drum kit

// List of drums
const listItems = document.getElementsByTagName("li");

// list of path names to audio files
const soundPath = [
  `sounds/boom.wav`,
  `sounds/clap.wav`,
  `sounds/hihat.wav`,
  `sounds/kick.wav`,
  `sounds/openhat.wav`,
  `sounds/ride.wav`,
  `sounds/snare.wav`,
  `sounds/tink.wav`,
  `sounds/tom.wav`,
];

// list of keyboard key shortcut key
const keysList = ["b", "c", "h", "k", "o", "r", "s", "t", "m"];

// click action
for (let listItem of listItems) {
  listItem.addEventListener("click", () => {
    let sound_file = `sounds/${listItem.id}.wav`;
    let drum_beat = new Audio(sound_file);
    drum_beat.play();
  });
}

// keyboard
document.addEventListener("keypress", (e) => {
  for (let i = 0; i < keysList.length; i++) {
    if (e.key == keysList[i]) {
      let dropBeat = new Audio(soundPath[i]);
      dropBeat.play();
    }
  }
});
