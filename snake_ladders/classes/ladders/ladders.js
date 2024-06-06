class Ladders {
    #laddersLayout
    constructor(laddersLayout) {
        this.#laddersLayout = laddersLayout || []
    }

    getPositionAfterLadderCheck(position) {
        const {end: finalPosition} = this.#laddersLayout.find(({start}) => {
            return start === position;
        }) || {}
        return finalPosition || position;
    }
}

module.exports = { Ladders }
