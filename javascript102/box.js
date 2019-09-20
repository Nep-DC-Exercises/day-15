// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(width, height) {
  let star = "*";
  let space = " ";
  for (let i = 0; i < height; i++) {
    if (i == 0 || i == height - 1) {
      console.log(star.repeat(width));
    } else {
      console.log(star + space.repeat(width - 2) + star);
    }
  }
}

printBox(8, 5);
