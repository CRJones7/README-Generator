const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./utils/generateMarkdown');
const fileName = 'README.md';
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?"
      },
      {
        type: "input",
        name: "Description",
        message: "Please describe your application."
      },
      {
        type: "input",
        name: "Installation",
        message: "Please describe the installation process for your application."
      },
      {
        type: "input",
        name: "Usage",
        message: "Please describe how to use your application."
      },
      {
        type: "input",
        name: "Contributing",
        message: "How to contribute to your application?"
      },
      {
        type: "input",
        name: "Test",
        message: "Please provide testing instructions."
      },
      {
        type: "list",
        name: "License",
        message: "Please choose which license your application is covered under.",
        choices: [
            "LGPL",
            "MIT",
            "GPL",
            "Apache"
        ]
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username."
      },
      {
        type: "input",
        name: "Questions",
        message: "Please enter your email address."
      },

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data, err => {
       if (err) {return console.log(err);
       }
       
    });
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(response){
    // console.log(response);
    const readMeContent = generator(response);
    console.log(readMeContent);
    writeToFile(fileName, readMeContent);
});

}

// function call to initialize program
init();
