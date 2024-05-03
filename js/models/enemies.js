import Sprite from "./sprite.js";
import Clock from "./clock.js";

class Enemies extends Sprite{

    constructor(img_src,x,y,width,height,color,velocity){
        super(img_src,x,y,width,height,color,velocity);
        this.clock=new Clock(2000);
        this.xIniziale=x;
        this.direzione=0;
    }

    update(){
        super.update();
        this.clock.update();
        
        if(this.clock.tick()){
            if(this.direzione==0){
                this.pos.d1+=this.velocity;
                this.direzione+=1;
            }
            else{
                this.pos.d1-=this.velocity;
                this.direzione-=1;
            }
            this.clock=new Clock(2000);
        }
        
    }
    draw(ctx){
        super.draw(ctx);
    }

}
export default Enemies;