// no while or for loops unless explicitly asked
// Write a function which takes an array of city objects
// as input and returns an array of the cities names.

const cities = [
    { name: "Los Angeles", temperature: 60.0 },
    { name: "Atlanta", temperature: 52.0 },
    { name: "Detroit", temperature: 48.0 },
    { name: "New York", temperature: 80.0 }
];

function cityNames(arr) {
    return arr.map(i => i.name);
}

// practicing one line arrow functions
let cityNames2 = cities.map(i => i.name);

console.log(cityNames(cities));

console.log(cityNames2);
