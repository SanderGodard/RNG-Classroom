game = document.getElementById("game");
game.style.display = "none";




function playIntro() {
    console.log("mordi");
}
playIntro();

function playGame() {
    var intro = document.getElementById("intro");
    intro.style.display = "none";
    game.style.display = "flex";
}

setTimeout(function () {
    playGame();
}, 3000);
