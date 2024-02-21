// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  const reverseText = str.split("").reverse().join("");
  return reverseText === str;
};

const test1 = palindrome("abba");
const test2 = palindrome("abcdef");

console.log(test1);
console.log(test2);
