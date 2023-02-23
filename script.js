/* getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors */

/*  Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection
 - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock */

function playRound(playerSelection, computerSelection) {
  // your code here!
}

function getComputerChoice(choice) {
  // Define an array with the three options
  const options = ["Rock", "Paper", "Scissors"];

  //Define random output
  const randomIndex = Math.floor(Math.random() * 3);

  //Define computers choice
  const compChoice = options[randomIndex];

  return compChoice;
}

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
