import { takeInput } from "./terminalInput.js"
import { Splitwise } from './classes/splitwise.js'

const [close, input] = takeInput()

const splitwise = new Splitwise(input)

