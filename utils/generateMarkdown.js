// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  console.log(answers);

  const {
    projectName,
    description,
    installation,
    usage,
    licence,
    contribution,
    tests,
    questions,
  } = answers;

  return `# ${projectName}

  ![Licence Badge](https://img.shields.io/badge/licence-${licence}-green)

  ## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description

  ${description}


  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## Licence

  ${licence}

  ## Contributing

  ${contribution}

  ## Tests

  ${tests}

  ## Questions

  ${questions}
  `;
};

module.exports = generateMarkdown;
