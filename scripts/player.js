document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const seekBar = document.getElementById("seek");
  const volumeBar = document.getElementById("volume");

  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playBtn.textContent = "▶";
    } else {
      audio.play();
      playBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener("timeupdate", () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
  });

  seekBar.addEventListener("input", () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  });

  volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
  });

  prevBtn.addEventListener("click", () => {
    audio.currentTime = 0;
  });

  nextBtn.addEventListener("click", () => {
    audio.currentTime = audio.duration;
  });
});
