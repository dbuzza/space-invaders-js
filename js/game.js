import Sprite from "./models/sprite.js";
import Enemies from "./models/enemies.js";
import Player from "./player.js";
class Game{
    canvas;
    punteggio;
    ctx;
    constructor(c,p){
        this.canvas=c;
        this.punteggio=p;
        this.ctx=canvas.getContext('2d');
    }
    init(){
        //this.canvas.style.position = 'absolute';
        this.canvas.width = 400;
        this.canvas.height = 600;
        this.canvas.style.backgroundColor="black";
        this.canvas.style.backgroundSize = "contain";
        this.player=new Player("",180,560,20,20,"red",7,500);
        this.enemies=[];
        let tempx=30;
        let tempy=30;
        for (var i = 0; i < 8; i++) {
            this.enemies[i] = [];
            for (var j = 0; j < 7; j++) {
                this.enemies[i][j] = new Enemies("",tempx,tempy,20,20,"blue",20);
                tempx+=50;
            }
            tempx=30;
            tempy+=50;
        }
    }

    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.player.draw(this.ctx);
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 7; j++) {
                this.enemies[i][j].draw(this.ctx);
            }
        }
    }

    update(){
        this.player.update();
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 7; j++) {
                this.enemies[i][j].update();
                if(this.player.collisioniBullets(this.enemies[i][j])==true){
                    this.player.score+=10;
                    this.enemies[i][j].active=false;
                }
            }
        }
        let stringa="Punteggio: "+this.player.score.toString();
        this.punteggio.textContent=stringa;

    }

    keyboardPressedHandler(key){
        switch(key){
            case 'd':
                this.player.movedx(this.canvas.width);
            break;
            case 'a':
                this.player.movesx();
            break;
            case ' ':
                this.player.shoot();
        }
    }
}
export default Game