// //Keep Score
let humanScore = 0;
let computerScore = 0;

function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//Select Btns
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const resetBtn = document.querySelector('#resetBtn');

//const DOM
const roundResults = document.querySelector('#roundResults');
const roundChoices = document.querySelector('#roundChoices');
const scores = document.querySelector('#scores');
const gameResults = document.querySelector('#gameResults');

//playerSelection
function playerSelection() {
  rockBtn.addEventListener('click', (e) => {
    playRound('rock', getComputerChoice());
    displayRoundResult();
  });

  paperBtn.addEventListener('click', (e) => {
    playRound('paper', getComputerChoice());
    displayRoundResult();
  });

  scissorsBtn.addEventListener('click', (e) => {
    playRound('scissors', getComputerChoice());
    displayRoundResult();
  });

  resetBtn.addEventListener('click', (e) => {
    humanScore = 0;
    computerScore = 0;
    rockBtn.removeAttribute('disabled');
    paperBtn.removeAttribute('disabled');
    scissorsBtn.removeAttribute('disabled');
    roundResults.innerText = '';
    roundChoices.innerText = '';
    scores.innerText = '';
    gameResults.innerText = '';
  });
}

// Function that randomly picks an option for computer
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * 3);
  let computerChoice = options[random];
  return computerChoice;
}

//PlayRound Function
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundResults.innerText = 'ITS A TIE';
    roundChoices.innerText = `Your Choice: ${cap(humanChoice)} & Computer Choice: ${cap(computerChoice)}`;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    roundResults.innerText = 'You Lose! Paper Beats Rock';
    roundChoices.innerText = `Your Choice: Rock & Computer Choice: Paper`;
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    roundResults.innerText = 'You Lose! Scissors beats Paper';
    roundChoices.innerText = `Your Choice: Paper & Computer Choice: Scissors`;
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    roundResults.innerText = 'You Lose! Rock beats Scissors';
    roundChoices.innerText = `Your Choice: Scissors & Computer Choice: Rock`;
    computerScore++;
  } else {
    roundResults.innerText = `You WIN!`;
    roundChoices.innerText = `Your Choice: ${cap(humanChoice)} & Computer Choice: ${cap(computerChoice)}`;
    humanScore++;
  }
  if (humanScore >= 5 || computerScore >= 5) {
    displayFinalResult();
  }
}

function displayRoundResult() {
  scores.innerText = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}

function displayFinalResult() {
  if (humanScore > computerScore) {
    gameResults.innerText = 'FINAL RESULT: YOU WIN!!!';
  } else {
    gameResults.innerText = 'FINAL RESULT: YOU LOSE';
  }
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// PlayGame Function
playerSelection();
