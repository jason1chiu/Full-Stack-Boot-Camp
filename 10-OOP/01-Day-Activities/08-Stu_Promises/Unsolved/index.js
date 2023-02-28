// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
const practiceCoding = new Promise((resolve, reject) => {
    if (studentDistracted) {
      reject({
        issue: 'Distracted',
        message: 'Coding stopped - Student is distracted',
      });
    } else {
      resolve('We are coding in promises!');
    }
  });


// const callback = (message) => console.log(message);
// const errorCallback = (message) => console.log(message);

// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
practiceCoding
  .then((message) => console.log(message))
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error
  .catch((error) => console.log(`Promise rejected: ${error.message}`));
// practiceCoding(callback, errorCallback);




