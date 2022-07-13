// UI
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const button = document.querySelector('.button');
const scoreInfo = document.getElementById('scoreInfo');
const scoreMsg = document.getElementById('scoreMessage');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');
let endGameModal = document.getElementById('endGameModal');
let endGameMsg = document.getElementById('endGameMsg');
let playerScoreCounter = document.getElementById('playerScore');
let computerScoreCounter = document.getElementById('computerScore');

// Variables
const rock = '✊';
const paper = '✋';
const scissors = '✌';
let shapes = [rock, paper, scissors];
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

/** The rule of the game function. It compares the shapes and 
determines the winner or it's tied */
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
        playerScore++
        roundWinner = 'player'
    }

    if (
        (computerSelection === rock && playerSelection === scissors) ||
        (computerSelection === paper && playerSelection === rock) ||
        (computerSelection ===  scissors && playerSelection === paper)
    ) 
    {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMsg(roundWinner, playerSelection, computerSelection);
}

/** This function shuffles or randomise the shapes in the array. 
then, the switch statement returns a specific shape that is 
choosen at random as the computerSelection.
*/
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

/** This function ensures that the game is over if the playerScore or
the computerScore is === 5 */
function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

/** This function displays a shape onto the screen when a button 
 representing the shape is clicked and also displays the shape which
 is randomly selected by the computer. */
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

/** This function updates the heading (scoreInfo ~ "Pick a shape") if a player wins or 
lose or when the game is tied. */
function updateScoreInfo() {
    if (roundWinner === 'tie') {
        scoreInfo.innerHTML = 'It\'s a tie game';
    } else if (roundWinner === 'player') {
        scoreInfo.innerHTML = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.innerHTML = 'You lost!'
    }
}

/** This function shows the winner of a round in the game. 
(scoreMessage ~ "First to score 5 points Wins") */
function updateScoreMsg(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMsg.innerHTML = `${playerSelection} beats ${computerSelection}`;
    } else if (winner === 'computer' ) {
        scoreMsg.innerHTML = `${playerSelection} beaten by ${computerSelection}`;
    } else {
        scoreMsg.innerHTML = `${playerSelection} ties with ${computerSelection}`;
    }
}

// Open Modal
function endGameModalPopUp() {
    endGameModal.classList.add('active');
    overlay.classList.add('active');
}

// Close Modal
function closeEndGameModal() {
    endGameModal.classList.remove('active');
    overlay.classList.remove('active');
}

/** Message on the pop up modal showing if a player 
won or lost the game */
function setFinalMsg() {
    if (playerScore > computerScore) {
        endGameMsg.innerHTML = 'You won!'
    } else {
        endGameMsg.innerHTML = 'You lost!'
    }
}
// function setFinalMsg() {
//     return playerScore > computerScore
//     ? (endgameMsg.innerHTML = 'You won!')
//     : (endGameMsg.innerHTML = 'You lost..')
// }


/** Resets scores, displayed messages and shapes to begin
a new game */
function restartGame() {
    closeEndGameModal();
    playerScore = 0;
    computerScore = 0;
    playerScoreCounter.innerHTML = `player: ${playerScore}`;
    computerScoreCounter.innerHTML = `computer: ${computerScore}`;
    scoreInfo.innerHTML = 'Pick a shape';
    scoreMsg.innerHTML = 'First to score 5 points wins'
    playerSign.innerHTML = 'X';
    computerSign.innerHTML = 'X';
}


/** BUTTONS EVENT ~ This function invoke several functions when a 
button on the screen is clicked */
function handleClick(playerSelection) {
    if (isGameOver()) {
        endGameModalPopUp()
        setFinalMsg()
        return;
    } 

    const computerSelection = computerRandomPlay();
    gameRules(playerSelection, computerSelection);
    updateSelection(playerSelection, computerSelection);
    updateScoreInfo();

    playerScoreCounter.innerHTML = `player: ${playerScore}`;
    computerScoreCounter.innerHTML = `computer: ${computerScore}`;
}

/** Event listeners ~ They triggers the handleClick function when
when a (rock or paper or scissors) is clicked button. */
rockBtn.addEventListener('click', () => handleClick(rock));
paperBtn.addEventListener('click', () => handleClick(paper));
scissorsBtn.addEventListener('click', () => handleClick(scissors));
restartBtn.addEventListener('click', restartGame);
// rockBtn.addEventListener('click', function() {
//     return handleClick(rock);
// })
