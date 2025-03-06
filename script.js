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


function playGame(humanChoice) {
    const computerChoice = getComputerChoice()
    const res = playRound(computerChoice, humanChoice)
    const div = document.getElementById("result")
    const reset = document.createElement("button")
    div.appendChild(reset)
    div.style.color = "white"
    // alert(`Computer Chose ${computerChoice}`)
    if (res == 0) {
        div.textContent = "Congratulations!!! You win!"
        div.style.backgroundColor = "rgb(19, 198, 31)"
    }
    else if (res == 1) {
        div.textContent = "You lost :("
        div.style.backgroundColor = "rgb(215, 80, 80)"
    }
    else {
        div.style.backgroundColor = "white"
        div.textContent = "draw"
        div.style.color = "black"
    }
    
    // not super clear on what appendChild does but from what I understand it just adds
    // playAgain to the HTML dynamically
   
    // on click play Again would get rid of the win/lose Javascript and get back to the plain page
}
// don't use innerHTML in javascript, use textContent



const rock = document.getElementById("rock")
rock.addEventListener("click", () => playGame(0))

const paper = document.getElementById("paper")
paper.addEventListener("click", () =>playGame(1))

const scissors = document.getElementById("scissors")
scissors.addEventListener("click", () =>playGame(2))
