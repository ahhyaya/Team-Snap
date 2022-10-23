// include packages needed
const fs = require('fs');
const inquirer = require('inquirer');
// const profilePage = require('./dist/profilePage')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { default: Choices } = require('inquirer/lib/objects/choices');
const team = [];
// let infoQuestions = [];
// create an array of questions for user input
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
]


)}

const addEmployee = () => {

console.log(
    `
=======================================
Please Enter Employee's info 
---------------------------------------
     `);
return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'Please select employee\'s role: ',
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
    }

])
.then(employeeData => {
    let { name, id, email, role, github, school } = employeeData;
    let employee;

    if(role === 'Engineer') {
        employee = new Engineer(name, id, email, github);
        console.log(employee)
    } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);
        console.log(employee)
    }

    team.push(employee);
})
}

// function to write Team file
const addToTeam = (data) => {
    let teamPage = './dist/index.html';
    fs.writeFileSync(teamPage, data, (err) => {
        err ? console.log(err) : console.log('Team profile is ready!');
    });
}
// function to initialize app
// const init = () => {
//     inquirer.prompt(managerInfo)
//         .then(managerInput => {
//             const { name, id, email, officeNumber } = managerInput;
//             const manager = new Manager(name, id, email, officeNumber);
//             team.push(manager);
//             console.log(manager)
//         })
       
// }



// .then(emaployeeData => {
//     let { name, id, email, role, github, school } = emaployeeData;
//     let employee;
//     if (role === 'Manager') {
//         employee = new Manager(name, id, email, officeNumber);
//         console.log(employee)
//     } else if (role === 'Engineer') {
//         employee = new Engineer(name, id, email, github);
//         console.log(employee)
//     } else if (role === 'Intern') {
//         employee = new Intern(name, id, email, school);
//         console.log(employee)
//     }
//     team.push(employee);
//     return team;
// });


// function to call to init app

// addToTeam()
// .then(addEmployee)
// .then(team => {
//     return profilePage(team);
// })


// {
//     type: 'list',
//     name: 'role',
//     message: 'Please choose employee\'s role: ',
//     choices: ['Manager', 'Engineer', 'Intern', 'None']
// },

// init();
addManager()
    .then(addEmployee)
    