class Outlet {
    #num
    constructor(num) {
        this.#num = num
    }

    getNum() {
        return this.#num
    }

    // should i make another class like ingredientsManager and put this there ??
    getInsufficientIngredientsForBeverage(beverage, ingredientsRepository) {
        const beverageIngredients = beverage.getIngredients()
        return beverageIngredients.filter((_ing) => {
            const ing = ingredientsRepository.findIngredientByName(_ing)
            const quantityNeeded = beverage.getIngredientQuantityNeeded(_ing)
            return ing ? ing.getQuantity(quantityNeeded) === null : false
        })
    }

    getBeverage(beverage, ingredientsRepository) {
        const insufficientIngredients = this.getInsufficientIngredientsForBeverage(beverage, ingredientsRepository)
        if (!insufficientIngredients.length) {
            return `${beverage.getName()} is prepared`
        } else {
            const ing = ingredientsRepository.findIngredientByName(insufficientIngredients[0])
            if (ing.getCurrentQuantity() === 0) {
                return `${beverage.getName()} cannot be prepared because ${ing.getName()} is not available`
            } else {
                return `${beverage.getName()} cannot be prepared because item ${ing.getName()} is not sufficient`
            }
        }
    }
}

module.exports = { Outlet }
