import { ExpenseStrategy } from '../expenseStrategy'

class ExactDistribution extends ExpenseStrategy {
    #expensePayer
    #usersAndTheirExpenses
    constructor(expensePayer, usersAndTheirExpenses) {
        super();
        this.#expensePayer = expensePayer
        this.#usersAndTheirExpenses = usersAndTheirExpenses
    }

    getExpenseDistribution() {
        const payers = {...this.#usersAndTheirExpenses}
        delete payers[this.#expensePayer]
        return {
            payee: this.#expensePayer,
            payers: payers
        }
    }
}

module.exports = { ExactDistribution }
