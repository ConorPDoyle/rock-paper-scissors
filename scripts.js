const start = document.querySelector('#start');
const choices = document.querySelector('.choices');
const cards = document.querySelectorAll('.card');
const intro = document.querySelector('.intro');
const lastRound = document.querySelector('.last-round');
const laRoText = document.querySelector('#last-round-text')
const scoreboard = document.querySelector('.scoreboard');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerSelection = '';
rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    play(getComputerChoice(), playerSelection);
    lastRound.classList.remove('toggle');
    cards.forEach(card => {
        card.classList.remove('click');
    })
    rock.classList.add('click');
});
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    play(getComputerChoice(), playerSelection);
    lastRound.classList.remove('toggle');
    cards.forEach(card => {
        card.classList.remove('click');
    })
    paper.classList.add('click');
});
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    play(getComputerChoice(), playerSelection);
    lastRound.classList.remove('toggle');
    cards.forEach(card => {
        card.classList.remove('click');
    })
    scissors.classList.add('click');
});

//UI

start.addEventListener('click', ()=> {
    start.classList.toggle('toggle');
    choices.classList.toggle('toggle');
    intro.classList.toggle('toggle');
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
    //GAME LOGIC
    if (computerSelection == playerSelection) {
        laRoText.textContent = `The computer played ${computerSelection}`;
        document.querySelector('h2').textContent = "Tie!";
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
        ) {
            computerScore++;
            round++
            laRoText.textContent = `The computer played ${computerSelection}`;
            document.querySelector('h2').textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ( 
        (computerSelection == 'Rock' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Rock')
    ) {
        playerScore++;
        round++
        laRoText.textContent = `The computer played ${computerSelection}`;
        document.querySelector('h2').textContent = `You win! ${computerSelection} loses to ${playerSelection}!`;
    } else {
        return `Please make a valid selection.`
    }
    //SHOW SCORE ON SCOREBOARD
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