// no while or for loops unless explicitly asked
// Write a function which takes an array of numbers as input
// return new array containing only square of the numbers

function squareTheNumbers(arr) {
    return arr.map(i => i * i);
}

anArray = [-2, 3, -7, 8, 1, 2, -4, 4];

console.log(squareTheNumbers(anArray));
