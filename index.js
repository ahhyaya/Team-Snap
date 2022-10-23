// include packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const profilePage = require('./dist/profilePage')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { default: Choices } = require('inquirer/lib/objects/choices');
const team = [];
// let infoQuestions = [];
// create an array of questions for user input
// const addEmployee = () => {
    console.log(
        `
=======================================
    Add employee's info to the team
---------------------------------------
         `);
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
            name: 'email',
            message: 'Please enter employee\'s email: '
        }
    ]
// }


// function to write Team file
const addToTeam = (data) => {
    let teamPage = './dist/index.html';
    fs.writeFileSync(teamPage, data, (err) => {
        err ? console.log(err) : console.log('Team profile is ready!');
    });
}
// function to initialize app
const init = () => {
    inquirer.prompt(infoQuestions)
        .then(answers => addToTeam(profilePage(answers))) 
        .then(emaployeeData => {
            let { name, id, email, role, github, school } = emaployeeData;
            let employee;
            if (role === 'Manager') {
                employee = new Manager(name, id, email, officeNumber);
                console.log(employee)
            } else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee)
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee)
            }
            team.push(employee);
            return team;
        });
          
}
// function to call to init app

// addToTeam()
// .then(addEmployee)
// .then(team => {
//     return profilePage(team);
// })


init();