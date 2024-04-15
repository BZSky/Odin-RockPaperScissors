/*

Constants
1. Array of choices
2. Array of round results

Functions:
Generate opponent's choice
1. Get a random number 0 to 3
2. Show opponent's choice


Get player choice
1. Prompt for player choice
2. Evaluate & lowercase
3. Player choice = indexOf()

Compare choices
1. If === then draw
2. If 0 && 1 then 1 wins
3. If 0 && 2 then 0 wins
4. If 1 && 2 then 2 wins
5. Show winner 
6. Return winner

Play 1 round of Rock Paper Scissors
1. Call player choice
2. Call computer choice
3. Call compare choices
4. Save round results

Match function 5 rounds
1. Loop round function 5 times
2. Push results to an array
3. Evaluate array to get winner
4. Show winner
5. Reset game
*/

const CHOICES = ["rock", "paper", "scissors"];
const RESULTS = ["player", "computer", "draw"];

function getComputerChoice() {
  const opponentChoice = Math.floor(Math.random() * 3);
  console.log(`Computer chose ${CHOICES[opponentChoice]}`);
  return opponentChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose rock, paper or scissors");
  if (playerChoice) {
    playerChoice.toLowerCase();
    console.log(`You chose ${playerChoice}`);
  } else {
    playerChoice = prompt("Please enter rock, paper or scissors").toLowerCase();
    console.log(`You chose ${playerChoice}`);
  }
  return CHOICES.indexOf(playerChoice);
}

function compareChoices(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === computerSelection) {
    console.log(`It's a draw!`);
    roundResult = 2;
  } else if (
    (playerSelection === 0 && computerSelection === 1) || // rock vs. paper
    (playerSelection === 1 && computerSelection === 2) || // paper vs. scissors
    (playerSelection === 2 && computerSelection === 0) // scissors vs. rock
  ) {
    console.log(`Computer wins this round!`);
    roundResult = 1;
  } else {
    console.log(`Player wins this round!`);
    roundResult = 0;
  }
  return roundResult;
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  return compareChoices(playerChoice, computerChoice);
}
