import Game from "./logic/game.js";

let canvas = document.getElementById("canvas");
let punteggio = document.getElementById("punteggio");
let vita = document.getElementById("vita");
let audio = new Audio('../assets/sound/background.wav');
let btn=document.getElementById("btnGioco");
let g;

function initializeGame() {
    btn.style.visibility = "hidden";
    g = new Game(canvas, punteggio, vita, audio);
    g.init();
    runGame();
    audio.loop=true;
    audio.play();
    window.addEventListener("keydown", keyDownHandler);
}

function runGame() {
    g.update();
    g.draw();
    requestAnimationFrame(runGame);
}

function keyDownHandler(event) {
    g.keyboardPressedHandler(event.key.toLowerCase());    
}

btn.addEventListener("click", initializeGame);

