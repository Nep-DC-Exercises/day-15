// Write a function ticTacToe which takes a two-dimensional array of size 3x3
// Each cell in the two dimensional array can be one of "O", "X", or null
// Return O if O makes a row, Return X if X makes a row, Return null if neither make a row

let board = [["O", "O", "X"], [null, "X", "X"], ["O", "null", "null"]];

function ticTacToe(arr) {
    let o = "O";
    let x = "X";
    let row1 = arr[0];
    let row2 = arr[1];
    let row3 = arr[2];

    // Check to see if every O or X are each element in a row
    // If so, return O or X

    arr.forEach(element => {
        if (element.every(v => v === element[0])) {
            console.log(element[0]);
        }
    });

    // if board[0][0] is the same as board [0][1] is the same as board [0][2]
    // Need to check if O or X are in the same position in each of the three rows
    // If so, return O or X

    for (let i = 0; i < arr.length; i++) {
        if (row1[i] == x && row2[i] == x && row3[i] == x) {
            return x;
        }

        if (row1[i] == o && row2[i] == o && row3[i] == o) {
            return o;
        }
    }

    return null;
}

console.log(ticTacToe(board));
