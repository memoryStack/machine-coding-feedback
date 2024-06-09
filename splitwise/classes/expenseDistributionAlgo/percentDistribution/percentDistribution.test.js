import { PercentDistribution } from './percentDistribution'

describe('PercentDistribution', () => {
    const percentDistribution = new PercentDistribution('u1', {'u1': 30, 'u2': 40, 'u3': 30}, 300);
    test('expense details after equal distribution', () => {
        const expenseDetails = {
            payee: 'u1',
            payers: {
                u2: 120,
                u3: 90
            }
        }
        expect(percentDistribution.getExpenseDistribution()).toEqual(expenseDetails)
    })
})
