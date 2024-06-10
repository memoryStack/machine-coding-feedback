class ExpenseContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    getExpenseDistribution() {
        return this.strategy.getExpenseDistribution()
    }
}

module.exports = { ExpenseContext }
