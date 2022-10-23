// require Employee
const Employee = require('../lib/Employee');
const employee = new Employee('Rui', 123, 'toruig59@gmail.com');
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
test('Get Employee ID', () => {
    expect(employee.getId()).toBe(testId);
})

// test getting email
test('Get Employee Email', () => {
    expect(employee.getEmail()).toBe(testEmail);
})

// test getting Role of Emploee
test('Get Employee', () => {
    expect(employee.getRole()).toBe('Employee');
})