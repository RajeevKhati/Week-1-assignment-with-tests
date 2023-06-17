/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function getSortedString(str1) {
  const sortedCharArray = str1.split("").sort();
  const sortedString = sortedCharArray.join();
  return sortedString;
}

function isAnagram(str1, str2) {
  return (
    getSortedString(str1.toUpperCase()) === getSortedString(str2.toUpperCase())
  );
}

module.exports = isAnagram;
