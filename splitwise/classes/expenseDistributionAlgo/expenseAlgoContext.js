class ExpenseContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    getExpenseDistribution() {
        this.strategy.pay()
    }
}

modules.exports = { ExpenseContext }
