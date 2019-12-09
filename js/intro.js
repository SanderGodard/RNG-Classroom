game = document.getElementById("game");
game.style.display = "none";
introMusic = document.getElementById("introSound");
introMusic.currentTime = 32;
introMusic.play();


function playIntro() {
    console.log("mordi");
}
playIntro();

function playGame() {
    var intro = document.getElementById("intro");
    intro.style.display = "none";
    game.style.display = "block";
    introMusic.pause();
}

setTimeout(function () {
    playGame();
}, 3000);