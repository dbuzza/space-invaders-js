import Sprite from "./models/sprite.js";

class Player extends Sprite {
    constructor(img_src, x, y, width, height, velocity, fireRate) {
        super(img_src, x, y, width, height, velocity,fireRate);
        
    }

    draw(ctx) {
        super.draw(ctx);
        
    }

    update() {
        super.update();
        
    }
    movedx(max){
        if(this.pos.d1<=(max-this.dimension.d1)){
            super.movedx();
        }
    }
    movesx(){
        if(this.pos.d1>0){
            this.pos.d1-=this.velocity
        }
    }

    
}

export default Player;
