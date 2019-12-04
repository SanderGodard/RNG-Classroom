var timeleft = 10;

function startTimer(d){
setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " til du må svare";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);
}

function stopTimer(d){
    
}