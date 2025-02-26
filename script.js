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
        return 0;
    }
    else if ((computerChoice === 2 && humanChoice === 0)|| (computerChoice === 0 && humanChoice == 1) || (computerChoice === 1 && humanChoice === 2)){
        return 1;
    }
    else {
        return 2;
    }
}

function playGame() {
    let humanScore, computerScore, input;
    humanScore = computerScore = 0;
    
    const rock = document.getElementById("rock")
    rock.addEventListener("click", function() {
        input = 0
    })
    
    const paper = document.getElementById("paper")
    paper.addEventListener("click", function() {
        input = 1
    })

    const scissors = document.getElementById("scissors")
    scissors.addEventListener("click", function() {
        input = 2
    })
    
    const computerChoice = getComputerChoice()
    const res = playRound(computerChoice, input)
    console.log(input)
    const div = document.createElement("div")
    if (res == 0) {
        div.textContent = "Congratulations!!! You win!"
    }
    else if (res == 1) {
        div.textContent = "You lost :("
    }
    else {
        div.textContent = "draw"
    }
}



playGame()
// don't use innerHTML in javascript, use textContent