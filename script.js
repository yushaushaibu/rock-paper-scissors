// let items  = [78, 21, 7, 3];

// function randomItem(items) {
//     return items[Math.floor(Math.random() * items.length)];
// }
// console.log(randomItem(items))


const playerSign = document.getElementById('playerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');


const rock = '✊';
const paper = '✋';
const scissors = '✌';

// Display button sign
function rockSign() {
    return playerSign.innerHTML = rock;
}

function paperSign() {
    return playerSign.innerHTML = paper;
}

function scissorsSign() {
    return playerSign.innerHTML = scissors;
}

// Events
rockBtn.addEventListener('click', rockSign);
paperBtn.addEventListener('click', paperSign);
scissorsBtn.addEventListener('click', scissorsSign);

