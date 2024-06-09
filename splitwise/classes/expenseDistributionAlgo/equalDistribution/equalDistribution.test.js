import { EqualDistribution } from './equalDistribution'

describe('EqualDistribution', () => {
    const equalDistribution = new EqualDistribution('u1', ['u1', 'u2', 'u3'], 300);
    test('expense details after equal distribution', () => {
        const expenseDetails = {
            payee: 'u1',
            payers: {
                u2: 100,
                u3: 100
            }
        }
        expect(equalDistribution.getExpenseDistribution()).toEqual(expenseDetails)
    })
})
