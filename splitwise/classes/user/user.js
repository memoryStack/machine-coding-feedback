const { ExpenseContext } = require('../expenseDistributionAlgo/expenseAlgoContext')
const { EqualDistribution } = require('../expenseDistributionAlgo/equalDistribution/equalDistribution')
const { PercentDistribution } = require('../expenseDistributionAlgo/percentDistribution/percentDistribution')
const { ExactDistribution } = require('../expenseDistributionAlgo/exactStrategy/exactStrategy')

class User {
    #id
    #name
    #emailId
    #mobileNumber
    constructor(id, name, email, mobile) {
        this.#id = id
        this.#name = name || ''
        this.#emailId = email || ''
        this.#mobileNumber = mobile
    }

    getName() {
        return this.#name
    }

    getId() {
        return this.#id
    }

    getEmail() {
        return this.#emailId
    }

    getName() {
        return this.#name
    }

    getMobileNumber() {
        return this.#mobileNumber
    }

    addExpense(expenseCommand, balances) {
        // add the expense and update the expenses/balance
        const addExpenseContext = new ExpenseContext()
        const expensePayer = expenseCommand[1]
        const amountSpent = expenseCommand[2]
        const usersInvolvedCount = expenseCommand[3]
        if (expenseCommand.indexOf('PERCENT') !== -1) {
            const usersShare = {}
            let cnt = 0
            const percentValuesStart = expenseCommand.indexOf('PERCENT') + 1
            while(cnt < usersInvolvedCount) {
                const userId = expenseCommand[4 + cnt]
                usersShare[userId] = Number(expenseCommand[percentValuesStart + cnt])
                cnt++
            }
            addExpenseContext.setStrategy(new PercentDistribution(expensePayer, usersShare, amountSpent))
        } else if (expenseCommand.indexOf('EQUAL') !== -1) {
            const usersInvolved = []
            let cnt = 0
            while(cnt < usersInvolvedCount) {
                usersInvolved.push(expenseCommand[4 + cnt])
                cnt++
            }
            addExpenseContext.setStrategy(new EqualDistribution(expensePayer, usersInvolved, amountSpent))
        } else {
            const usersShare = {}
            let cnt = 0
            const percentValuesStart = expenseCommand.indexOf('EXACT') + 1
            while(cnt < usersInvolvedCount) {
                const userId = expenseCommand[4 + cnt]
                usersShare[userId] = Number(expenseCommand[percentValuesStart + cnt])
                cnt++
            }
            addExpenseContext.setStrategy(new ExactDistribution(expensePayer, usersShare, amountSpent))
        }

        balances.addBalances(addExpenseContext.getExpenseDistribution())
    }
}

module.exports = { User }
