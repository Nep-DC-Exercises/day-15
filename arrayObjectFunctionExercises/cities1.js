// no while or for loops unless explicitly asked
// Write a function which takes an array of city objects
// as input and returns a new array containing cities whose temperature is cooler than 70 degrees

const cities = [
    { name: "Los Angeles", temperature: 60.0 },
    { name: "Atlanta", temperature: 52.0 },
    { name: "Detroit", temperature: 48.0 },
    { name: "New York", temperature: 80.0 }
];

function cities1(arr) {
    return arr.filter(i => i.temperature < 70);
}

console.log(cities1(cities));
