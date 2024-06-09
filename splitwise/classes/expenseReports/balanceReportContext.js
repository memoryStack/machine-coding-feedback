class BalanceReportContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    getBalanceReport() {
        this.strategy.getBalanceReport()
    }
}

modules.exports = { BalanceReportContext }
