game = document.getElementById("game");
game.style.display = "none";
footer = document.getElementsByClassName("modesP")[0];
footer.style.display = "none";
introMusic = document.getElementById("introSound");
introMusic.currentTime = 32;
introMusic.volume = 0.05;
introMusic.play();
intro = document.getElementById("intro");
pause = true;

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
});
//bare sånn at space ikke skal scrolle

function playGame() {
    intro.style.display = "none";
    footer.style.display = "block";
    game.style.display = "flex";
    introMusic.pause();
}

setTimeout(function () {
    playGame();
}, 3000);

document.onkeyup = function (e) {
    if (e.keyCode == 80 && e.target == document.body) {
        //sånn at man kan skrive "p" i input
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
    }
}