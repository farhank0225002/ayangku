function showLoveNote() {
  var loveNote = document.getElementById("love-note");
  loveNote.classList.toggle("hidden");

  var loveButton = document.getElementById("love-button");
  if (loveNote.classList.contains("hidden")) {
    loveButton.innerHTML = "Buka Pesan Cinta";
  } else {
    loveButton.innerHTML = "Tutup Pesan Cinta";
  }
} // Get the audio element
var audio = document.getElementById("background-music");

// Save the current time of the audio when leaving the page
window.addEventListener("beforeunload", function () {
  localStorage.setItem("audioTime", audio.currentTime);
});

// Load the saved time when entering the new page
window.addEventListener("DOMContentLoaded", function () {
  var savedTime = localStorage.getItem("audioTime");
  if (savedTime !== null) {
    audio.currentTime = parseFloat(savedTime);
  }
});
