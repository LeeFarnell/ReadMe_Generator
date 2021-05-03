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
    message: "Please add a description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please add any necessary installation information.",
    name: "installation",
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
    type: "checkbox",
    message:
      "What is the best way for people to contact you regarding your project?",
    name: "questions",
    choices: ["Email", "Github", "LinkedIn"],
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("ReadMe Created");
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
