/* PSEUDOCODE
Create function computerPlay that randomly returns 'Rock', 'Paper', or 'Scissors'
Create function gameRound that takes two perameters: playerSelection and computerSelection
Create & call playRound function inside  which keeps score and reports winner
Console.log() results of each round and winner at the end
Use prompt() to get input from user
*/

// Create function computerPlay that randomly returns rock, paper, scissors
function computerPlay() {
    // Select a random number from 0-2 (0, 1, 2)
    let randomInt = Math.floor(Math.random()*3);
    // Assign random numbers to strings matching the computer's play
    switch (randomInt) {
        case 0:
            play = 'Rock'; 
            break;
        case 1:
            play = 'Paper';
            break;
        case 2:
            play = 'Scissors';
            break;
    }
    return play;
}

// Create function gameRound that takes two parameters: playerSelection and computerSelection
// const computerSelection = computerPlay();
function gameRound (computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie!";
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
        ) {
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ( 
        (computerSelection == 'Rock' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Rock')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `Please make a valid selection.`
    }
}