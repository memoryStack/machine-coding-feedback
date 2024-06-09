class Balance {
    #balances

    /*
        balances structure
            u1: {
                u2: 250,
                  .
                  .
                  .
            }
        it means that user1 will pay user2 250 rupees
    */

    constructor() {
        this.#balances = {}
    }

    getAmountToBePaid(payer, payee) {
        if (this.#balances[payer] === undefined) return 0;
        if (this.#balances[payer][payee] === undefined) return 0;
        return this.#balances[payer][payee]
    }

    getBalances(payer, payee) {
        const payerTillPay = this.getAmountToBePaid(payer, payee)
        const payerTillGet = this.getAmountToBePaid(payee, payer)
        return payerTillPay - payerTillGet
    }

    addBalances(lastExpense) {
        const payee = lastExpense.payee
        const payers = Object.keys(lastExpense.payers)
        payers.forEach((payer) => {
            if (this.#balances[payer] === undefined) this.#balances[payer] = {}
            if (this.#balances[payer][payee] === undefined) this.#balances[payer][payee] = 0
            this.#balances[payer][payee] += lastExpense.payers[payer]
        })
    }
}

module.exports = { Balance }
