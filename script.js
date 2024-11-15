

function getHumanChoice(input) {
    if (input === "rock") {
        return 0;
    }
    else if (input === "paper") {
        return 1;
    }
    else if (input === "scissors") {
        return 2;
    }
    else return -1;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


function playRound(computerChoice, humanChoice) {
    if ((computerChoice === 0 && humanChoice === 2)|| (computerChoice === 1 && humanChoice == 0) || (computerChoice === 2 && humanChoice === 1)) {
        alert("Computer Wins this round")
        return 0;
    }
    else if ((computerChoice === 2 && humanChoice === 0)|| (computerChoice === 0 && humanChoice == 1) || (computerChoice === 1 && humanChoice === 2)){
        alert("User Wins this round")
        return 1;
    }
    else {
        alert("draw")
        return 2;
    }
}

function playGame() {
    let humanScore, computerScore, input;
    humanScore = computerScore = 0;
    for (let round = 1; round <= 5; ) {
        
        input = prompt("User enter rock, paper, or scissors");
        input = input.toLowerCase()
        const humanChoice = getHumanChoice(input)
        if (humanChoice === -1) {
            alert("Please enter a valid choice.");
            continue;
        }
        const computerChoice = getComputerChoice()
        const result = playRound(computerChoice, humanChoice)
        if (result === 0){
            computerScore++;
        }
        else if (result === 1) {
            humanScore++;
        }
        else {
            computerScore++;
            humanScore++;
        }
        console.log("Computer Choice: " + computerChoice)
        alert("User: " + humanScore + " " + "Computer: " + computerScore);
        round++
    }
    if (humanScore > computerScore) {
        alert("Congratulations!!! You win!");
    }
    else if (computerScore > humanScore) {
        alert("You lost :(");
    }
    else {
        alert("Looks like its a tie bucko. Peepee");
    }
}
playGame()