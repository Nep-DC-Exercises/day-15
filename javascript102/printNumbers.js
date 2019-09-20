/*  Write a function printNumbers which is given a start number and an end number. 
It will print the numbers from one to the other, one per line. 
Write a for loop and while loop version.
*/

function printNumbersFor(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

printNumbersFor(1, 10);

function printNumbersWhile(start, end) {
  let i = start;
  while (i <= end) {
    console.log(i);
    i++;
  }
}

printNumbersWhile(1, 10);
