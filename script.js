/*
Constants
1. Array of choices
2. Array of round results
*/
const CHOICES = ["rock", "paper", "scissors"];
const RESULTS = ["player", "computer", "draw"];

/*
Generate opponent's choice
1. Get a random number 0 to 3
2. Show opponent's choice
*/
function getComputerChoice() {
  const opponentChoice = Math.floor(Math.random() * 3);
  console.log(`Computer chose ${CHOICES[opponentChoice]}`);
  return opponentChoice;
}

/*
Get player choice
1. Prompt for player choice
2. Evaluate & lowercase
3. Player choice = indexOf()
*/
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

/*
Compare choices
1. If === then draw
2. If 0 && 1 then 1 wins
3. If 0 && 2 then 0 wins
4. If 1 && 2 then 2 wins
5. Show winner 
6. Return winner
*/
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

/*
Play 1 round of Rock Paper Scissors
1. Call player choice
2. Call computer choice
3. Call compare choices
4. Save round results
*/
function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  return compareChoices(playerChoice, computerChoice);
}

/*
Match function 5 rounds
0. declare results array
Removed: Loop round function 5 times
2. Push results to an array
3. Evaluate array to get winner
4. Show winner
*/
function playGame() {
  const gameResults = [];
  gameResults.push(playRound());

  let result = gameResults.reduce(function (points, count) {
    if (count in points) {
      points[count]++;
    } else {
      points[count] = 1;
    }
    return points;
  }, {});

  if (result[1] == undefined || result[0] > result[1]) {
    console.log(`${RESULTS[0]} wins!`);
  } else if (result[0] == undefined || result[0] < result[1]) {
    console.log(`${RESULTS[1]} wins!`);
  } else {
    console.log(`It's a draw!`);
  }
}

const btnRock = document.createElement("button");
btnRock.id = "rock";
btnRock.textContent = "Rock";

const btnPaper = document.createElement("button");
btnPaper.id = "paper";
btnPaper.textContent = "Paper";

const btnScissors = document.createElement("button");
btnScissors.id = "scissors";
btnScissors.textContent = "Scissors";

let controls = document.querySelector(".controls");
controls.append(btnRock, btnPaper, btnScissors);

controls.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      console.log("Rock control was clicked");
      break;
    case "paper":
      console.log("Paper control was clicked");
      break;
    case "scissors":
      console.log("Scissors control was clicked");
      break;
  }
});
