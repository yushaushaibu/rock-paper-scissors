// UI
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const button = document.querySelector('.button');
const scoreInfo = document.getElementById('scoreInfo');
const scoreMsg = document.getElementById('scoreMessage');
console.log(scoreMessage);

// variables
const rock = '✊';
const paper = '✋';
const scissors = '✌';
let shapes = [rock, paper, scissors];
let player = 0;
let computer = 0;
let roundWinner = '';

// rules of the game
function gameRules(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }

    if (
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) ||
        (playerSelection === scissors && computerSelection === paper)
    ) 
    {
        player++
        roundWinner = 'player';
    }

    if (
        (computerSelection === rock && playerSelection === scissors) ||
        (computerSelection === paper && playerSelection === rock) ||
        (computerSelection ===  scissors && playerSelection === paper)
    ) 
    {
        computer++
        roundWinner = 'computer'
    }
    // updateScoreMsg(roundWinner, playerSelection, computerSelection);
}

// Computer random Play
// function computerRandomPlay(){
//     let randomShapes = Math.floor(Math.random() * shapes.length);
//     switch(randomShapes) {
//         case 0:
//             return rock;
//         case 1: 
//             return paper;
//         case 2: 
//             return scissors;
//     }
// }

function computerRandomPlay() {
    let randomShapes = Math.floor(Math.random() * shapes.length);
    if(randomShapes === 0) {
        return rock;
    } else if (randomShapes === 1) {
        return paper;
    } else if (randomShapes === 2) {
        return scissors;
    }
}

// update selection
function updateSelection(playerSelection, computerSelection) {
    switch(playerSelection) {
        case rock:
            playerSign.innerHTML = rock;
            break;
        case paper:
            playerSign.innerHTML = paper;
            break;
        case scissors:
            playerSign.innerHTML = scissors;
    }

    switch(computerSelection) {
        case rock:
            computerSign.innerHTML = rock;
            break;
        case paper:
            computerSign.innerHTML = paper;
            break;
        case scissors:
            computerSign.innerHTML = scissors;
    }
}

// Heading update (score info)
function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.innerHTML = 'It\'s a tie game';
    } else if (roundWinner === 'player') {
        scoreInfo.innerHTML = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.innerHTML = 'You lost!'
    }
}

// update Score Message
function updateScoreMsg() {
    if (roundWinner === 'tie') {
        scoreMessage.innerHTML 
    }

}

// buttons events
function handleClick(playerSelection) {
    const computerSelection = computerRandomPlay();
    gameRules(playerSelection, computerSelection);
    updateSelection(playerSelection, computerSelection);
    updateScore();
}

rockBtn.addEventListener('click', () => handleClick(rock));

