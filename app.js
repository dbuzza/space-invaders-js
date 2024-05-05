import Game from "./js/game.js";

let canvas = document.getElementById("canvas");
let punteggio = document.getElementById("punteggio");
let vita = document.getElementById("vita");
let audio = new Audio('../assets/sound/background.wav');

let g = new Game(canvas, punteggio, vita, audio);
g.init();

function runGame() {
    g.update();
    g.draw();
    requestAnimationFrame(runGame);
}

runGame();

function keyDownHandler(event) {
    g.keyboardPressedHandler(event.key.toLowerCase());    
}

function keyUpHandler(event) {
    g.keyboardReleasedHandler(event.key.toLowerCase());
}

window.addEventListener("keydown", keyDownHandler);
window.addEventListener('load', () => {
    audio.loop=true;
    audio.play();
});
