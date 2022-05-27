// JS for Drum kit

// CLICK
// List of drums
const listItems = document.getElementsByTagName("li");
// for each item in list item
for (let listItem of listItems) {
  // listne to click
  listItem.addEventListener("click", () => {
    // new string `sound/IDTAG/.way - example `sounds/boom.wav
    let sound_file = `sounds/${listItem.id}.wav`;
    // create new audio with path string
    let drum_beat = new Audio(sound_file);
    // play
    drum_beat.play();
  });
}

// KEYBOARD
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
// keyboard
// listen for key pressed event
document.addEventListener("keypress", (e) => {
  // for each item in keysList get index value not the element (i, 2, 3, 4,...)
  for (let i = 0; i < keysList.length; i++) {
    // if keycode equals the valkues of the list index element
    // index 1 = "b" index 1 = sound/boom.wav
    if (e.key == keysList[i]) {
      // get the ssamae index number for ssound path
      let dropBeat = new Audio(soundPath[i]);
      // drop that funky beat
      dropBeat.play();
    }
  }
});
