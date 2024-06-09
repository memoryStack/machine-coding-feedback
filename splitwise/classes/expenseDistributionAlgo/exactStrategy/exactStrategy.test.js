import { ExactDistribution } from './exactStrategy'

describe('ExactDistribution', () => {
    const exactDistribution = new ExactDistribution('u1', {'u1': 30, 'u2': 40, 'u3': 30});
    test('expense details after ExactDistribution', () => {
        const expenseDetails = {
            payee: 'u1',
            payers: {
                u2: 40,
                u3: 30
            }
        }
        expect(exactDistribution.getExpenseDistribution()).toEqual(expenseDetails)
    })
})
