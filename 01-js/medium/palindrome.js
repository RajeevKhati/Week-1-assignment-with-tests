/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}

function isPalindrome(str) {
  const strArray = str.split("");
  let isPalindrome = true;
  let startIndex = 0;
  let endIndex = strArray.length - 1;
  while (startIndex < endIndex) {
    if (!isCharacterALetter(strArray[startIndex])) {
      startIndex++;
      continue;
    }
    if (!isCharacterALetter(strArray[endIndex])) {
      endIndex--;
      continue;
    }
    if (
      strArray[startIndex].toLowerCase() !== strArray[endIndex].toLowerCase()
    ) {
      isPalindrome = false;
      break;
    }
    startIndex++;
    endIndex--;
  }
  return isPalindrome;
}

module.exports = isPalindrome;
