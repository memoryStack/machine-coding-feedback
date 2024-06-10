const input = require('./input.json')
const { WendingMachine } = require('./wendingMachine')

const outletsCount = input.machine.outlets.count_n

const ingredients = input.machine.total_items_quantity

const beverages = input.machine.beverages

const machine = new WendingMachine(outletsCount, ingredients, beverages)

machine.startServing()
