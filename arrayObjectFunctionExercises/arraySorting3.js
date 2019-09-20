// Given an array of products, sort the array by price

const products = [
    { name: "Basketball", price: 12.0 },
    { name: "Tennis Racquet", price: 66.0 },
    { name: "Tennis Balls", price: 9.0 },
    { name: "Tennis Balls", price: 9.0 }
];

let answer = products.sort((a, b) => a["price"] - b["price"]);
console.log(answer);
