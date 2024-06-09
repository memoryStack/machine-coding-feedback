class BalanceReportStrategy {
    constructor() {
        if (new.target === BalanceReportStrategy) {
            throw new TypeError("Cannot construct BalanceReportStrategy instances directly");
        }
    }

    getBalanceReport(userIds, balances, usersRepository) {
        throw new Error("Must override method");
    }
}

module.exports = { BalanceReportStrategy }
