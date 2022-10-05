//game start
let userScore = 0;
let compScore = 0;
let roundNum = 1;
let gameWinner = "";

let resultsArray = [];


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let player = document.querySelector(".user-score");
let computer = document.querySelector(".computer-score");

let container = document.querySelector('#results-container');

let reset = document.querySelector("#reset");

// let modal = document.querySelector(".modal");
// let modalClose = document.querySelector("#close");


//comp choice 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    return options = options[Math.floor(Math.random() * options.length)];
}


//change color after mouse hover
rock.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#ffb900";
});
paper.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#ffb900";
});
scissors.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#ffb900";
});


//color change after mouse hover remove
rock.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "#363636";
});
paper.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "#363636";
});
scissors.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "#363636";
});


//button click to play game
rock.addEventListener("click", () => {
    playRound("rock")
});
paper.addEventListener("click", () => {
    playRound("paper")
});
scissors.addEventListener("click", () => {
    playRound("scissors")
});


//BUTTON CLICK TO RESET GAME (page refresh)
// reset.addEventListener("click", () => {
//     resetGame();
// });
reset.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#ffb900";
});
reset.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "white";
});

//page refresh
function refreshPage() {
    window.location.reload(true);
}
reset.addEventListener('click', refreshPage);


// function gameLog() {
//     let li = document.createElement('li');
//     li.textContent = resultsArray['${resultsArray.length -1}'];
//     li.textContent = container;
// }




//Choices to see who wins
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (userScore < 5 && compScore < 5) {
        //rock choice
        if (playerSelection == "rock" && computerSelection == "scissors") {
            userScore++;
            // resultsArray.push(`You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${userScore} - ${compScore}.`);
            player.textContent = userScore;
            container.textContent = `You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${userScore} - ${compScore}.`;
            endGame();
            roundNum++;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            compScore++;
            // resultsArray.push(`You lost round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${userScore} - ${compScore}.`);
            computer.textContent = compScore;
            container.textContent = `You lost round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${userScore} - ${compScore}.`;
            endGame();
            roundNum++;
            return "You Lose! Paper beats Rock";
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            // resultsArray.push(`Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`);
            container.textContent = `Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`;
            roundNum++;
        }

        //Paper Choice
        else if (playerSelection == "paper" && computerSelection == "rock") {
            userScore++; //move userScore above return
            // resultsArray.push(`You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${userScore} - ${compScore}.`);
            player.textContent = userScore;
            container.textContent = `You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${userScore} - ${compScore}.`;
            endGame();
            roundNum++
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            compScore++; //move compScore above return
            // resultsArray.push(`You lost round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${userScore} - ${compScore}.`);
            computer.textContent = compScore;
            container.textContent = `You lost round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${userScore} - ${compScore}.`;
            endGame();
            roundNum++
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            // resultsArray.push(`Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`);
            container.textContent = `Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`;
            roundNum++

        }
        //Scissors Choice
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            userScore++; //move userScore above return
            // resultsArray.push(`You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${userScore} - ${compScore}.`);
            player.textContent = userScore;
            container.textContent = `You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${userScore} - ${compScore}.`;
            endGame();
            roundNum++
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            compScore++; //move compScore above return
            // resultsArray.push(`You lost round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${userScore} - ${compScore}.`);
            computer.textContent = compScore;
            container.textContent = `You lost round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${userScore} - ${compScore}.`;
            endGame();
            roundNum++
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            // resultsArray.push(`Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`);
            container.textContent = `Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`;
            roundNum++
        } else {
            return "Not an option";
        }
    }
    gameLog();
}

function endGame() {
    if (userScore >= 5) {
        gameWinner = "You did it you were first to 5!!"
        modalContainer.style.display = "block"
        modal.insertAdjacentHTML("beforeend", `${gameWinner}`);
    } else if
        (compScore >= 5) {
        gameWinner = "You Lose! Better luck next time!"
        modalContainer.style.display = "block";
        modal.insertAdjacentHTML("beforeend", `${gameWinner}`);
    }
}

// function resetGame() {
//     player.textContent = 0;
//     computer.textContent = 0;

//     userScore = 0;
//     compScore = 0;

//     container.textContent = "";


// }

//modal
let modalContainer = document.querySelector("#modal");

let span = document.querySelector(".close");

let modal = document.querySelector(".modal")

span.addEventListener("click", () => {
    modalContainer.style.display = "none";
})





