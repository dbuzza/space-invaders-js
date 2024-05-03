class Clock {
    freq;
    elapsed;

    constructor(freq) {
        this.freq = freq;
        this.elapsed = 0;
    }

    update() {
        this.elapsed += 1000 / 30;
    }

    tick() {
        let t = false;
        if (this.elapsed > this.freq) {
            t = true;
            this.elapsed = 0;
        }
        return t;
    }
    reset(freq){
        this.freq=freq;
        this.elapsed=0;
    }
}

export default Clock;