// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  // Define the questions.
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Please add a description for your project.",
    name: "description",
  },
  {
    type: "confirm",
    message: "Does your project require any installation?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please add the necessary installation information.",
    name: "installInfo",
    when: (answers) => {
      return answers.installation;
    },
  },
  {
    type: "input",
    message: "Please add some information about how to use your project.",
    name: "usage",
  },
  {
    type: "list",
    message: "Please select your licence for this project.",
    name: "licence",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
  },
  {
    type: "input",
    message:
      "Please add any information for people wanting to contribute to your project",
    name: "contribution",
  },
  {
    type: "confirm",
    message: "Are there any tests for this project?",
    name: "tests",
  },
  {
    type: "input",
    message: "Please add any information for testing.",
    name: "testInfo",
    when: (answers) => {
      return answers.tests;
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please provide your GitHub Link.",
    name: "github",
  },
  {
    type: "input",
    message: "What is the best way for people to contact you?",
    name: "questions",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName) => {
  const callback = (err) => {
    if (err) {
      console.info(err);
    } else {
      console.info("ReadMe Created");
    }
  };

  fs.writeFile("NewReadMe.md", fileName, callback);
};

// TODO: Create a function to initialize app
const init = async () => {
  // Ask the questions.
  const answers = await inquirer.prompt(questions);

  const generatedMarkdown = generateMarkdown(answers);

  writeToFile(generatedMarkdown);
};

// Function call to initialize app
init();
