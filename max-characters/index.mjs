// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const charCount = str.split("").reduce((countObj, char) => {
    countObj[char] = (countObj[char] || 0) + 1;
    return countObj;
  }, {});

  const sortCharCountArr = Object.entries(charCount).sort(
    (a, b) => b[1] - a[1]
  );

  const maxChar = sortCharCountArr[0][0];

  return maxChar;
};

const test1 = getMaxCharacters("abcccccccd");
const test2 = getMaxCharacters("apple 1231111");

console.log(test1);
console.log(test2);
