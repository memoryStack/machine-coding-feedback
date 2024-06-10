class BalanceReportContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    getBalanceReport(userIds, balances, usersRepository) {
        return this.strategy.getBalanceReport(userIds, balances, usersRepository)
    }
}

module.exports = { BalanceReportContext }
