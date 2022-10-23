const employee = require("../lib/Employee");

var cardName = $('.card-header');
var cardRole = $('.card-footer')


cardName.attr('id','employee-name');
cardRole.attr('id', 'department')

cardName.append()

const profilePage = (input)=> {


    // switch (input.employee) {
    //     case 'Manager':
    //         employee.push(new Manager(input.name, input.id, input.email, input.dept));
    //         break;
    //     case 'Engineer':
    //         employee.push(new Engineer(input.name, input.id, input.email, input.github));
    //         break;
    //     case 'Intern':
    //         employee.push(new Intern(input.name, input.id, input.email, input.school));
    //         break;
    // }
}




module.exports = profilePage;
