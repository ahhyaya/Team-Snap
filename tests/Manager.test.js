// require Employee
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const manager = new Manager('Rui', 123, 'toruig59@gmail.com', 12);
const testOfficeNumber = 12;


// test manager office number 
test('Set Manager Office Number', () => {
    expect(manager.officeNumber).toBe(testOfficeNumber);
})

// test getting office number
test('Get Manager Office Number', () => {
    expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
})

// test getting Role of manager
test('Get Manager', () => {
    expect(manager.getRole()).toBe('Manager');
})