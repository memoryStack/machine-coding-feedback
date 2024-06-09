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

    addExpense(expenseData = []) {
        // add the expense and update the expenses/balance
        
    }
}

module.exports = { User }
