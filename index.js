const fs = require("fs");
const inquirer = require("inquirer");

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







