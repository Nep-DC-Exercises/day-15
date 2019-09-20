// Write a function factors which is given a number and
// returns an array containing all its factors.

function factors(num) {
  let answer = [];
  for (let i = 1; i <= num; i++) {
    let check = num % i;
    if (check == 0) {
      if (answer.includes(i)) {
        // pass
      } else {
        answer.push(i);
        answer.push(-i);
      }
    }
  }
  return answer;
}

answer = factors(10);
console.log(answer);
