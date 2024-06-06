const { Dice } = require("../dice/dice")
const { GameRules } = require("../gameRules/gameRules")
const { Ladders } = require("../ladders/ladders")
const { Player } = require("../player/player")
const { Snakes } = require("../snakes/snakes")

class Game {
    #snakes
    #ladders
    #players
    #dice
    #gameRules
    #input
    constructor(input) {
        this.#snakes = null
        this.#ladders = null
        this.#players = []
        this.#dice = new Dice()
        this.#gameRules = null
        this.#input = input
    }

    async takeInput(onInputComplete) {
        await this.takeSnakesInput()
        await this.takeLaddersInput()
        await this.takePlayersInput()
        this.#gameRules = new GameRules(this.#players, this.#snakes, this.#ladders)
        
        onInputComplete()
    }

    async takeSnakesInput() {
        let numberOfSnakes = await this.#input()
        const snakes = []
        while (numberOfSnakes--) {
            const headPosition = await this.#input()
            const tailPosition = await this.#input()
            snakes.push({ start: headPosition, end: tailPosition })
        }
        this.#snakes = new Snakes(snakes)
    }

    async takeLaddersInput() {
        let numberOfLadders = await this.#input()
        const ladders = []
        while (numberOfLadders--) {
            const topPosition = await this.#input()
            const bottomPosition = await this.#input()
            ladders.push({ start: topPosition, end: bottomPosition })
        }
        this.#ladders = new Ladders(ladders)
    }

    async takePlayersInput() {
        let numberOfPlayers = await this.#input()
        while (numberOfPlayers--) {
            const playerName = await this.#input()
            this.#players.push(new Player(playerName))
        }
    }

    simulateGame() {
        let playerTurn = 0
        while (!this.#gameRules.getWinnerPlayer()) {
            const player = this.#players[playerTurn]
            const moveDetails = player.play(this.#dice, this.#gameRules)
            console.log(`${player.getName()} rolled a ${moveDetails.diceRollValue} and moved from ${moveDetails.initialPosition} to ${moveDetails.finalPosition}`)
            playerTurn = (playerTurn + 1) % this.#players.length
        }
        const winnerPlayer = this.#gameRules.getWinnerPlayer()
        console.log(`${winnerPlayer.getName()} wins the game`)
    }
}

module.exports = { Game }
