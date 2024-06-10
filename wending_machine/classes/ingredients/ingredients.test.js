import { Ingredients } from './ingredients'

describe('Ingredients', () => {
    
    test('returns null if quantity is not available', () => {
        const water = new Ingredients('water', 100);
        expect(water.getQuantity(200)).toBe(null)
    })

    test('returns requested quantity if quantity is available and available quantity will decrease', () => {
        const water = new Ingredients('water', 100);
        expect(water.getQuantity(40)).toBe(40)
        expect(water.getCurrentQuantity()).toBe(60)
    })

    test('fill will fill the container by the quantity', () => {
        const water = new Ingredients('water', 100);
        water.fill(20)
        expect(water.getCurrentQuantity()).toBe(120)
    })

})
