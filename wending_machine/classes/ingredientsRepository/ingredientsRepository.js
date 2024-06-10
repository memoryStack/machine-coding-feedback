class IngredientsRepository {
    #ingredients
    constructor() {
        this.#ingredients = {}
    }

    findIngredientByName(name) {
        return this.#ingredients[name] || null
    }

    addIngredient(ingredient) {
        this.#ingredients[ingredient.getName()] = ingredient
    }

}

module.exports = { IngredientsRepository }
