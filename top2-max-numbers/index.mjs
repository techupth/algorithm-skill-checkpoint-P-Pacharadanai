// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  const top2MaxNum = [];
  const sortArr = numbers.sort((a, b) => b - a);
  for (let i = 0; top2MaxNum.length !== 2; i++) {
    if (!top2MaxNum.includes(sortArr[i])) {
      top2MaxNum.push(sortArr[i]);
    }
  }
  return top2MaxNum;
};

const test1 = getTop2MaxNumbers([10, 40, 2, 9, 19]);
const test2 = getTop2MaxNumbers([-10, -40, -2, -9, -19]);
const test3 = getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]);

console.log(test1);
console.log(test2);
console.log(test3);
