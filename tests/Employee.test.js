// require Employee
const Employee = require('../lib/Employee');
const employee = new Employee();
const testName = 'Rui'; 
const testId = 123;
const testEmail = 'toruig59@gmail.com';

// test setting name 
test('Set Employee Name', () => {
    expect(employee.name).toBe(testName);
})

// test setting ID
test('Set Employee ID', () => {
    expect(employee.id).toBe(testId);
})

// test setting email
test('Set Employee Email', () => {
    expect(employee.email).toBe(testEmail);
})

// test getting name
test('Get Employee Name', () => {
    expect(employee.getName()).toBe(testName);
})

// test getting ID

// test getting email

// test getting Role of Emploee