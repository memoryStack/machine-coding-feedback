import { Ladders } from "../ladders/ladders";
import { Player } from "../player/player";
import { Snakes } from "../snakes/snakes";
import { GameRules } from "./gameRules";

function getPlayers() {
    return [
        new Player('abc'),
        new Player('drf'),
    ]
}

describe('GameRules', () => {
    const laddersLayout = [
        {start: 21, end: 80},
        {start: 80, end: 97},
        {start: 14, end: 67},
    ]
    const snakesLayout = [
        {start: 20, end: 3},
        {start: 80, end: 67},
        {start: 90, end: 45},
    ]
    const ladders = new Ladders(laddersLayout)
    const snakes = new Snakes(snakesLayout)
    const players = getPlayers()
    const gameRules = new GameRules(players, snakes, ladders)

    describe('getNextPosition()', () => {
        test('when there is no snake or ladder at the final position, simply add the steps', () => {        
            const finalPosition = gameRules.getNextPosition(10, 2)
            expect(finalPosition).toBe(12)
        })

        test('dont move if can not reach to 100th step in 1 move', () => {
            expect(gameRules.getNextPosition(95, 6)).toBe(95)
            expect(gameRules.getNextPosition(99, 2)).toBe(99)
        })

        test('move if can reach to 100th step in 1 move', () => {
            expect(gameRules.getNextPosition(95, 5)).toBe(100)
            expect(gameRules.getNextPosition(94, 6)).toBe(100)
        })

        test('final position will be the tail of snake which will be faced after taking n steps', () => {
            expect(gameRules.getNextPosition(14, 6)).toBe(3)
            expect(gameRules.getNextPosition(78, 2)).toBe(67)
        })  
        
        test('final position will be the top of ladder which will come after taking n steps', () => {
            expect(gameRules.getNextPosition(12, 2)).toBe(67)
        })
    })

    describe('getWinnerPlayer()', () => {
        test('returns falsy value if no winner is found', () => {        
            const winnerPlayer = gameRules.getWinnerPlayer()
            expect(winnerPlayer).toBeUndefined()
        })

        test('returns winner player', () => {        
            players[0].setPosition(100)
            const winnerPlayer = gameRules.getWinnerPlayer()
            expect(winnerPlayer.getName()).toBe('abc')
        })
    })
})
