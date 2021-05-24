let playerScore = 0;
let computerScore = 0;

game();

function game() {
    console.log('Welcome to Rock, Paper, Scissors!');
    for (i = 0; i < 5; i++) {
        round(playerPlay(), computerPlay())
    }
    if (playerScore == computerScore) {
        console.log("A draw! Great Game!");
    }
    else if (playerScore > computerScore) {
        console.log("You win! Great Game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose! Great Try!")
    }
    playerScore = 0;
    computerScore = 0;
}

function round(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`Draw, both of you chose ${computerSelection}`);
        playerScore += 0;
        computerScore += 0;
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log("You lose, paper beats rock.");
            computerScore += 1;
        }
        else {
            console.log("You win, rock beats scissors");
            playerScore += 1;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log("You lose, scissors beats paper.");
            computerScore += 1;
        }
        else {
            console.log("You win, paper beats rock");
            playerScore += 1;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log("You lose, rock beats scissors.");
            computerScore += 1;
        }
        else {
            console.log("You win, scissors beats paper");
            playerScore += 1;
        }
    }
}

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let roll = rollDice(3) - 1;
    return options[roll];
}

function playerPlay() {
    let selection = prompt("Rock, paper, or scissors?").toLowerCase();
    if (selection != 'rock' && selection != 'paper' && selection != 'scissors') {
        console.log("Enter a proper option.");
        do {
            selection = prompt("Rock, paper, or scissors?").toLowerCase();
        } while (selection != 'rock' && selection != 'paper' && selection != 'scissors')
        return selection;
    }
    return selection;
}

function rollDice(d) {
    return Math.floor(Math.random() * d) + 1;
}