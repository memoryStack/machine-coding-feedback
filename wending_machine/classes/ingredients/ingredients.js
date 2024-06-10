class Ingredients {
    #name
    #quantity
    #fullCapacity
    #status
    #minValueForLowIndicator
    constructor(name, quantity = 0, minValueForLowIndicator = 0) {
        this.#name = name
        this.#quantity = quantity
        this.#fullCapacity = 1000
        this.#minValueForLowIndicator = minValueForLowIndicator
    }

    getName() {
        return this.#name
    }

    getCurrentQuantity() {
        return this.#quantity
    }

    fill(val = this.#fullCapacity) {
        this.#quantity = Math.min(val + this.#quantity, this.#fullCapacity)
        this.checkLowStatus()
    }

    getQuantity(val) {
        if (val > this.#quantity) return null
        this.#quantity -= val
        this.checkLowStatus()
        return val
    }

    checkLowStatus() {
        this.#status = this.isLow() ? 'low' : 'safe'
    }

    getStatus() {
        return this.#status
    }

    isLow() {
        return this.#quantity < this.#minValueForLowIndicator
    }
}

module.exports = { Ingredients }
