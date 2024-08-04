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

function getHumanChoice() {
    let humanChoice = prompt("Please enter a valid choice (Rock, Paper or Scissors)").toLowerCase();
    return(humanChoice);
}

function playGame() {
    // Score keeping
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == computerChoice) {
            console.log("It's a tie!")
        }
        else {
            switch(humanChoice) {
                case ("rock"):
                    if (computerChoice === "paper") {
                        console.log("You lose!");
                        computerScore++;
                    }
                    else if (computerChoice === "scissors") {
                        console.log("You win!");
                        humanScore++;
                    }
                    break;
                
                case ("paper"):
                    if (computerChoice === "scissors") {
                        console.log("You lose!");
                        computerScore++;
                    }
                    else if (computerChoice === "rock") {
                        console.log("You win!");
                        humanScore++;
                    }
                    break;
                
                case ("scissors"):
                    if (computerChoice === "rock") {
                        console.log("You lose!")
                        computerScore++;
                    }
                    else if (computerChoice === "paper") {
                        console.log("You win!")
                        humanScore++;
                    }
                    break;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
        console.log(`Human score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log("Human wins!")
    }
    else if (humanScore < computerScore) {
        console.log("Computer wins!")
    }
    else {
        console.log("It's a tie")
    }
}
playGame()