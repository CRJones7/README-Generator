// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description  
${data.Description}
## Table of Contents
${data.TableofContents}
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
${data.Questions}

`;
}

module.exports = generateMarkdown;
