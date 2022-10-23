// const Engineer = require("../lib/Engineer");

const addManagerCard = (manager) => {
    return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Manager</div>
    <div class="card-body text-success">
        <h5 class="card-title">${manager.name}</h5>
        <p class="card-text email">Email: ${manager.email}</p>
        <p class="card-text office-number">Office number: ${manager.officeNumber}</p>
    </div>
    <div class="card-footer bg-transparent border-success">ID number: ${manager.id}</div>
    </div>
    `;
}

const addEngineerCard = (engineer) => {
    return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Manager</div>
    <div class="card-body text-success">
        <h5 class="card-title">${engineer.name}</h5>
        <p class="card-text email">Email: ${engineer.email}</p>
        <p class="card-text office-number">Github username: ${engineer.github}</p>
    </div>
    <div class="card-footer bg-transparent border-success">ID number: ${engineer.id}</div>
    </div>
    `;
}

const addInternCard = (intern) => {
    return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Manager</div>
    <div class="card-body text-success">
        <h5 class="card-title">${intern.name}</h5>
        <p class="card-text email">Email: ${intern.email}</p>
        <p class="card-text office-number">School: ${intern.school}</p>
    </div>
    <div class="card-footer bg-transparent border-success">ID number: ${intern.id}</div>
    </div>
    `;
}

const profilePage = (team) => {
    let pageContent = [];

        pageContent.push(team
            .filter(employee => employee.getRole() === 'Manager')
            .map(manager => addManagerCard(manager))
        );
        
        pageContent.push(team
            .filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => addEngineerCard(engineer))
        );

        pageContent.push(team
            .filter(employee => employee.getRole() === 'Intern')
            .map(intern => addInternCard(intern))
        );

    const employeeCard = pageContent.join('');
    return generateProfilePage(employeeCard);
}


const generateProfilePage = (employeeCard) => {
    return `
<!DOCTYPE html>
<html lang="en">

 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Team Snap</title>
</head>
<body>
    ${employeeCard}
    <script src='/dist/profilePage.js'></script>
</body>
</html>
    `;
}


module.exports = profilePage;
