const {ExpenseStrategy} = require('../expenseStrategy')

class PercentDistribution extends ExpenseStrategy {
    #expensePayer
    #usersAndTheirShare
    #amount
    constructor(expensePayer, usersAndTheirShare, amount) {
        super();
        this.#expensePayer = expensePayer
        this.#usersAndTheirShare = usersAndTheirShare
        this.#amount = amount
    }

    getExpenseDistribution() {
        const totalShare = 100
        return {
            payee: this.#expensePayer,
            payers: Object.keys(this.#usersAndTheirShare).reduce((acc, userId) => {
                if (userId !== this.#expensePayer) {
                    const currentUserAmount = Number((this.#usersAndTheirShare[userId] / totalShare) * this.#amount)
                    acc[userId] = currentUserAmount
                }
                return acc
            }, {})
        }
    }
}

module.exports = { PercentDistribution }
