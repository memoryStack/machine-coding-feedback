import { Dice } from "./dice";

describe('Dice', () => {
    const dice = new Dice();
    test('number will be between 1 and 6', () => {
        const num = dice.roll();
        expect(num <= 6).toBe(true);
        expect(num >= 1).toBe(true);
    })
})
