// const Engineer = require("../lib/Engineer");

// const Manager = require("../lib/Manager");
// delete         <h5 class="card-title"></h5>

const addManagerCard = (manager) => {
    return `
    <div class="card border-success mb-3 shadow-lg p-3 mb-5 bg-white rounded inline-flex rounded-lg mx-5 w-1/5" style="max-width: 18rem;">
    <div class="card-header text-center bg-transparent border-success font-weight-bold text-xl font-serif">${manager.name}
    <p class="text-center text-muted my-1 decoration-dotted text-base font-mono"><i class="bi bi-person-circle"></i>  Manager</p>
    
    </div>
    <div class="card-body text-success">

        <p class="card-text email">Email: <a href = "mailto:${manager.email}" class ="text-blue-700 underline">${manager.email}</a></p>
        <span class="card-text office-number">Office number:  </span><span class="text-black">${manager.officeNumber}</span>
    </div>
    <div class="card-footer bg-transparent border-success italic text-sm text-neutral-800">ID#:  ${manager.id}</div>
    </div>
    `;
}

const addEngineerCard = (engineer) => {
    return `
    <div class="card border-success mb-3 shadow-lg p-3 mb-5 bg-white rounded inline-flex rounded-lg mx-5 w-1/5" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success  text-center font-weight-bold text-xl font-serif">${engineer.name}
    <p class="text-center text-muted my-1 text-base font-mono"><i class="bi bi-tools"></i>  Engineer</p>
    </div>
    <div class="card-body text-success">
 
    <p class="card-text email">Email: <a href = "mailto:${engineer.email}" class ="text-blue-700 underline">${engineer.email}</a></p>
        <span class="card-text office-number">Github:  </span><a href="https://github.com/${engineer.github}/" class="text-blue-700 underline">${engineer.github}</a>
    </div>
    <div class="card-footer bg-transparent border-success italic text-sm text-neutral-800">ID#:  ${engineer.id}</div>
    </div>
    `;
}

const addInternCard = (intern) => {
    return `
    <div class="card border-success mb-3 shadow-lg p-3 mb-5 bg-white rounded inline-flex rounded-lg mx-5 w-1/5" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success  text-center font-weight-bold text-xl font-serif">${intern.name}
    <p class="text-center text-muted my-1 text-base font-mono"><i class="bi bi-mortarboard"></i>  Intern</p>
    </div>
    <div class="card-body text-success">
   
    <p class="card-text email">Email: <a href = "mailto:${intern.email}" class ="text-blue-700 underline">${intern.email}</a></p>
        <span class="card-text office-number">School:  </span><span class="text-black">${intern.school}</span>
    </div>
    <div class="card-footer bg-transparent border-success italic text-sm text-neutral-800">ID#:  ${intern.id}</div>
    </div>
    `;
}

const profilePage = (data) => {
    let pageContent = [];
    for (let i = 0; i < data.length; i++) {

        const role = data[i].getRole();

        if (role === 'Manager'){
            pageContent.push(addManagerCard(data[i]))
        }

        if (role === 'Engineer'){
            pageContent.push(addEngineerCard(data[i]))
        }

        if (role === 'Intern'){
            pageContent.push(addInternCard(data[i]))
        }}

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
        <link rel="stylesheet" href=
"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <script src="https://cdn.tailwindcss.com"></script>
    <title>Team Snap</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-rose-200 text-center">
    <div class="container">
    <h1 class="display-4  font-sans font-extrabold">Team Snap</h1>
    <p class="lead">Team Profile Generator</p>
    </div>
    </div>
    ${employeeCard}
    <script src='/dist/profilePage.js'></script>
</body>
</html>
    `;
}


module.exports = profilePage;
