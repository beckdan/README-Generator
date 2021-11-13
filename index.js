// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the purpose of this application?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Are there any special nuances to use this application?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license is the application covered under?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command to run tests?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
      },
      
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

fs.writeFile('./README.md', data, (err) => {
	// If there is any error in writing to the file, return
	if (err) {
		console.error(err)
		return
	}

	// Log this message if the file was written to successfully
	console.log('wrote to file successfully')
})


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(res => {
        console.log(res)
        const readme = generateMarkdown(res)
        console.log(readme)
    })
}

// Function call to initialize app
init();
