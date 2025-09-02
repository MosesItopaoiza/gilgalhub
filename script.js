const playBtn = document.getElementById('play');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? '⏸' : '▶';
  // Later: Hook this up to actual audio playback
});
