import { Snakes } from "./snakes";

describe('', () => {
    const snakesLayout = [
        {start: 20, end: 3},
        {start: 80, end: 67},
        {start: 90, end: 45},
    ]
    const snakes = new Snakes(snakesLayout);
    test('checks if a snake bites or not at a position', () => {        
        expect(snakes.snakeBites(100)).toBe(false);
        expect(snakes.snakeBites(80)).toBe(true);
    })

    test('gets final position after checking snake bite', () => {        
        expect(snakes.getPositionAfterSnakeBiteCheck(100)).toBe(100);
        expect(snakes.getPositionAfterSnakeBiteCheck(80)).toBe(67);
    })

})
