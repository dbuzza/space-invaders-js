import Enemies from "../models/enemies.js";
import Player from "../models/player.js";

class Game {
    canvas;
    punteggio;
    vita;
    ctx;
    audioBackground; // Aggiungiamo una proprietà per l'audio di background
    constructor(c,p,v,a){
        this.canvas=c;
        this.punteggio=p;
        this.vita=v;
        this.ctx=this.canvas.getContext('2d');
        this.audioBackground = a;
    }

    centerCanvas() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        const offsetX = (windowWidth - canvasWidth) / 2;
        const offsetY = (windowHeight - canvasHeight) / 2;

        this.canvas.style.left = offsetX + 'px';
        this.canvas.style.top = offsetY + 'px';
    }


    init(){
        this.canvas.width = 400;
        this.canvas.height = 600;
        this.canvas.style.left=((window.innerWidth-this.canvas.width)/2)+ 'px'
        this.canvas.style.top=((window.innerHeight-this.canvas.height)/2)+ 'px'
        this.canvas.style.backgroundColor="black";
        this.canvas.style.backgroundSize = "contain";
        this.player=new Player("../assets/img/player.png",180,560,60,30,7,500);
        this.enemies=[];
        this.stopgioco=false;
        this.audiocounter=false;
        let tempx=20;
        let tempy=30;
        for (var i = 0; i < 8; i++) {
            this.enemies[i] = [];
            for (var j = 0; j < 7; j++) {
                let img_src;
                if(i<2){
                    img_src="../assets/img/enemy_blue.png";
                } else{
                    if(i<4){
                        img_src="../assets/img/enemy_green.png";
                    } else{
                        if(i<6){
                            img_src="../assets/img/enemy_red.png";
                        } else{
                            img_src="../assets/img/enemy_yellow.png";
                        }
                    }
                }
                this.enemies[i][j] = new Enemies(img_src,tempx,tempy,40,32,20,500);
                tempx+=50;
            }
            tempx=20;
            tempy+=50;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (!this.stopgioco) {
            this.player.draw(this.ctx);
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 7; j++) {
                    this.enemies[i][j].draw(this.ctx);
                }
            }
        } else {
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            let audio_src="../assets/sound/";
            if (this.player.health <= 0) {
                audio_src+="fail.wav";
                this.ctx.fillText("HAI PERSO, MECCANICO", this.canvas.width / 2, this.canvas.height / 2);
            } else {
                audio_src+="win.wav"
                this.ctx.fillText("HAI VINTO", this.canvas.width / 2, this.canvas.height / 2);
            }
            if(!this.audiocounter){
                let audio=new Audio(audio_src);
                audio.play();
                this.audiocounter=true;
            }
        }
    }

    update(){
        if(!this.stopgioco){
            this.player.update();
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 7; j++) {
                    this.enemies[i][j].update();
                    if(this.player.collisioniBullets(this.enemies[i][j])==true){
                        this.player.score+=10;
                        this.enemies[i][j].active=false;
                        this.enemies[i][j].pos.set(-50,-50);
                    }
                    if(this.enemies[i][j].collisioniBullets(this.player)==true){
                        this.player.health-=10;
                    }
                }
            }
                if(this.player.health<=0||this.allEnemiesDied()){
                    this.stopgioco=true;
                    this.audioBackground.pause();
                }
            let stringa="Punteggio: "+this.player.score.toString();
            this.punteggio.textContent=stringa;
            stringa="Vita: "+this.player.health.toString();
            this.vita.textContent=stringa;

            
            
        }
    }

    allEnemiesDied(){
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 7; j++) {
                let controllo=this.enemies[i][j].active;
                if(controllo){
                    return false;
                }
            }
        }
        return true;
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
            break;
        }
    }
}

export default Game;
