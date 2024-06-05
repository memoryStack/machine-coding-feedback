class Dice {
    #maxNumber
    
    constructor() {
        this.#maxNumber = 6;    
    }

    roll() {
        return Math.floor(Math.random() * this.#maxNumber) + 1;
    }

}

export { Dice }
