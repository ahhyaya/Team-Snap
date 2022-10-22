// include packages needed
const fs = require ('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { default: Choices } = require('inquirer/lib/objects/choices');

// create an array of questions for user input
const addEmployeeQuestions = () => {
    console.log(`Add employee's info to the team`);
    const infoQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'Please choose employee\'s role: ',
        choices: ['Manager', 'Engineer', 'Intern', 'None']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter employee\'s name: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter employee\'s ID number: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter employee\'s ID number: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter employee\'s ID email: '
    }
]
}
// function to write Team file
const addToTeam = (input) => {
    let teamPage = './dist/index.html';
    fs.writeFileSync(teamPage, input, (err) => {
        err ? console.log(err) : console.log ('Team profile is ready!');
    })
}
// function to initialize app
let init = () => {
    inquirer.prompt(infoQuestions)
    .then(answers => wri)
}
// function to call to init app