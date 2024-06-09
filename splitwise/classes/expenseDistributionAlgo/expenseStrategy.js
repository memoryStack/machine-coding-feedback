class ExpenseStrategy {
    constructor() {
        if (new.target === ExpenseStrategy) {
            throw new TypeError("Cannot construct ExpenseStrategy instances directly");
        }
    }

    getExpenseDistribution() {
        /*
            must return data like 
            {
                payee: 'userId',  // this user will actually get the money
                payers: {
                    'userId': 100 // these users will pay to payee
                       .
                       .
                }
            }
        */
        throw new Error("Must override method");
    }
}

module.exports = { ExpenseStrategy }
