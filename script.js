const resultsDiv = document.querySelector("#results");
const resultSpan = resultsDiv.firstElementChild;

const humanScoreBoard = document.querySelector("#humanScore");
const computerScoreBoard = document.querySelector("#computerScore");
const winnerBoard = document.querySelector("#winner");
const computerPick = document.querySelector("#computerPick");

const winnerLoserPopup = document.querySelector(".alert-box");

const finalText = document.querySelector("#finalText");
const finalEmoji = document.querySelector("#finalEmoji");


winnerLoserPopup.classList.add("display-none");

// Getting choices from either contestants
function getComputerChoice() {
  let choices = {
    0: "rock",
    1: "paper",
    2: "scissors",
  };

  let max = 3;
  let randomNumber = Math.floor(Math.random() * max);

  let randomChoice = choices[randomNumber];
  return randomChoice;
}

// Score keeping
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  winnerBoard.textContent = null;
  if (humanChoice == computerChoice) {
    resultSpan.textContent = "Tie!";
    computerPick.textContent = "👔";


  } else {
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "paper") {
          resultSpan.textContent = "You Lose!";
          computerPick.textContent = "✋";
          computerScore++;
        } else if (computerChoice === "scissors") {
          resultSpan.textContent = "You Win!";
          computerPick.textContent = "✌️";
          humanScore++;
        }
        break;

      case "paper":
        if (computerChoice === "scissors") {
          resultSpan.textContent = "You Lose!";
          computerPick.textContent = "✌️";
          computerScore++;
        } else if (computerChoice === "rock") {
          resultSpan.textContent = "You Win!";
          computerPick.textContent = "✊";
          humanScore++;
        }
        break;

      case "scissors":
        if (computerChoice === "rock") {
          resultSpan.textContent = "You Lose!";
          computerPick.textContent = "✊";
          computerScore++;
        } else if (computerChoice === "paper") {
          resultSpan.textContent = "You Win!";
          computerPick.textContent = "✋";
          humanScore++;
        }
        break;
    }
    humanScoreBoard.textContent = humanScore;
    computerScoreBoard.textContent = computerScore;
  }
  if (humanScore === 5) {
    winnerBoard.textContent = "Human Wins!";
    humanScore = 0;
    computerScore = 0;
    winnerLoserPopup.classList.remove("display-none");
    finalText.textContent = "You Win!";
    finalEmoji.textContent = "😊";

  } else if (computerScore === 5) {
    winnerBoard.textContent = "CPU Wins!";
    humanScore = 0;
    computerScore = 0;
    winnerLoserPopup.classList.remove("display-none");
    finalText.textContent = "You Lose!";
    finalEmoji.textContent = "😔";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "rockButton":
        playRound("rock", getComputerChoice());
        break;

      case "paperButton":
        playRound("paper", getComputerChoice());
        break;

      case "scissorsButton":
        playRound("scissors", getComputerChoice());
        break;
    }
  });
});

function newGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreBoard.textContent = humanScore;
  computerScoreBoard.textContent = computerScore;
  winnerLoserPopup.classList.add("display-none");
}