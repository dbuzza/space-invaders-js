import Sprite from "./models/sprite.js";

class Player extends Sprite {
    constructor(img_src, x, y, width, height, color, velocity, fireRate) {
        super(img_src, x, y, width, height, color, velocity);
        this.bullets = [];
        this.fireRate = fireRate;
        this.lastShotTime = 0;
    }

    draw(ctx) {
        super.draw(ctx);
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].draw(ctx);
        }
    }

    update() {
        super.update();
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].pos.d2 -= this.bullets[i].velocity;
        }
    }

    canShoot() {
       return Date.now() - this.lastShotTime > this.fireRate;
    }

    shoot() {
        if (this.canShoot()) {
            let bullet = new Sprite("", this.pos.d1 + (this.dimension.d1 / 2) - 3, this.pos.d2 - 10, 6, 10, "white", 3);
            this.bullets.push(bullet);
            this.lastShotTime = Date.now();
        }
    }

    collisioniBullets(altro){
        let collisione=false;
        for (let i = 0; i < this.bullets.length; i++) {
            collisione=this.bullets[i].collisione(altro);
            if(collisione){
                this.bullets[i].active=false;
                this.bullets[i].pos.set(-1,-1);
                console.log("COLLISIONE")
                return true;
            }

        }
        return false;
    }
}

export default Player;
