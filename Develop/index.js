// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    'Project title?',
    'Description?',
    'Installation?',
    'Usage?',
    'License?',
    'Contributing?',
    'Tests?',
    'GitHub username?',
    'Email address?',
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = `
    # ${data[0]}
    
    ## Description
    ${data[1]}
    
    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributing](#contributing)
    5. [Tests](#tests)
    6. [Questions](#questions)
    
    ## Installation
    ${data[2]}
    
    ## Usage
    ${data[3]}
    
    ## License
    ${data[4]}
    
    ## Contributing
    ${data[5]}
    
    ## Tests
    ${data[6]}
    
    ## Questions
    GitHub: [${data[7]}](https://github.com/${data[7]})
    For additional questions, contact me at ${data[8]}
    `;
    
      // Write the content to the README file
      fs.writeFile(fileName, content, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md successfully generated!');
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
      questions.map((question) => ({
        type: 'input',
        message: question,
        name: question.split(' ').join('').toLowerCase(),
      }))
    )
    .then((responses) => {
      const dataArray = questions.map(
        (question) => responses[question.split(' ').join('').toLowerCase()]
      );

      // Write to the README file
      writeToFile('README1.md', dataArray);
    });
}

// Function call to initialize app
init();
