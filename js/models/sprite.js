import Vector2D from "./vector2d.js"

class Sprite{

    constructor(img_src,x,y,width,height,color,velocity){
        this.pos=new Vector2D(x,y);
        this.dimension=new Vector2D(width,height);
        this.img=new Image();
        this.img.src=img_src;
        this.color=color //TODO: da rimuovere
        this.active=true;
        this.score=0;
        this.health=100;
        this.velocity=velocity;
    }

    update(){
        this.active=this.health>0;
        
    }

    draw(ctx){
        if(this.active){
            ctx.fillStyle=this.color;
            ctx.fillRect(this.pos.d1, this.pos.d2, this.dimension.d1, this.dimension.d2);
        }
    }

    movedx(max){
        if(this.pos.d1<=(max-this.dimension.d1)){
            this.pos.d1+=this.velocity
        }
    }
    movesx(){
        if(this.pos.d1>0){
            this.pos.d1-=this.velocity
        }
    }

}
export default Sprite