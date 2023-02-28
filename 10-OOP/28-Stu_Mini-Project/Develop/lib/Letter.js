class Letter {
  constructor(char) {
    this.char = char;
    this.visible = !(/[a-zA-Z0-9]/).test(char); // Set to true for non-alphanumeric characters
    this.guessed = false;
  }

  toString() {
    return this.visible ? this.char : '_';
  }

  guess(char) {
    if (char.toLowerCase() === this.char.toLowerCase()) {
      this.visible = true;
      this.guessed = true;
      return true;
    }
    this.guessed = true;
    return false;
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;