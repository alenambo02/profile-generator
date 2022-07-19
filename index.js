const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./src/generateHtml");

const questions = [
// manager question section
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'managername',
    },
    {
        type: 'input',
        message: 'What is the team managers id?',
        name: 'managerid',
    },
    {
        type: 'input',
        message: 'What is the team managers email?',
        name: 'manageremail',
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'manageroffice',
    },
// this prompt message creates a list of types of employees to add
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'employeetype',
        choices: ['Engineer', 'Intern', 'None'],
    },
];

// engineer question section
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your engineers name?',
        name: 'engineername',
    },
    {
        type: 'input',
        message: 'What is your engineers ID',
        name: 'engineerid',
    },
    {
        type: 'input',
        message: 'What is your engineers email?',
        name: 'engineeremail',
    },
    {
        type: 'input',
        message: 'What is your engineers Github username?',
        name: 'engineergithub',
    },
];

// intern question section
const internQuestions = [
    {
        type: 'input',
        message: 'What is your interns name?',
        name: 'internname',
    },
    {
        type: 'input',
        message: 'What is your interns ID?',
        name: 'internid',
    },
    {
        type: 'input',
        message: 'What is your interns email?',
        name: 'internemail',
    },
    {
        type: 'input',
        message: 'What is your intens school?',
        name: 'internschool',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHtml(data), (err) => err ? console.log(err):console.log("SUCCESS!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer 
    .prompt(questions)
     
    .then((response) => {
        console.log(response)
       
        writeToFile("index.html", response);
   
    
    }
    
    );
}

// Function call to initialize app
init();





