import { Game } from "./classes/game/game.js"
import { takeInput } from "./terminalInput.js"

const [close, input] = takeInput()

const game = new Game(input)

function onInputComplete() {
    close()
    game.simulateGame()
}

game.takeInput(onInputComplete)
