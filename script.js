/*
Constants
1. Array of choices
2. Array of round results
*/
const CHOICES = ["rock", "paper", "scissors"];
const RESULTS = ["player", "computer", "draw"];
let gameResults = [0, 0];

/*
Generate opponent's choice
1. Get a random number 0 to 3
2. Display opponent's choice
3. Return opponent's choice
*/
function getComputerChoice() {
  const opponentChoice = Math.floor(Math.random() * 3);
  let computerChoiceDisplay = document.createElement("div");
  computerChoiceDisplay.textContent = `Computer chose ${CHOICES[
    opponentChoice
  ].toUpperCase()}`;
  choicesDisplay.appendChild(computerChoiceDisplay);
  return opponentChoice;
}

/*
Get player choice - DEPRECATED with UI
1. Prompt for player choice
2. Evaluate & lowercase
3. Player choice = indexOf() - Moved to playRound()
*/

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
  let roundResultDisplay = document.createElement("div");

  if (playerSelection === computerSelection) {
    roundResultDisplay.textContent = `It's a draw!`;
    results.appendChild(roundResultDisplay);
    roundResult = 2;
  } else if (
    (playerSelection === 0 && computerSelection === 1) || // rock vs. paper
    (playerSelection === 1 && computerSelection === 2) || // paper vs. scissors
    (playerSelection === 2 && computerSelection === 0) // scissors vs. rock
  ) {
    roundResultDisplay.textContent = `Computer wins this round!`;
    results.appendChild(roundResultDisplay);
    roundResult = 1;
  } else {
    roundResultDisplay.textContent = `Player wins this round!`;
    results.appendChild(roundResultDisplay);
    roundResult = 0;
  }
  return roundResult;
}

/*
REFACTORED: Play 1 round of Rock Paper Scissors
1. Display player choice
2. Call computer choice
3. Call choices comparison & pass to progress game
*/
function playRound(choice) {
  const playerChoice = CHOICES.indexOf(choice);
  let playerChoiceDisplay = document.createElement("div");
  playerChoiceDisplay.textContent = `You chose ${choice.toUpperCase()}`;
  choicesDisplay.appendChild(playerChoiceDisplay);
  const computerChoice = getComputerChoice();
  progressGame(compareChoices(playerChoice, computerChoice));
}

/*
REFACTORED: playGame => Progress game
Count 5 points
Moved to global: Declare results array
Removed: Loop round function 5 times
1. Push results to an array & reset round divs
  if gameResults[0] < 5 or gameResults[1] < 5 {
  2. Evaluate array to get winner
  3. Show winner
  4. reset game 
  }
*/
function progressGame(roundResult) {
  if (roundResult == 0) gameResults[0] += 1;
  else if (roundResult == 1) gameResults[1] += 1;

  scoreDisplay.textContent = `Player: ${gameResults[0]} vs. Computer: ${gameResults[1]}`;

  if (gameResults[0] == 5 || gameResults[1] == 5) {
    if (gameResults[0] == 5) {
      gameResultDisplay.textContent = `Player wins!`;
    } else if (gameResults[1] == 5) {
      gameResultDisplay.textContent = `Computer wins!`;
    } else {
      gameResultDisplay.textContent(`A perfect draw! Impossible...`);
    }

    scoreDisplay = `Player: ${gameResults[0]} vs. Computer: ${gameResults[1]}`;
    choicesDisplay.replaceWith(scoreDisplay);
    results.replaceWith(gameResultDisplay);
    /*     controls.setAttribute("style", "pointer-events: none; opacity: 0.4;");
    to disable buttons */
    let btnReset = document.createElement("button");
    btnReset.id = "reset";
    controls.replaceChildren(btnReset);
    btnReset.addEventListener("click", (event) => {
      location.reload();
    });
  }
}

const btnRock = document.createElement("button");
btnRock.id = "rock";

const btnPaper = document.createElement("button");
btnPaper.id = "paper";

const btnScissors = document.createElement("button");
btnScissors.id = "scissors";

let controls = document.querySelector(".controls");
controls.append(btnRock, btnPaper, btnScissors);

controls.addEventListener("click", (event) => {
  choicesDisplay.replaceChildren();

  if (results.hasChildNodes()) {
    results.replaceChildren(scoreDisplay);
  }
  let target = event.target;
  playRound(target.id);
});

let results = document.querySelector(".results");
let choicesDisplay = document.querySelector(".choices");
let gameResultDisplay = document.createElement("div");
let scoreDisplay = document.createElement("div");
