/* write a function cipher which is given a string, an offset,
and returns the Caesar cipher of the string

Utilizes ASCII codes as a "dictionary" of letter values. 97 is a. 122 is z.
forces the string to lower */
function cipher(string, offset) {
  let str = string.toLowerCase();
  let strLength = string.length;
  let res = "";
  for (let i = 0; i < strLength; i++) {
    let code = str[i].charCodeAt();
    let encrypt = code + offset;

    if (encrypt == 45) {
      res += " ";
    } else if (encrypt > 122 - offset) {
      encrypt -= offset;
      let encryptStr = String.fromCharCode(encrypt);
      res += encryptStr;
    } else {
      let encryptStr = String.fromCharCode(encrypt);
      res += encryptStr;
    }
  }
  return res;
}

cipher = cipher("Genius without education is like silver in the mine", 13);
console.log(cipher);
