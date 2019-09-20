// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(size) {
  let star = "*";
  for (let i = 0; i < size; i++) {
    console.log(star.repeat(size));
  }
}

printSquare(2);
