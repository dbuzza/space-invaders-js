class Vector2D {
    d1;
    d2;

    constructor(x, y) {
        this.d1 = x;
        this.d2 = y;
    }

    set(x, y) {
        this.d1 = x;
        this.d2 = y;
    }
    
    add(vec) {
        this.d1 += vec.x;
        this.d2 += vec.y;
    }
}

export default Vector2D;