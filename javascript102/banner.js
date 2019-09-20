/* Write a function printBanner which is given some text and prints a banner with a border surrounding the text. 
The border has to stretch to the length of the text.
*/

function printBanner(string) {
  let star = "*";
  let space = " ";
  let message = star + space + string + space + star;
  let stringLength = message.length;
  let height = 3;

  for (let i = 0; i < height; i++) {
    if (i == 1) {
      console.log(star + space + string + space + star);
    } else {
      console.log(star.repeat(stringLength));
    }
  }
}

printBanner("Welcome to the jungle!");
