/* PSEUDOCODE
Create function computerPlay that randomly returns 'Rock', 'Paper', or 'Scissors'
Create function gameRound that takes two perameters: playerSelection and computerSelection
Create & call playRound function inside  which keeps score and reports winner
Console.log() results of each round and winner at the end
Use prompt() to get input from user
*/

let playerScore = 0;
let computerScore = 0;
// Create function computerPlay that randomly returns rock, paper, scissors;
function computerPlay() {
    let randomInt = Math.floor(Math.random()*3);
    switch (randomInt) {
        case 0:
            return 'Rock'; 
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// Create function gameRound that takes two parameters: playerSelection and computerSelection

function gameRound (computerSelection, playerSelection) {
    console.log('Make your selection');
    console.log(`The player has chosen ${playerSelection}`);
    console.log(`The computer has chosen ${computerSelection}`);
    if (computerSelection == playerSelection) {
        return "Tie!";
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
        ) {
            ++computerScore;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ( 
        (computerSelection == 'Rock' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Rock')
    ) {
        ++playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `Please make a valid selection.`
    }
}


const playerSelection = 'Rock';
const computerSelection = computerPlay()
function game(playerScore, computerScore) {
    for (let i = 1; i < 6; i++) {
        console.log("Round #" + i);
        console.log(gameRound(computerPlay(), 'Rock'));
    }
}
