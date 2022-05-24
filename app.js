// JS for Drum kit

// List of drums
const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// UPPER lower case
for (let listItem of listItems) {
  listItem.addEventListener("mouseover", () => {
    listItem.textContent = listItem.textContent.toUpperCase();
  });
  listItem.addEventListener("mouseout", () => {
    listItem.textContent = listItem.textContent.toLowerCase();
  });
}

// click on each item
for (let listItem of listItems) {
  listItem.addEventListener("click", () => {
    // console.log(listItem);
    // console.log(listItem.id);
    let sound_file = `sounds/${listItem.id}.wav`;
    // console.log(sound_file);
    let drum_beat = new Audio(sound_file);
    drum_beat.play();
  });
}
