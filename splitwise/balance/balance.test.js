import { Balance } from "./balance"

describe('Balance', () => {
    const balance = new Balance()
    const expense = {
        payee: 'u1',
        payers: { u2: 100, u3: 50 }
    }
    balance.addBalances(expense)

    describe('after adding balance, who owes whom and how much', () => {
        expect(balance.getBalances('u2', 'u1')).toBe(100)
        expect(balance.getBalances('u4', 'u1')).toBe(0)
    })

    describe('after adding another balance, who owes whom and how much', () => {
        const expense = {
            payee: 'u2',
            payers: { u1: 50, u3: 50 }
        }
        balance.addBalances(expense)
        expect(balance.getBalances('u2', 'u1')).toBe(50)
    })

    describe('negative means, u1 will actually get money from u2', () => {
        expect(balance.getBalances('u1', 'u2')).toBe(-50)
    })
})
