/* Write a function, which is given a string, 
return the result of extending any long vowels to the length of 5 */
let vowels = ["a", "e", "i", "o", "u"];

function longVowel(s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    // is the letter a vowel and are the letters side by side
    if (vowels.includes(s[i]) && s[i] == s[i + 1]) {
      ans += s[i].repeat(4);
    } else {
      ans += s[i];
    }
  }
  return ans;
}

console.log(longVowel("good"));
