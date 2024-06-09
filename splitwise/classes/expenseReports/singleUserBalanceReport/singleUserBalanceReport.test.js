import { Balance as Balances } from "../../balance/balance"
import { User } from "../../user/user"
import { UserRepository } from "../../userRepository/userRepository"
import { SingleUserBalanceReport } from "./singleUserBalanceReport"

function prepareUsers(userRepository) {
    userRepository.addUser(new User('u1', 'user one', '@@@@', '####'))
    userRepository.addUser(new User('u2', 'user two', '@@@@', '####'))
    userRepository.addUser(new User('u3', 'user three', '@@@@', '####'))
    userRepository.addUser(new User('u4', 'user four', '@@@@', '####'))
}

describe('SingleUserBalanceReport', () => {
    test('should return No balances if no user owes or is owed anyone anything', () => {
        const balanceReport = new SingleUserBalanceReport('u1')
        const userRepository = new UserRepository()
        prepareUsers(userRepository)
        const balances = new Balances()
        expect(balanceReport.getBalanceReport(['u1', 'u2', 'u3', 'u4'], balances, userRepository)).toEqual(['No balances'])
    })

    test('should return all the balances for a user', () => {
        const userRepository = new UserRepository()
        prepareUsers(userRepository)
        const balances = new Balances()
        const expense = {
            payee: 'u1',
            payers: { u2: 100, u3: 50 }
        }
        balances.addBalances(expense)
        const expenseTwo = {
            payee: 'u4',
            payers: { u1: 100, u3: 50 }
        }
        balances.addBalances(expenseTwo)
        const balanceReport = new SingleUserBalanceReport('u1')
        expect(balanceReport.getBalanceReport(['u1', 'u2', 'u3', 'u4'], balances, userRepository)).toEqual(
            [  
                "user two owes user one: 100",
                "user three owes user one: 50",
                "user one owes user four: 100",
            ]
        )
    })

})
