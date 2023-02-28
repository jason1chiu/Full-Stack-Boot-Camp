const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you know?',
      choices: ['English', 'French', 'Chinese', 'Japanese', 'Italian', 'Greek', 'Latin']
    },
    {
      type: 'list',
      name: 'communication',
      message: 'What is your preferred method of communication?',
      choices: ['Email', 'Phone']
    },
  ])
  .then((response) => {
      const filename = `${response.name.toLowerCase().split(' ').join('')}.json`
      fs.writeFile(filename, JSON.stringify(response, null, '\t'), 
      (err) =>  err ? console.error(err) : console.log('Commit logged!'),
    )
  })