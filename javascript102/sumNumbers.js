// Write a function sumNumbers which is given an array of numbers
// and returns the sum of the numbers

function sumNumbers(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = arr.reduce(reducer);
  return sum;
}

console.log(sumNumbers([1, 2, 3]));
