const resultsDiv = document.querySelector("#results");
const resultSpan = resultsDiv.firstElementChild;

const humanScoreBoard = document.querySelector("#humanScore");
const computerScoreBoard = document.querySelector("#computerScore");



// Getting choices from either contestants
function getComputerChoice() {
    let choices = {
        0: "rock",
        1: "paper",
        2: "scissors"
    }

    let max = 3;
    let randomNumber = Math.floor(Math.random() * max)

    let randomChoice = choices[randomNumber];
    return(randomChoice);
}

// Score keeping
let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    humanScoreBoard.textContent = humanScore;
    computerScoreBoard.textContent = computerScore;

        if (humanChoice == computerChoice) {
            resultSpan.textContent = "Tie!"
        }
        else {
            switch(humanChoice) {
                case ("rock"):
                    if (computerChoice === "paper") {
                        resultSpan.textContent = "You Lose!"
                        computerScore++;
                    }
                    else if (computerChoice === "scissors") {
                        resultSpan.textContent = "You Win!"
                        humanScore++;
                    }
                    break;
                
                case ("paper"):
                    if (computerChoice === "scissors") {
                        resultSpan.textContent = "You Lose!"
                        computerScore++;
                    }
                    else if (computerChoice === "rock") {
                        resultSpan.textContent = "You Win!"
                        humanScore++;
                    }
                    break;
                
                case ("scissors"):
                    if (computerChoice === "rock") {
                        resultSpan.textContent = "You Lose!"
                        computerScore++;
                    }
                    else if (computerChoice === "paper") {
                        resultSpan.textContent = "You Win!"
                        humanScore++;
                    }
                    break;
            }
        }
    }


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id) {
            case("rockButton"):
                playRound("rock", getComputerChoice());
                break;

            case("paperButton"): 
                playRound("paper", getComputerChoice());
                break;
            
            case("scissorsButton"): 
                playRound("scissors", getComputerChoice());
                break;
        }
    })
})
