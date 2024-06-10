const { BalanceReportStrategy } = require('../balanceReportStrategy')

class SingleUserBalanceReport extends BalanceReportStrategy {
    #userId
    constructor(userId) {
        super();
        this.#userId = userId
    }

    getBalanceReport(userIds, balances, usersRepository) {
        const result = []
        
        for (let i=0;i<userIds.length;i++) {
            if (userIds[i] !== this.#userId) {
                const payer = userIds[i]
                const payee = this.#userId
                let moneyOwed = balances.getBalances(payer, payee)
                if (moneyOwed === 0) continue
                
                let payerUserName, payeeUserName
                if (moneyOwed > 0) {
                    payerUserName = usersRepository.findUserById(payer).getName()
                    payeeUserName = usersRepository.findUserById(payee).getName()
                } else if (moneyOwed < 0) {
                    payerUserName = usersRepository.findUserById(payee).getName()
                    payeeUserName = usersRepository.findUserById(payer).getName()
                    moneyOwed = -moneyOwed
                }
                result.push(`${payerUserName} owes ${payeeUserName}: ${moneyOwed}`)
            }
        }

        return result.length ? result : ['No balances']
    }
}

module.exports = { SingleUserBalanceReport }
