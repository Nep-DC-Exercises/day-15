// write a function decipher which is given a string, an offset,
// and returns the original message.

// Utilizes ASCII codes as a "dictionary" of letter values. 97 is a. 122 is z.
function decipher(string, offset) {
  let str = string.toLowerCase();
  let strLength = string.length;
  let res = "";

  for (let i = 0; i < strLength; i++) {
    let code = str[i].charCodeAt();
    if (code == 32) {
      res += " ";
    } else if (code < 110) {
      let decrypt = code + offset;
      let encryptStr = String.fromCharCode(decrypt);
      res += encryptStr;
    } else {
      let decrypt = code - offset;
      let encryptStr = String.fromCharCode(decrypt);
      res += encryptStr;
    }
  }
  return res;
}

decipher = decipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13);
console.log(decipher);
