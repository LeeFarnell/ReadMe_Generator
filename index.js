// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  // Define the questions.
  {
    type: "input",
    message: "What is your full name?",
    name: "fullName",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  // Ask the questions.
  console.log("hello");

  const answers = await inquirer.prompt(questions);

  console.log(answers);
};

// Function call to initialize app
init();
