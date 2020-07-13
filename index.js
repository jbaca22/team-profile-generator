const inquirer = require('inquirer');
const fs = require ('fs')

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
        }
    ])
    .then(menu);
}

const addIntern = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern name?',

        },
        {
            type: 'number',
            name: 'internID',
            message: 'what is the intern ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'what is the intern email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school name?'
        },
    ])
    .then(menu);
}

const addEngineer = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?',

        },
        {
            type: 'number',
            name: 'engineerID',
            message: 'what is the engineers ID number?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'what is the engineers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers github URL?'
        },
    ])
    .then(menu);
}

const menu = function () {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu1',
            message: 'Please select an option below to continue making a team or finsih:',
            choices: ['Add an Intern','Add an Engineer','Finish making a Team','quit']
        }
    ])
    .then(responses => {
        console.log(responses.menu1)

        if (responses.menu1 === 'Add an Intern') {
            addIntern();
        }
        else if (responses.menu1 === 'Add an Engineer') {
            addEngineer();
        }
        else if (responses.menu1 === 'Finish making a Team') {
            console.log("booty")
        }
        else {
            console.log("please make a decision!")
        }
    });
}

const writeFile = fileContent => {
    
}


promptUser()
    
    
