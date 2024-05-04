import Sprite from "./sprite.js";
import Clock from "./clock.js";

class Enemies extends Sprite{

    constructor(img_src,x,y,width,height,velocity,firerate){
        super(img_src,x,y,width,height,velocity,firerate);
        this.clock=new Clock(2000);
        this.xIniziale=x;
        this.direzione=0;
    }

    update(){
        if(this.active==true){
            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].pos.d2 += this.bullets[i].velocity;
            }
        
            this.clock.update();
            
            if(this.clock.tick()){
                this.clock=new Clock(2000);
                if(this.direzione==0){
                    this.movedx();
                    this.direzione+=1;
                }
                else{
                    this.movesx();
                    this.direzione-=1;
                }
                



                let numero=Math.floor(Math.random() * 20) + 1;
                if(numero==1){
                    this.shoot();
                }
            }
        }
        
    }
    draw(ctx){
        if(this.active==true)
            super.draw(ctx);
    }

    playShootSound(){
        this.audio.src="../../assets/sound/shoot_enemies.wav";
        this.audio.play();
     }

}
export default Enemies;