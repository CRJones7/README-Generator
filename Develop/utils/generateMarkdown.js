// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${generateBadges}
## Description  
${data.Description}
## Table of Contents
* [Description] (#Description)
* [Installation] (#Installation)
* [Usage] (#Usage)
* [Contributing] (#Contributing)
* [Testing] (#Testing)
* [License] (#License)
* [Questions] (#Questions)

## Installation
${data.Installation}
## Usage
${data.Usage}
## Contribution
${data.Contributing}
## Testing
${data.Test}
### License
${data.License}
### Questions
[Github Profile](#https://github.com/${data.github})
(#${data.Questions})

`;
}

function generateBadges(){
  return `![License](https://img.shields.io/badge/-${data.License}-yellowgreen)`
}
module.exports = generateMarkdown;
