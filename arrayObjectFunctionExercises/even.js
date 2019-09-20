// no while or for loops unless explicitly asked
// Write a function which takes an array of numbers as input
// return new array containing only the even numbers

function even(arr) {
    return arr.filter(i => i % 2 == 0);
}

anArray = [-2, 3, -7, 8, 1, 2, -4, 4];

console.log(even(anArray));
