/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let new1 = str1.split("").sort().join("");
  let new2 = str2.split("").sort().join("");

  console.log(new1);

  if (new1.length != new2.length) {
    return false;
  }

  for (let i = 0; i < new1.length; i++) {
    if (new2[i] != new1[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("hello World", "world"));
module.exports = isAnagram;
