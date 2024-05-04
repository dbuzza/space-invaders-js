import Vector2D from "./vector2d.js"

class Sprite{

    constructor(img_src,x,y,width,height,velocity,fireRate){
        this.pos=new Vector2D(x,y);
        this.dimension=new Vector2D(width,height);
        this.img=new Image();
        this.img.src=img_src;
        this.active=true;
        this.score=0;
        this.health=100;
        this.velocity=velocity;
        this.bullets = [];
        this.fireRate = fireRate;
        this.lastShotTime = 0;
    }

    update(){
        if(this.active==true){
            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].pos.d2 -= this.bullets[i].velocity;
            }
        }
        
    }

    draw(ctx){
        if(this.active==true){
            ctx.drawImage(this.img,this.pos.d1,this.pos.d2);
            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].draw(ctx);
            }
        }
    }

    movedx(){
        this.pos.d1+=this.velocity
    }
    movesx(){
        this.pos.d1-=this.velocity
    }

    collisione(altro) {
        if(altro.active==true){
            const x1 = this.pos.d1;
            const y1 = this.pos.d2;

            const w1 = this.dimension.d1;
            const h1 = this.dimension.d2;

            const x2 = altro.pos.d1;
            const y2 = altro.pos.d2;

            const w2 = altro.dimension.d1;
            const h2 = altro.dimension.d2;
        
            if (
                x1 < x2 + w2 &&
                x1 + w1 > x2 &&
                y1 < y2 + h2 &&
                y1 + h1 > y2
            ) {
                return true;
            }
        }
        return false;
    }

    canShoot() {
        return Date.now() - this.lastShotTime > this.fireRate;
     }
 
     shoot() {
         if (this.canShoot()) {
             let bullet = new Sprite("../assets/img/bullet.png", this.pos.d1 + (this.dimension.d1 / 2) - 3, this.pos.d2 - 10, 6, 18, 3);
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
export default Sprite