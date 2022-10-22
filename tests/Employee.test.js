// require Employee
const Employee = require('../lib/Employee');

// test setting name 
test('Set Employee Name', () => {
    const name = 'Rui';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})
// test setting ID

// test setting email

// test getting name

// test getting ID

// test getting email

// test getting Role of Emploee