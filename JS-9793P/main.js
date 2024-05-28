let sayi = 0;
let numara = document.getElementById("result");
function arttir() {
  sayi += 1;
  numara.innerHTML = sayi;
}
// Muzik Kontrolleri

let audio = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

let isPlaying = false;
let currentTrackIndex = 0;

const tracks = ["music/birds.mp3", "music/campfire-1.mp3", "music/rain.mp3"];

playBtn.addEventListener("click", function () {
  if (!isPlaying) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", function () {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  audio.src = tracks[currentTrackIndex];
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

backBtn.addEventListener("click", function () {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  audio.src = tracks[currentTrackIndex];
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
});
