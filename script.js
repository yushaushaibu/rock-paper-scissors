// UI
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const button = document.querySelector('.button');
const scoreInfo = document.getElementById('scoreInfo');
const scoreMsg = document.getElementById('scoreMessage');

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
        roundWinner = 'tie'
    }

    if (
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) ||
        (playerSelection === scissors && computerSelection === paper)
    ) 
    {
        player++
        roundWinner = 'player'
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
    updateScoreMsg(roundWinner, playerSelection, computerSelection);
}

// computer random Play
function computerRandomPlay(){
    let randomShapes = Math.floor(Math.random() * shapes.length);
    switch(randomShapes) {
        case 0:
            return rock;
        case 1: 
            return paper;
        case 2: 
            return scissors;
    }
}

// function computerRandomPlay() {
//     let randomShapes = Math.floor(Math.random() * shapes.length);
//     if(randomShapes === 0) {
//         return rock;
//     } else if (randomShapes === 1) {
//         return paper;
//     } else if (randomShapes === 2) {
//         return scissors;
//     }
// }

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

// function updateSelection(playerSelection, computerSelection) {
//     if (playerSelection === rock) {
//         playerSign.innerHTML = rock;
//     } else if (playerSelection === paper) {
//         playerSign.innerHTML = paper;
//     } else if (playerSelection === scissors) {
//         playerSign.innerHTML = scissors;
//     }

//     if (computerSelection === rock) {
//         computerSign.innerHTML = rock;
//     } else if (computerSelection === paper) {
//         computerSign.innerHTML = paper
//     } else if (computerSelection === scissors) {
//         computerSign.innerHTML = scissors
//     }
// }

// heading update (score info)
function updateScoreInfo() {
    if (roundWinner === 'tie') {
        scoreInfo.innerHTML = 'It\'s a tie game';
    } else if (roundWinner === 'player') {
        scoreInfo.innerHTML = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.innerHTML = 'You lost!'
    }
}

// update Score Message
function updateScoreMsg(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMsg.innerHTML = `${playerSelection} beats ${computerSelection}`;
    } else if (winner === 'computer' ) {
        scoreMsg.innerHTML = `${playerSelection} beaten by ${computerSelection}`;
    } else {
        scoreMsg.innerHTML = `${playerSelection} ties with ${computerSelection}`;
    }
}

// capitalize first letter
function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


// buttons events
function handleClick(playerSelection) {
    const computerSelection = computerRandomPlay();
    gameRules(playerSelection, computerSelection);
    updateSelection(playerSelection, computerSelection);
    updateScoreInfo();
}

// event listeners
rockBtn.addEventListener('click', () => handleClick(rock));
paperBtn.addEventListener('click', () => handleClick(paper));



// rockBtn.addEventListener('click', function() {
//     return handleClick(rock);
// })
