// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  // Define the questions.
  {
    type: "input",
    message: "What is your full name?",
    name: "fullName",
  },
  {
    type: "input",
    message: "Where Do you live?",
    name: "location",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  // Ask the questions.
  const answers = await inquirer.prompt(questions);

  const generatedMarkdown = generateMarkdown(answers);

  console.log(generatedMarkdown);
};

// Function call to initialize app
init();
