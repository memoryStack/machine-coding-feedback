class Player {
    #name
    #position
    constructor(name) {
        this.#name = name || ''
        this.#position = 0
    }

    getName() {
        return this.#name
    }

    getPosition() {
        return this.#position
    }

    setPosition(newPosition) {
        this.#position = newPosition
    }

    play(dice, gameRules) {
        const stepsToMove = dice.roll()
        this.setPosition(gameRules.getNextPosition(this.#position, stepsToMove))
    }

}

export { Player }
