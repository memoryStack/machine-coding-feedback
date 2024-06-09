import { ExpenseStrategy } from './expenseStrategy'

class EqualDistribution extends ExpenseStrategy {
    #expensePayer
    #usersInvolved
    #amount
    constructor(expensePayer, usersInvolved, amount) {
        super();
        this.#expensePayer = expensePayer
        this.#usersInvolved = usersInvolved
        this.#amount = amount
    }

    getExpenseDistribution() {
        const usersInvolvedCount = this.#usersInvolved.length
        let amountPerHead = this.#amount / usersInvolvedCount
        amountPerHead = Number(amountPerHead.toFixed(2))
        return {
            payee: this.#expensePayer,
            payers: this.#usersInvolved.reduce((acc, userId) => {
                if (userId !== this.#expensePayer) acc[userId] = amountPerHead
                return acc
            }, {})
        }
    }
}

module.exports = { EqualDistribution }
