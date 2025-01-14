/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let str1 = str.toLowerCase();
  let char = [...str1];
  for (let i = 0; i < char.length; i++) {
    if (
      char[i] === "a" ||
      char[i] === "e" ||
      char[i] === "i" ||
      char[i] === "o" ||
      char[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
