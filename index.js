const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "Username",
    },
    {
        type: "input",
        message: "What is your GitHub email address?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "Title",
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "Description",
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "License",
        choices: [
            { value: '', name: 'None' },
            { value: 'mit', name: 'MIT' },
            { value: 'isc', name: 'ISC' },
        ]
    },
    {
        type: "input",
        message: "What commande should be run to install dependencies?",
        name: "Dependencies",
    },
    {
        type: "input",
        message: "What commande should be run to run tests?",
        name: "Test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "Repo",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "Contribution",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('You\'ve successfully generated your README.md file!!!')
    );
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data));
        })
}

// function call to initialize program
init();
