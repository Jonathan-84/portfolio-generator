const inquirer = require('inquirer');
console.log(inquirer)
//const fs = require('fs');

//const pageHTML =  generatePage(name, github);

//const generatePage = require('./src/page-template.js');

//fs.writeFile('./index.html', generatePage(name, github), err => {
  //if (err) throw new Error(err);

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is uour name?'
  }
])
.then(answers=> console.log(answers));