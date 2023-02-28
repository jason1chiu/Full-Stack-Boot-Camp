const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should return a new reversed version of the string when called with a string argument", () => {
      const originalString = "Hello World!";
      const reversedString = "!dlroW olleH";

      const result = new Algo.reverse(originalString);

      expect(result).toEqual(reversedString);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return true if a string is a palindrome", () => {
      const str = "racecar";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(true);
    });

    it("should return false if a string is not a palindrome", () => {
      const str = "neon";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should return a string where the first letter of every word in a string argument is capitalized", () => {
      const originalString = "capitalize every first word of the string."
      const capitalizedString = "Capitalize Every First Word Of The String."

      const result = new Algo.capitalize(originalString);

      expect(result).toEqual(capitalizedString);
    });
  });
});
