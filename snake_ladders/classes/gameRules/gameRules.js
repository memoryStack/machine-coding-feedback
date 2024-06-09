class GameRules {
    #snakes
    #ladders
    #players
    // TODO: input here data which helps constructing the GameRules
    constructor(players, snakes, ladders) {
        this.#snakes = snakes
        this.#ladders = ladders
        this.#players = players
    }

    getNextPosition(currentPosition, stepsToMove) {
        let finalPos = currentPosition + stepsToMove
        if (finalPos > 100) return currentPosition
        finalPos = this.#snakes.getPositionAfterSnakeBiteCheck(finalPos)
        finalPos = this.#ladders.getPositionAfterLadderCheck(finalPos)
        return finalPos
    }

    // TODO: pass the player which moved the last
    getWinnerPlayer() {
        return this.#players.find(player => {
            return player.getPosition() === 100
        })
    }
}

module.exports = {
    GameRules
}
