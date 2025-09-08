const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const seekBar = document.getElementById('seek');
const volumeBar = document.getElementById('volume');

let isPlaying = false;

// Play / Pause
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = '▶';
  } else {
    audio.play();
    playBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
});

// Update seek bar as song plays
audio.addEventListener('timeupdate', () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek to position
seekBar.addEventListener('input', () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});

// Volume control
volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value / 100;
});
