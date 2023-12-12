/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str === "") {
    return true;
  }

  str = str.toLowerCase().replace(/[^a-z]/g, "");

  let char = [...str];
  let str2 = "";
  for (let i = char.length - 1; i >= 0; i--) {
    str2 = str2 + char[i];
  }
  console.log(str2);
  if (str === str2) {
    return true;
  }
  return false;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
