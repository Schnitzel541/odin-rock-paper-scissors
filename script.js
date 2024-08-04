let winningMessage = "You Win!"
let losingMessage = "You lose!"

let rpsValues = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
}


const getComputerChoice = () => {
    let max = 3;
    let computerRandomChoice = Math.floor(Math.random() * max)
    return rpsValues[computerRandomChoice];
}


const getHumanChoice = () => {
    let computerChoice = getComputerChoice()
    let humanChoice = prompt("Please enter a valid choice (Rock, Paper or Scissors)")

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    else {
    switch(humanChoice) {
        
        case("Rock" || "rock"):
        if (computerChoice === "Paper") {
            console.log(losingMessage) }
        if (computerChoice === "Scissors") {
            console.log(winningMessage) }
            break

        case("Paper" || "paper"):
        if (computerChoice === "Scissors") {
            console.log(losingMessage) }
        if (computerChoice == "Rock") {
            console.log(winningMessage) }
            break

        case("Scissors" || "scissors"):
        if (computerChoice === "Rock") {
            console.log(losingMessage) }
        if (computerChoice === "Paper") {
            console.log(winningMessage) }
            break
        default:
            alert("Please pick a valid option")
            computerChoice = "-"
            getHumanChoice();
        }
    }
    console.log(`The computer picked: ${computerChoice}`)
}

getHumanChoice();