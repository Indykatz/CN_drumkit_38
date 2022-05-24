// JS for Drum kit

// List of drums
const listItems = document.getElementsByTagName("li");

// click action
for (let listItem of listItems) {
  listItem.addEventListener("mouseover", () => {
    listItem.textContent = listItem.textContent.toUpperCase();
  });
  listItem.addEventListener("mouseout", () => {
    listItem.textContent = listItem.textContent.toLowerCase();
  });
  listItem.addEventListener("click", () => {
    let sound_file = `sounds/${listItem.id}.wav`;
    let drum_beat = new Audio(sound_file);
    drum_beat.play();
  });
}

//
// Keyboard
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

const keysList = ["b", "c", "h", "k", "o", "r", "s", "t", "T"];

document.addEventListener("keypress", (e) => {
  for (let i = 0; i < keysList.length; i++) {
    if (e.key == keysList[i]) {
      console.log(e.key);
      let dropBeat = new Audio(soundPath[i]);
      dropBeat.play();
    }
  }
});
