$(document).ready(function () {
  const $audio = $('#audio');
  const $playPauseBtn = $('.play-pause-btn');
  const $audioPlayer = $('.audio-player');
  const $stopBtn = $('.stop-btn');
  const $progressBar = $('.audio-player .progress-bar');
  const $iframeContainer = $('#iframeContainer');
  const $quizButtons = $('.quiz-btn');

  // オーディオ再生/一時停止
  $playPauseBtn.on('click', function () {
    if ($audio[0].paused) {
      $audio[0].play();
      $playPauseBtn.addClass('paused');
      $audioPlayer.addClass('playing');
    } else {
      $audio[0].pause();
      $playPauseBtn.removeClass('paused');
      $audioPlayer.removeClass('playing');
    }
  });

  // 再生終了時の状態リセット
  $audio.on('ended', function () {
    $playPauseBtn.removeClass('paused');
    $audioPlayer.removeClass('playing');
  });

  // 再生停止ボタン
  $stopBtn.on('click', function () {
    $audio[0].pause();
    $audio[0].currentTime = 0;
    $playPauseBtn.removeClass('paused');
    $audioPlayer.removeClass('playing');
  });

  // 進行状況バーの更新
  $audio.on('timeupdate', function () {
    const progress = ($audio[0].currentTime / $audio[0].duration) * 100;
    $progressBar.css('width', `${progress}%`);
  });

  // クイズボタンのクリックイベント
  $quizButtons.on('click', function () {
    const $button = $(this);
    const isCorrect = $button.data('correct') === true;

    // 全ボタンのクラスリセット
    $quizButtons.removeClass('correct incorrect');

    // ボタンにクラス追加
    $button.addClass(isCorrect ? 'correct' : 'incorrect');

    // iframe 表示をトグル
    $iframeContainer.show();
  });
});
