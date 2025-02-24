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

const p = document.createElement("p");
p.style.color = "red"
p.textContent = "Hey I'm red!"

const h3 = document.createElement("h3")

h3.style.color = "blue"
h3.textContent = "I'm a blue h3"

const div = document.createElement("div")
div.style.backgroundColor= "pink"
div.style.borderColor = "black"

const h1 = document.createElement("h1")
const innerP = document.createElement('p')
innerP.textContent ="ME TOO!"
h1.textContent ="I'm a div"

div.appendChild(h1)
div.appendChild(innerP)
document.body.appendChild(div)


document.body.appendChild(p)
document.body.appendChild(h3)
let toggle = false
let count = 0
const button = document.getElementById("button")

function interact() {
    const div = document.getElementById("body text")
    toggle = !toggle
    if (toggle) {
        div.textContent = "button clicked content"
    }
    else {
        div.textContent = "This is the glorious text-content!"
    }
    count++
    if (count > 1) {
        button.textContent = `Clicked ${count} times`
    }
    else {
        button.textContent = `Clicked ${count} time`
    }
} 
button.addEventListener("click",interact)

// playGame()
// don't use innerHTML in javascript, use textContent