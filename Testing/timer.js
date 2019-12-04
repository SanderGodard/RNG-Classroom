
timerDiv = document.getElementById("countdown");
startBtn = document.getElementById("countdown");
stoBtn = document.getElementById("countdown");
resetBtn = document.getElementById("countdown");

function startTimer(d){
timeLeft = 25;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeLeft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);
}

function stopTimer(d){
    clearInterval(downloadTimer);
    startBtn.innerHTML = "Fortsett";
}

function resetTimer(){
    startBtn.innerHTML = "Start";
    timerDiv.innerHTML = "25 seconds remaining";

}