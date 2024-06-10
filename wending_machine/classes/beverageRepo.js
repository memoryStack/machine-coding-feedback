class BeverageRepo {
    #beverages
    constructor() {
        this.#beverages = {}
    }

    findBeverageByName(name) {
        return this.#beverages[name] || null
    }

    addBeverage(bev) {
        this.#beverages[bev.getName()] = bev
    }
}

module.exports = { BeverageRepo }
