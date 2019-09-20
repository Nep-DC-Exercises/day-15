// Write a function positiveNumbers which is given an array of numbers
// and returns a new array containing only the positive numbers within the given array

function positiveNumbers(arr) {
  const result = arr.filter(num => num > 0);
  return result;
}

console.log(positiveNumbers([-1, 3, -4, 2019]));
