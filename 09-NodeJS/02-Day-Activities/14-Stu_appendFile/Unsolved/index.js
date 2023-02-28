// TODO: What are we importing?
// import the file system (fs) package
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// 'log.txt' is a new file created, `${process.argv[1]}\n` is a line to adds to an existing file or create one if not existed (unlike writeFile which overwrites), and (err) is a function 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // use the parameter to check if parameter is true. if false, err prints with no new file created, if true, 'commit logged'
  err ? console.error(err) : console.log('Commit logged!')
);
