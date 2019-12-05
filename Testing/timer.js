document.body.onload = function () {
  timerDiv = document.getElementById("countdown");
  startBtn = document.getElementById("startBtn");
  stopBtn = document.getElementById("stopBtn");
  resetBtn = document.getElementById("resetBtn");

};

function startTimer(d) {
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
      var audio = new Audio('allarm.mp3');
      audio.play();
    }
  }, 1000);
}

function stopTimer(d) {
  clearInterval(downloadTimer);
  startBtn.innerHTML = "Fortsett";
  startBtn.setAttribute("onclick", "resumeTimer()");
}

function resetTimer() {
  timerDiv.innerHTML = "25";
  clearInterval(downloadTimer);
  startBtn.innerHTML = "Start";
  startBtn.setAttribute("onclick", "startTimer()");
}

function resumeTimer() {
  startBtn.innerHTML = "Start";
  startBtn.setAttribute("onclick", "");
  startTimer();
}