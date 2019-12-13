footer = document.getElementsByClassName("modesP")[0];
game = document.getElementById("game");
introMusic = document.getElementById("introSound");
intro = document.getElementById("intro");

console.log("på starten: " + sessionStorage.getItem("playIntro"));

if (sessionStorage.getItem("playIntro") !== "false") {
    game.style.display = "none";
    footer.style.display = "none";
    introMusic.currentTime = 32;
    introMusic.volume = 0.05;
    introMusic.play();
    pause = true;
    sessionStorage.setItem("playIntro", true);

    setTimeout(function () {
        playGame();
    }, 3000);
} else {
    playGame();
}



function playGame() {
    intro.style.display = "none";
    footer.style.display = "block";
    game.style.display = "flex";
    introMusic.pause();
}


document.onkeyup = function (e) {

    console.log(e.keyCode);
    if (e.keyCode == 80 && e.target == document.body) {
        //p
        if (pause) {
            intro.style.display = "flex";
            game.style.display = "none";
            footer.style.display = "none";
            pauseMusic = new Audio("elements/elevator.mp3");
            pauseMusic.loop = true;
            pauseMusic.volume = 0.1;
            pauseMusic.play();
            pause = false;
        } else {
            pauseMusic.pause();
            pause = true;
            playGame();
        }
    } else if (e.keyCode == 73 && e.target == document.body) {
        //i for å toggle intro
        if (sessionStorage.getItem("playIntro") == "true") {
            sessionStorage.setItem("playIntro", "false");
            alert("Spiller ikke intro");
        } else {
            sessionStorage.setItem("playIntro", "true");
            alert("Spiller intro");
        }
    }
}

alertDiv = document.createElement("div");

function alert(text) {
    alertDiv.style = "position: absolute; display: block; margin-left: 50%; padding: 10px; border: solid 1px black; top: 0px;"
    alertDiv.innerHTML = text;
    setTimeout(function () {
        alertDiv.remove();
    }, 3000);
    document.body.appendChild(alertDiv);
}