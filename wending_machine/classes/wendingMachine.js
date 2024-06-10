const { Outlet } = require('./outlet/outlet')
const { IngredientsRepository } = require('./ingredientsRepository/ingredientsRepository')
const { Ingredients } = require('./ingredients/ingredients')
const { BeverageRepo } = require('./beverageRepo')
const { Beverage } = require('./beverage/beverage')

class WendingMachine {
    #outletsCount
    #outlets
    #ingredientRepo
    #bevRepo
    #bevNames
    constructor(outletsCount, ingredients, beverages) {
        this.#outletsCount = outletsCount

        this.#outlets = []
        this.#bevNames = []
        this.#ingredientRepo = new IngredientsRepository()
        this.#bevRepo = new BeverageRepo()

        this.initialiseOutlets()
        this.initializeIngredients(ingredients)
        this.initializeBeverages(beverages)
    }

    initialiseOutlets() {
        for (let i=1;i<=this.#outletsCount;i++) {
            this.#outlets.push(new Outlet(i))
        }
    }

    initializeIngredients(ingredients) {
        Object.keys(ingredients).forEach((name) => {
            const ingredient = new Ingredients(name, ingredients[name])
            this.#ingredientRepo.addIngredient(ingredient)
        })
    }

    initializeBeverages(bevs) {
        Object.keys(bevs).forEach((name) => {
            const bev = new Beverage(name, bevs[name])
            this.#bevNames.push(name)
            this.#bevRepo.addBeverage(bev)
        })
    }

    startServing() {
        let noBevServable = false;
        while (!noBevServable) {
            noBevServable = true
            let outletNum = 0
            this.#bevNames.forEach((name) => {
                const bevResult = this.#outlets[outletNum].getBeverage(
                    this.#bevRepo.findBeverageByName(name),
                    this.#ingredientRepo
                )
                if (noBevServable) {
                    noBevServable = !bevResult.includes('is prepared')
                }
                outletNum++
                outletNum %= this.#outletsCount
                console.log(bevResult)
            })
        }
    }
}

module.exports = { WendingMachine }
