const { BalanceReportStrategy } = require('../balanceReportStrategy')
class AllUsersBalanceReport extends BalanceReportStrategy {
    constructor() {
        super();
    }

    getBalanceReport(userIds, balances, usersRepository) {
        const result = []

        for (let i=0;i<userIds.length;i++) {
            for (let j=0;j<userIds.length;j++) {
                if (i == j) continue;
                const payer = userIds[i]
                const payee = userIds[j]
                const moneyOwed = balances.getBalances(payer, payee)
                if (moneyOwed > 0) {
                    const payerUserName = usersRepository.findUserById(payer).getName()
                    const payeeUserName = usersRepository.findUserById(payee).getName()
                    result.push(`${payerUserName} owes ${payeeUserName}: ${moneyOwed}`)
                }
            }
        }

        return result.length ? result : ['No balances']
    }
}

module.exports = { AllUsersBalanceReport }
