import { Player } from "./player";
import { Dice } from "../dice/dice";
import { Ladders } from "../ladders/ladders";
import { Snakes } from "../snakes/snakes";
import { GameRules } from "../gameRules/gameRules";

function getPlayers() {
    return [
        new Player('abc'),
        new Player('drf'),
    ]
}

describe('Player', () => {
    const player = new Player('abc');
    test('check the player name', () => {        
        expect(player.getName()).toBe('abc');
    })

    test('inital position should be zero', () => {        
        expect(player.getPosition()).toBe(0);
    })

    test('should be able to set the position of player', () => {        
        player.setPosition(90)
        expect(player.getPosition()).toBe(90);
    })

    describe('Player play its turn', () => {
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
        const dice = new Dice()
        const diceRoll = jest.spyOn(dice, 'roll').mockImplementation(() => 4)

        const player = players[0]

        test('plays a normal turn', () => {
            player.play(dice, gameRules)
            expect(player.getPosition()).toBe(4)
        })

        test('plays its turn and a snake bites at the position', () => {
            player.setPosition(16)
            player.play(dice, gameRules)
            expect(player.getPosition()).toBe(3)
        })
    })

})
