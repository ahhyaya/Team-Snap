// require Employee
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Rui', 123, 'toruig59@gmail.com', 'ahhyaya');
const testName = 'Rui'; 
const testId = 123;
const testEmail = 'toruig59@gmail.com';
const testGithub = 'ahhyaya';


// test engineer github 
test('Set Engineer Github', () => {
    expect(engineer.github).toBe(testGithub);
})

// test getting github
test('Get Engineer Github', () => {
    expect(engineer.getGithub()).toBe(testGithub);
})

// test getting Role of Engineer
test('Get Engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
})