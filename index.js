const inquirer = require('inquirer');


const promptUser = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the manager name?',

        },
        {
            type: 'number',
            name: 'managerID',
            message: 'what is the manager ID number?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'what is the manager email?'
        },
        {
            type: 'number',
            name: 'office',
            message: 'What is the managers office number?'
        },
    ]);
}

const addIntern = function () {
    return inquireer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the manager name?',

        },
        {
            type: 'number',
            name: 'internID',
            message: 'what is the manager ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'what is the manager email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school name?'
        },
    ]);
}

const addEngineer = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the manager name?',

        },
        {
            type: 'number',
            name: 'engineerID',
            message: 'what is the manager ID number?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'what is the manager email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers github URL?'
        },
    ])
}

const menu = function () {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu1',
            message: 'Please select an option below to continue making a team or finsih:',
            choices: ['Add an Intern','Add an Engineer','Finish making a Team']
        }
    ])
}
promptUser()
    .then(menu)
    
