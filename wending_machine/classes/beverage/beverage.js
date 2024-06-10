class Beverage {
    #name
    #ingredientsQuantity
    #ingredients
    constructor(name, ingredientsQuantity) {
        this.#name = name
        this.#ingredientsQuantity = ingredientsQuantity
        this.#ingredients = Object.keys(ingredientsQuantity)
    }

    getName() {
        return this.#name
    }

    getIngredientsQuantity() {
        return this.#ingredientsQuantity
    }

    getIngredients() {
        return this.#ingredients
    }

    getIngredientQuantityNeeded(ingredient) {
        return this.#ingredientsQuantity[ingredient] || 0
    }
}

module.exports = { Beverage }
