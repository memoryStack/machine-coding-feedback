import { Ladders } from "./ladders";

describe('', () => {
    const laddersLayout = [
        {start: 20, end: 80},
        {start: 80, end: 97},
        {start: 14, end: 67},
    ]
    const ladders = new Ladders(laddersLayout);
    test('gets final position after checking snake bite', () => {        
        expect(ladders.getPositionAfterLadderCheck(10)).toBe(10);
        expect(ladders.getPositionAfterLadderCheck(80)).toBe(97);
    })
})
