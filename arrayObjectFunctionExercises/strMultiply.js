// Write a strMultiply function which takes two arguments:
// str - the string to multiply
// times - number of times to multiply
// Cant use repeat method but can use range and loops.

function strMultiply(str, times) {
    let ans = "";
    for (let i = 0; i < times; i++) {
        ans += str;
    }

    return ans;
}

string = strMultiply("abc", 10);
console.log(string);
