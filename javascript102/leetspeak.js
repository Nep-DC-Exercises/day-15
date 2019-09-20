/*Write a function leetspeak which is given a string, 
and returns the leetspeak equivalent of the string. */

const map = {
  a: 4,
  e: 3,
  g: 6,
  i: 1,
  o: 0,
  s: 5,
  t: 7,
  A: 4,
  E: 3,
  G: 6,
  I: 1,
  O: 0,
  S: 5,
  T: 7
};

function leetspeak(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      answer += map[s[i]];
    } else {
      answer += s[i];
    }
  }
  return answer;
}

console.log(leetspeak("Apple"));
