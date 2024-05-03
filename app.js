import Game from "./js/game.js"
let canvas=document.getElementById("canvas");
let punteggio=document.getElementById("punteggio")
let g=new Game(canvas,punteggio);
g.init();
function runGame( ) {

    g.update();
    g.draw();
    requestAnimationFrame(runGame);
}
window.onload = runGame;




function keyDownHandler(event) {
    g.keyboardPressedHandler(event.key.toLowerCase());    
}
function keyUpHandler(event) {
    g.keyboardReleasedHandler(event.key.toLowerCase());
}
window.addEventListener("keydown", keyDownHandler);
//window.addEventListener("keyup", keyUpHandler);
