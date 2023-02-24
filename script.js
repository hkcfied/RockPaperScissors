/* getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors */

function getComputerChoice() {
  // Define an array with the three options
  const options = ["Rock", "Paper", "Scissors"];

  //Define random output
  const randomIndex = Math.floor(Math.random() * 3);

  //Define computers choice
  const compChoice = options[randomIndex];

  //alert(compChoice);
  //console.log(playerSelection, computerSelection);
  return compChoice;
}

let playerSelection;
let computerSelection;
let result;

function getPlayerChoice() {
  //get Player Choice from HTML
  const playerChoice = document.getElementById("playerOption").value;

  //alert(playerChoice);
  //return playerChoice;

  playerSelection = playerChoice;
  computerSelection = getComputerChoice();
  //alert(playerSelection + " " + computerSelection);
  result = playRound(playerSelection, computerSelection);
  //alert(result);
  if (result == 2)
    alert(
      `It's a Draw! You Chose ${playerSelection} and Computer also Chose ${computerSelection}`
    );
  else if (result == 1)
    alert(
      `You Win! You Chose ${playerSelection} and Computer Chose ${computerSelection}`
    );
  else if (result == 0)
    console.log(
      `You Lose! You Chose ${playerSelection} and Computer Chose ${computerSelection}`
    );
}

function playRound(playerSelection, computerSelection) {
  //alert("Im In");
  if (playerSelection == computerSelection) {
    return 2;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return 1;
  } else {
    return 0;
  }
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const currentPoints = document.getElementById("currentPoints");
const whoChoseWhat = document.getElementById("whoChoseWhat");
const whoWon = document.getElementById("whoWon");
const finalWinner = document.getElementById("finalWinner");

rockButton.addEventListener("click", playRound("Rock", computerSelection));
paperButton.addEventListener("click", playRound("Paper", computerSelection));
scissorsButton.addEventListener(
  "click",
  playRound("Scissors", computerSelection)
);

/*  Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection
 - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock */

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
