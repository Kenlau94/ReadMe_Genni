// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Name of your Project",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your Project",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select your License",
    choices: ["MIT", "APACHE2.0", "BSD3", "BSD2", "MPL2.0", "Boost1.0", "none"],
  },
  {
    type: "input",
    name: "creator",
    message: "Write GitHub username",
  },
  {
    type: "input",
    name: "name",
    message: "Write your full name",
  },
  {
    type: "input",
    name: "email",
    message: "Valid email address",
  },
  {
    type: "input",
    name: "contributors",
    message: "List of any contributors",
  },
  {
    type: "input",
    name: "require",
    message: "List of your Project Dependancies",
  },
  {
    type: "input",
    name: "languageTech",
    message: "List of languages/technology",
  },
  {
    type: "input",
    name: "application",
    message: "link to deployed app",
  },

  {
    type: "input",
    name: "testing",
    message: "Walkthrough/Image of project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./generated/README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
