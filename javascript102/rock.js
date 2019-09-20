/* Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner. */

function rockPaperScissors(p1, p2) {
    let values = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    };

    let valuesArray = Object.keys(values);

    if (p1 === p2) {
        return "draw";
    }
    if (valuesArray.includes(p1) && valuesArray.includes(p2)) {
        let p1Val = values[p1];
        if (p2 != p1Val) {
            console.log("P1 Wins!");
        } else {
            console.log("P2 Wins!");
        }
    } else {
        console.log("Invalid Entry");
    }
}

console.log(rockPaperScissors("rock", "scissors"));
