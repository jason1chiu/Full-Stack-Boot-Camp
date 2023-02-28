function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  const lowercasedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the lowercaseded string is equal to its reverse
  return lowercasedStr === lowercasedStr.split('').reverse().join('');
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here
  const orgStr = str.split(' ');
  const capStr = orgStr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return capStr;
};

module.exports = Algo;