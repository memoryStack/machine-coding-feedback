const { UserRepository } = require('./userRepository/userRepository');
const { User } = require('./user/user');
const { BalanceReportContext } = require('./expenseReports/balanceReportContext')
const { AllUsersBalanceReport } = require('./expenseReports/allUserBalanceReport/allUserBalanceReport')
const { SingleUserBalanceReport } = require('./expenseReports/singleUserBalanceReport/singleUserBalanceReport')
const { Balance } = require('./balance/balance')

const users = [
    ['u1', 'userOne', '@@@@', '####'],
    ['u2', 'userTwo', '@@@@', '####'],
    ['u3', 'userThree', '@@@@', '####'],
    ['u4', 'userFour', '@@@@', '####']
]

class Splitwise {
    #usersIds
    #usersRepository
    #input
    #balances

    constructor(input) {
        this.#input = input
        this.#usersIds = []
        this.#usersRepository = new UserRepository()
        this.#balances = new Balance()

        this.generateUsers()
        this.startSplitwizing()
    }
    
    generateUsers() {
        for (let i=0;i<users.length;i++) {
            this.#usersIds.push(users[i][0])
            const user = new User(...users[i])
            this.#usersRepository.addUser(user)
        }
    }

    async startSplitwizing() {
        while (true) {
            let firstinput = await this.#input()
            const commandComps = firstinput.split(' ')
            if (commandComps[0] === 'SHOW') this.handleShowReportCommand(commandComps)
            else this.handleAddExpenseCommand(commandComps)
        }
    }

    handleShowReportCommand(command) {
        const expenseReportContext = new BalanceReportContext()
        if (command.length === 1) {
            expenseReportContext.setStrategy(new AllUsersBalanceReport())
        } else {
            expenseReportContext.setStrategy(new SingleUserBalanceReport(command[1]))
        }
        const balanceReport = expenseReportContext.getBalanceReport(this.#usersIds, this.#balances, this.#usersRepository)
        for (let i=0;i<balanceReport.length;i++) {
            console.log(balanceReport[i])
        }
    }

    handleAddExpenseCommand(command) {
        const userId = command[1]
        const user = this.#usersRepository.findUserById(userId)
        user.addExpense(command, this.#balances)
    }
}

module.exports = { Splitwise }
