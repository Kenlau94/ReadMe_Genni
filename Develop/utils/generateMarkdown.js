// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Language and Technology](#languageTech)
  * [Dependencies](#require)
  * [Contributors](#contributors)
  * [Creator](#name)
  * [Email](#email)
  * [Deployed Application](#application)
  * [Testing](#testing)
  
  
  ## Description
  ${data.description}
  ## Language and Technology
  ${data.languageTech}
  ## Dependencies
  ${data.require}
  ## Contributors
  ${data.contributors}
  ## Creator
  ${data.name}
  ## Email
  ${data.email}
  ## Testing
  ${data.test}
  ## Deployed Application URL
  ${data.application}
  ## Screenshot
  ![alt-text](${data.testing})
`;
}

module.exports = generateMarkdown;
