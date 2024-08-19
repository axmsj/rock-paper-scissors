// //Keep Score
let attempts = 0;
let humanScore = 0;
let computerScore = 0;

//Capitalize First Letter
function cap(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Function for humanChoice
function getHumanChoice() {
  //user input
  let question = prompt(`Pick: Rock, Paper, or Scissors`);
  let input = question.toLowerCase();
  //if input is incorrect repeat question
  while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
    alert('Enter a valid choice');
    question = prompt(`Pick: Rock, Paper, or Scissors`);
    input = question.toLowerCase();
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

//PlayRound Function
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('IT IS A TIE');
    console.log(
      `Your Choice: ${cap(humanChoice)} & Computer Choice: ${cap(
        computerChoice
      )}`
    );
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log('You lose! Paper Beats Rock');
    console.log(`Your Choice: Rock & Computer Choice: Paper`);
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You lose! Scissors beats Paper');
    console.log(`Your Choice: Paper & Computer Choice: Scissors`);
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You lose! Rock beats Scissors');
    console.log(`Your Choice: Scissors & Computer Choice: Rock`);
    computerScore++;
  } else {
    console.log(`You Win! ${cap(humanChoice)} beats ${cap(computerChoice)}`);
    humanScore++;
  }
}

// PlayGame Function
function playGame() {
  humanScore = 0;
  computerScore = 0;
  attempts = 0;

  //Invokes Function
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  for (let i = 0; i <= 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your Score: ${humanScore} | Computer Score ${computerScore}`);
  }

  //Final Result
  if (humanScore > computerScore) {
    console.log('FINAL RESULT: YOU WIN!!!');
  } else {
    console.log('FINAL RESULT: rocYOU LOSE');
  }
}

playGame();
