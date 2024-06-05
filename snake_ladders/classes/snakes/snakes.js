class Snakes {
    #snakesLayout
    constructor(snakesLayout) {
        this.#snakesLayout = snakesLayout || []
    }

    snakeBites(playerPosition) {
        return this.#snakesLayout.some(({start}) => {
            return start === playerPosition;
        })
    }

    getPositionAfterSnakeBiteCheck(position) {
        if (this.snakeBites(position)) {
            const {end: finalPosition} = this.#snakesLayout.find(({start}) => {
                return start === position;
            })
            return finalPosition;
        }
        return position;
    }
}

export { Snakes }
