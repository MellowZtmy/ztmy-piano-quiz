const audio = document.getElementById('audio');
const playPauseBtn = document.querySelector('.play-pause-btn');
const audioPlayer = document.querySelector('.audio-player');
const stopBtn = document.querySelector('.stop-btn');
const progressBar = document.querySelector('.audio-player .progress-bar');
const iframeContainer = document.getElementById('iframeContainer');
const quizButtons = document.querySelectorAll('.quiz-btn');

// オーディオ再生/一時停止
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.add('paused');
    audioPlayer.classList.add('playing');
  } else {
    audio.pause();
    playPauseBtn.classList.remove('paused');
    audioPlayer.classList.remove('playing');
  }
});

// 再生終了時の状態リセット
audio.addEventListener('ended', () => {
  playPauseBtn.classList.remove('paused');
  audioPlayer.classList.remove('playing');
});

// 再生停止ボタン
stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.classList.remove('paused');
  audioPlayer.classList.remove('playing');
});

// 進行状況バーの更新
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

// クイズボタンのクリックイベント
quizButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // 正解か不正解かを判定
    const isCorrect = button.dataset.correct === 'true';

    // 全ボタンのクラスリセット
    quizButtons.forEach((btn) => (btn.className = 'quiz-btn'));

    // ボタンにクラス追加
    button.classList.add(isCorrect ? 'correct' : 'incorrect');

    // iframe 表示をトグル
    iframeContainer.style.display = 'block';
  });
});
