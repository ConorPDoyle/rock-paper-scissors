const start = document.querySelector('#start');
const cards = document.querySelector('.cards');
const intro = document.querySelector('.intro');
const scoreboard = document.querySelector('.scoreboard');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    play(getComputerChoice(), 'Rock');
});
paper.addEventListener('click', () => {
    play(getComputerChoice(), 'Paper');
});
scissors.addEventListener('click', () => {
    play(getComputerChoice(), 'Scissors');
});

//UI

start.addEventListener('click', ()=> {
    start.classList.toggle('toggle');
    cards.classList.toggle('toggle');
    playReport.classList.toggle('toggle');
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

let playerScore = 0;
let computerScore = 0;
let round = 1;

function play (computerSelection, playerSelection) {

    if (computerSelection == playerSelection) {
        document.querySelector('h2').textContent = "Tie!";
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
        ) {
            computerScore++;
            round++
            document.querySelector('h2').textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ( 
        (computerSelection == 'Rock' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Rock')
    ) {
        playerScore++;
        round++
        document.querySelector('h2').textContent = `You win! ${computerSelection} loses to ${playerSelection}!`;
    } else {
        return `Please make a valid selection.`
    }

    document.querySelector('.comp-score').textContent = computerScore
    document.querySelector('.player-score').textContent = playerScore

    if (playerScore == 1 || computerScore == 1) {
        scoreboard.classList.remove('toggle'); //show scoreboard after a point is scored
    }

    if (playerScore == 5 || computerScore == 5) {
        endOfGame();
     } 
    
}

function endOfGame() {
    document.querySelector('h2').textContent = `GAME OVER!`;
    cards.classList.toggle('toggle');
    }