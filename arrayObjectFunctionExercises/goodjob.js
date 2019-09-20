// given an array of people's names
// print out 'Good Job, {(name)}!' for each person's name

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

const greeting = people.map(i => "Good Job, " + i + "!");
console.log(greeting);
