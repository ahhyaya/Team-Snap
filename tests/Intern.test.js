// require Employee
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const intern = new Intern('Rui', 123, 'toruig59@gmail.com', 'berkerly');
const testSchool = 'berkerly';


// test intern school
test('Set Intern School', () => {
    expect(intern.school).toBe(testSchool);
})

// test getting school
test('Get Intern School', () => {
    expect(intern.getSchool()).toBe(testSchool);
})

// test getting Role of Intern
test('Get Intern', () => {
    expect(intern.getRole()).toBe('Intern');
})