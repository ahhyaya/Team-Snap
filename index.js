// include packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { profile } = require('console');
const profilePage = require('./dist/profilePage');

const team = [];


// create an array of questions for manager input
const addManager = () => {

    console.log(
        `
=======================================
    Enter Manager's info to start
---------------------------------------
         `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter manager\'s name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter manager\'s  ID number: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter manager\'s  email: '
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter manager\'s office number: '
        }
    ])

        // push manager to team array
        .then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);

            team.push(manager);
            console.log(manager);
        })
}


// create function and questions to get employee's data
const addEmployee = () => {

    console.log(
        `
============================================================
    Please choose employee's role and enter related info 
------------------------------------------------------------
     `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Employee\'s role: ',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee\'s name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee\'s  ID number: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee\'s  email: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter employee\'s Github username: ',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee\'s Github username: ')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter employee\'s school: ',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee\'s school: ')
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Enter next employee?',
            default: false
        }
    ])
    // push employee to team array
        .then(employeeData => {
            let { name, id, email, role, github, school, addMore } = employeeData;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee)
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee)
            }

            team.push(employee);

            if (addMore) {
                return addEmployee(team);
            } else {
                return team;
            }
        })
}

// function to write Team file to index page
const addToPage = (data) => {
    let teamPage = './dist/index.html';
    fs.writeFile(teamPage, data, (err) => {
        err ? console.log(err) : console.log('Team profile is ready!');
    });
}

// call function to run app
addManager()
    .then(addEmployee)
    .then(team => {
        return profilePage(team);
    })
    .then(outputHTML => {
        return addToPage(outputHTML);
    })
    .catch(error => {
        console.log(error)
    })