// getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const currentPoints = document.getElementById("currentPoints");
const whoChoseWhat = document.getElementById("whoChoseWhat");
const whoWon = document.getElementById("whoWon");
const finalWinner = document.getElementById("finalWinner");

rockButton.addEventListener("click", function () {
  playRound("Rock");
});
paperButton.addEventListener("click", function () {
  playRound("Paper");
});
scissorsButton.addEventListener("click", function () {
  playRound("Scissors");
});

function getComputerChoice() {
  // Define an array with the three options
  const options = ["Rock", "Paper", "Scissors"];

  //Define random output
  const randomIndex = Math.floor(Math.random() * 3);

  //Define computers choice
  const compChoice = options[randomIndex];

  return compChoice;
}

let playerSelection;
let computerSelection;
let result;
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  roundCount++;
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    result = 2;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    result = 1;
    playerScore++;
  } else {
    result = 0;
    computerScore++;
  }

  updatePage(playerSelection, computerSelection);
}

function updatePage(playerSelection, computerSelection) {
  if (result == 2) whoWon.textContent = `It's a Draw!`;
  else if (result == 1) whoWon.textContent = `You Win!`;
  else if (result == 0) whoWon.textContent = `You Lose!`;
  whoChoseWhat.textContent = `You Chose ${playerSelection} and Computer Chose ${computerSelection}`;
}
