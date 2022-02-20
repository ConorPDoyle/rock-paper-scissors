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
// Default parameters get user inputs each time gameRound is called

function gameRound (computerSelection = computerPlay(), playerSelection = window.prompt
        ('Make your decision', 'Rock, Paper, Scissors...')) {
    console.log('Make your selection');
    console.log(`The player has chosen ${playerSelection}`);
    console.log(`The computer has chosen ${computerSelection}`);
    if (computerSelection.toLowerCase() == playerSelection.toLowerCase()) {
        return "Tie!";
    } else if (
        (computerSelection == 'Rock' && playerSelection.toLowerCase() == 'scissors') ||
        (computerSelection == 'Paper' && playerSelection.toLowerCase() == 'rock') ||
        (computerSelection == 'Scissors' && playerSelection.toLowerCase() == 'paper')
        ) {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ( 
        (computerSelection == 'Rock' && playerSelection.toLowerCase() == 'paper') ||
        (computerSelection == 'Paper' && playerSelection.toLowerCase() == 'scissors') ||
        (computerSelection == 'Scissors' && playerSelection.toLowerCase() == 'rock')
    ) {
        playerScore++;
        return `You win! ${computerSelection} loses to ${playerSelection}!`;
    } else {
        return `Please make a valid selection.`
    }
}



function game() {
    for (let i = 1; i < 6; i++) {
        console.log("Round #" + i);
        console.log(gameRound());
        }
    if (playerScore > computerScore) {
        console.log(`You win! The final score was Computer: ${computerScore} & Player: ${playerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose! The final score was Computer: ${computerScore} & Player: ${playerScore}`);
    } else if (computerScore == playerScore) {
        console.log(`It was a tie! The final score was Computer: ${computerScore} & Player: ${playerScore}!`);
    }
        } 


 