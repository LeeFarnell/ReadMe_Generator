const installQuestion = [
  {
    type: "input",
    message: "Please add the necessary testing information.",
    name: "testInfo",
  },
];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenceBadge = (licence) => {
  if (licence === "None") {
    return "";
  } else {
    return `![Licence Badge](https://img.shields.io/badge/licence-${licence}-green)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenceLink = (licence) => {
  if (licence === "None") {
    return "";
  }
  if (licence === "MIT") {
    return `https://www.mit.edu/~amini/LICENSE.md`;
  }
  if (licence === "APACHE_2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  }
  if (licence === "GPL_3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  if (licence === "BSD_3") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenceSection = (licence) => {
  if (licence === "None") {
    return "This content is not licenced.";
  } else {
    return `This content is licenced under the ${licence} Licence.`;
  }
};

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
    testInfo,
    questions,
  } = answers;

  const licenceBadge = renderLicenceBadge(licence);
  const licenceSection = renderLicenceSection(licence);
  const licenceLink = renderLicenceLink(licence);

  return `# ${projectName}

  ${licenceBadge}

  ## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description

  ${description}


  ## Installation
  \`\`\`
  ${installation}
  \`\`\`

  ## Usage

  ${usage}

  ## Licence

  ${licenceSection}
  ${licenceLink}

  ## Contributing

  ${contribution}

  ## Tests

  ${tests} ${testInfo}

  ## Questions

  ${questions}
  `;
};

module.exports = generateMarkdown;
