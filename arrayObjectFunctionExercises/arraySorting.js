// Given an array of strings such as the array of names given in one of the
// "Good Job" problem, sort them by alphabetically order.

const people = [
    "Dom",
    "Lyn",
    "Kirk",
    "Autumn",
    "Trista",
    "Jesslyn",
    "Kevin",
    "John",
    "Eli",
    "Juan",
    "Robert",
    "Keyur",
    "Jason",
    "Che",
    "Ben"
];

function sortArray(arr) {
    return arr.sort(); // this mutated the original array
}

console.log(sortArray(people));
