# cypress-automation

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> WeGift Cypress Automation suite for testing the WeGift's front end pages

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Install](#install)
- [Usage](#usage)
- [Project Framework](#project-framework)

## Prerequisites

* IDE - Visual Studio or IntelliJ


## Install

* [Node.js](https://nodejs.org/en/download/)
* Install below packages by using the commands in order

 ```
 npm i --save-dev cypress-mochawesome-reporter 
 //mocha reporter 
 npm install -D cypress-iframe    
 //To handle iframes
 npm install --save-dev cypress-cucumber-preprocessor 
 //Cucumber processor 
  npm install @badeball/cypress-cucumber-preprocessor 
  // to utilise cucumber hooks and datatable features
 npm install multiple-cucumber-html-reporter --save-dev 
 //to generate html report
 npm install --save-dev @percy/cli @percy/cypress  
 //to integrate percy
 npm install -D cypress-xpath 
 // to use xpath instead of css locators where css is not reliable 

 npm install --save-dev cypress-file-upload 
 // to enable file upload feature - references at [https://www.npmjs.com/package/cypress-file-upload#installation]
 ```
 
* Cucumber set up
* Below setting is only for VS code IDE users
  Navigate to file / Code > preferences > settings >open settings json(from corner of tabs) and paste the below within Json and save
```
    {"cucumberautocomplete.steps": [
        "cypress/integration/*/*/*.js"
      ],
    "cucumberautocomplete.syncfeatures": "cypress/integration/*/*.feature",
    "cucumberautocomplete.strictGherkinCompletion": false,
    "cucumberautocomplete.smartSnippets": true,
    "cucumberautocomplete.stepsInvariants": true
    }
```

## Usage

```
To run all features : cypress run —spec <path of feature/*.feature>
To run tag based:  npx cypress-tags run -e TAGS="@tagName"
To run in headless browser: cypress run —spec <path of feature>
To run in specific browser: cypress run — spec <path> —headed —browser <chrome>
```

* Generate cucumber html report

```
node cucumber-html-report.js
```

## Project Framework

```
Integration with CucumberBDD - Contains all the feature files
Step definitions are defined by creating a folder in same file path as feature files. The folder name should be of same name as feature file.
(Compiler looks for step definition of a feature, within a folder which has same name as feature file)


Cypress/ Fixtures - contains properties in form of json files

Cypress/Support – contains
Page objects folder – for page object spec files
Commands.js. – contains common commands / functions

To use xpath to locate elements : install cypress-xpath
in support/index - add this command : require('cypress-xpath')

```

## Contribute

To contribute, you will need proper access rights to this repository. General practice within the team is to create individual branches from a sprint/develop branch. Pull requests will have to be approved by at least one other team member before your work can be merged back.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
