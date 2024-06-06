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
        const finalPosition = gameRules.getNextPosition(this.#position, stepsToMove)
        const moveDetails = {
            diceRollValue: stepsToMove,
            initialPosition: this.getPosition(),
            finalPosition
        }
        this.setPosition(finalPosition)
        return moveDetails
    }
}

module.exports = { Player }
