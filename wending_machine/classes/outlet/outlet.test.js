const { Ingredients } = require("../ingredients/ingredients");
const { IngredientsRepository } = require("../ingredientsRepository/ingredientsRepository");
const { Outlet } = require("./outlet")
const { Beverage } = require("../beverage/beverage")

describe('Outlet', () => {
    const outlet = new Outlet(1)

    test('prepares beverage if all the ingredients are present', () => {
        const ingredientsRepository = new IngredientsRepository()
        ingredientsRepository.addIngredient(new Ingredients('milk', 100))
        const bevIngredients = {milk: 50}
        const beverage = new Beverage('hot milk', bevIngredients)
        
        const beveragePreparationResult = outlet.getBeverage(beverage, ingredientsRepository)
        expect(beveragePreparationResult).toBe("hot milk is prepared")
    })

    test('tells if beverage can not be prepared', () => {
        const ingredientsRepository = new IngredientsRepository()
        ingredientsRepository.addIngredient(new Ingredients('milk', 100))
        ingredientsRepository.addIngredient(new Ingredients('tea', 50))
        const beverage = new Beverage('hot milk', {milk: 120})
        
        const beveragePreparationResult = outlet.getBeverage(beverage, ingredientsRepository)
        expect(beveragePreparationResult).toBe("hot milk cannot be prepared because item milk is not sufficient")
    })

})
