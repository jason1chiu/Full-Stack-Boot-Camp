const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word.split("").map(char => new Letter(char));
  }

  toString() {
    return this.letters.map(letter => letter.toString()).join(" ");
  }

  guess(char) {
    const guessResult = { correct: false, complete: true };
    this.letters.forEach(letter => {
      if (!letter.guess(char)) {
        guessResult.complete = false;
      } else {
        guessResult.correct = true;
      }
    });
    return guessResult;
  }

  getSolution() {
    return this.letters.map(letter => letter.getSolution()).join("");
  }

  guessedCorrectly() {
    return this.letters.every(letter => letter.visible);
  }
}

module.exports = Word;