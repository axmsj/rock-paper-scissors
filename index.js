//Keep Score
let humanScore = 0;
let computerScore = 0;

// Function for humanChoice
function getHumanChoice() {
  //user input
  let input = prompt(`Pick: Rock, Paper, or Scissors`).toLowerCase();

  //if input is incorrect repeat question
  while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
    alert('Enter a valid choice');
    input = prompt(`Pick: Rock, Paper, or Scissors`).toLowerCase();
  }

  return input;
}

// computer options
const options = ['rock', 'paper', 'scissors'];

//  Function that randomly picks a option
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = options[random];
  return computerChoice;
}

//Invokes Function, but are arguments
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//PlayRound Function
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('IT IS A TIE');
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log('You lose! Paper Beats Rock');
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You lose! Scissors beats Paper');
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You lose! Rock beats Scissors');
    computerScore++;
  } else {
    console.log(
      `You Win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${
        computerChoice[0].toUpperCase() + computerChoice.slice(1)
      }`
    );
    humanScore++;
  }
}

//Play One Round
// playRound(humanSelection, computerSelection);

// PlayGame Function
function playGame() {}
