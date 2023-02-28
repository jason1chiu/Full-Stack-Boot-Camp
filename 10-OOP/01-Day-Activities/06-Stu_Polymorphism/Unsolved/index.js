// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      const grade = input;
      if (!inRange(grade, 0, 100)) {
        throw new Error('grade out of range');
      }
      if (inRange(grade, 90, 100)) {
        response = 'A';
      } else if (inRange(grade, 80, 89)) {
        response = 'B';
      } else if (inRange(grade, 70, 79)) {
        response = 'C';
      } else if (inRange(grade, 60, 69)) {
        response = 'D';
      } else {
        response = 'F';
      }
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      const letterGrade = input.toUpperCase();
      switch (letterGrade) {
        case 'A':
          response = '90 - 100';
          break;
        case 'B':
          response = '80 - 89';
          break;
        case 'C':
          response = '70 - 79';
          break;
        case 'D':
          response = '60 - 69';
          break;
        case 'F':
          response = '0 - 59';
          break;
        default:
          throw new Error('invalid grade');
      }
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(90));
console.log('John.displayGrade():', John.displayGrade('A'));
