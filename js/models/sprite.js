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

    collisione(altro) {
        if(altro.active=true){
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
    

}
export default Sprite