class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor((this.max + this.min) / 2) + 1;
    }

    lower() {
        this.max = Math.floor((this.max + this.min) / 2);
    }

    greater() {
        this.min = Math.floor((this.max + this.min) / 2) + 1;
    }
}

module.exports = GuessingGame;
