// Sort the same array, but not by alphabetically order,
// but by how long each name is, shortest name first.

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

function compareNameLength(a, b) {
    if (a.length > b.length) return 1;
    if (a.length == b.length) return 0;
    if (a.length < b.length) return -1;
}

let answer = people.sort(compareNameLength);
console.log(answer);

let arrowAnswer = people.sort((a, b) => a.length - b.length); // practicing more arrow functions
console.log(arrowAnswer);
