const start = document.querySelector('#start');
const cards = document.querySelector('.cards');
const playReport = document.querySelector('.play-report');
const scoreboard = document.querySelector('.scoreboard');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerSelection = '';
rock.addEventListener('click', () => {
    playerSelection = 'Rock';
});
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
});
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
});

//UI

start.addEventListener('click', ()=> {
    start.classList.toggle('toggle');
    cards.classList.toggle('toggle');
    playReport.classList.toggle('toggle');
    playRound();
})

//GAME LOGIC

function getComputerChoice() {
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

function playRound (computerSelection = getComputerChoice(), playerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie!";
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'paper')
        ) {
            computerScore++;
            round++
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ( 
        (computerSelection == 'Rock' && playerSelection == 'paper') ||
        (computerSelection == 'Paper' && playerSelection == 'scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'rock')
    ) {
        playerScore++;
        round++
        return `You win! ${computerSelection} loses to ${playerSelection}!`;
    } else {
        return `Please make a valid selection.`
    }
}

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playGame() {
    for (round; round < 6; ) {
        console.log("Round #" + round);
        console.log(playRound());
        }
    if (playerScore > computerScore) {
        console.log(`You win! The final score was Computer: ${computerScore} & Player: ${playerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose! The final score was Computer: ${computerScore} & Player: ${playerScore}`);
    } else if (computerScore == playerScore) {
        console.log(`It was a tie! The final score was Computer: ${computerScore} & Player: ${playerScore}!`);
    }
        } 


 