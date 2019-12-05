  timerDiv = document.getElementById("countdown");
  startBtn = document.getElementById("startBtn");
  stopBtn = document.getElementById("stopBtn");
  resetBtn = document.getElementById("resetBtn");
  audioTrivia = new Audio('trivia.mp3');

  function startTimer(x) {
    if (x == "new") {
      timerDiv.innerHTML = 25;
    }
    audioTrivia.play();
    startBtn.setAttribute("onclick", "");
    timeLeft = timerDiv.innerHTML;
    if (timeLeft == "Ferdig") {
      timeLeft = 25;
    } else if (timeLeft == "") {
      timeLeft = 25;
    }
    downloadTimer = setInterval(function () {
      timeLeft -= 1;
      timerDiv.innerHTML = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Ferdig";
        var audio = new Audio('alarm.mp3');
        audio.play();
        audioTrivia.pause();
        audioTrivia.currentTime = 0;
        startBtn.setAttribute("onclick", "startTimer('new')")
      }
    }, 1000);
  }

  function stopTimer(d) {
    clearInterval(downloadTimer);
    startBtn.innerHTML = "Fortsett";
    startBtn.setAttribute("onclick", "resumeTimer()");
    audioTrivia.pause();
  }

  function resetTimer() {
    timerDiv.innerHTML = "25";
    clearInterval(downloadTimer);
    startBtn.innerHTML = "Start";
    startBtn.setAttribute("onclick", "startTimer()");
    audioTrivia.pause();
    audioTrivia.currentTime = 0;
  }

  function resumeTimer() {
    startBtn.innerHTML = "Start";
    startBtn.setAttribute("onclick", "");
    startTimer();
    audioTrivia.play();
  }