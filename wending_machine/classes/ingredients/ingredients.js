class Ingredients {
    #name
    #quantity
    #fullCapacity
    constructor(name, quantity = 0) {
        this.#name = name
        this.#quantity = quantity
        this.#fullCapacity = 1000
    }

    getName() {
        return this.#name
    }

    getCurrentQuantity() {
        return this.#quantity
    }

    fill(val = this.#fullCapacity) {
        this.#quantity = Math.min(val + this.#quantity, this.#fullCapacity)
    }

    getQuantity(val) {
        if (val > this.#quantity) return null
        this.#quantity -= val
        return val
    }
}

module.exports = { Ingredients }
