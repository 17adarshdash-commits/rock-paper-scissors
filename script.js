const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const resultsDiv = document.querySelector('#results-container');
const scoreDiv =  document.querySelector('#score-container');
function getComputerChoice(){
    let n=Math.random();
    let ch;
    if(n<=0.33){
        ch='rock';
    }
    else if(n>0.33 && n<=0.66){
        ch='paper';
    }
    else{
        ch='scissors';
    }
    return ch;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    let shc= humanChoice.toLowerCase();
    let cc=computerChoice;
    if(shc=='rock' && cc=='rock'){
        resultsDiv.textContent="Tie! No one wins";
    }
    else if(shc=='rock' && cc=='paper'){
        resultsDiv.textContent="You lose! Paper beats Rock";
        computerScore++;
    }
    else if(shc=='rock' && cc=='scissors'){
        resultsDiv.textContent="You win! Rock beats Scissors";
        humanScore++;
    }
    else if(shc=='paper' && cc=='rock'){
        resultsDiv.textContent="You win! Paper beats Rock";
        humanScore++;
    }
    else if(shc=='paper' && cc=='paper'){
        resultsDiv.textContent='Tie! No one wins';
    }
    else if(shc=='paper' && cc=='scissors'){
        resultsDiv.textContent="You lose! Scissors beats Paper";
        computerScore++;
    }
    else if(shc=='scissors' && cc=='rock'){
        resultsDiv.textContent="You lose! Rock beats Scissors";
        computerScore++;
    }
    else if(shc=='scissors' && cc=='paper'){
        resultsDiv.textContent="You win! Scissors beats Paper";
        humanScore++;
    }
    else{
        resultsDiv.textContent='Tie! No one wins';
    }
    scoreDiv.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
    if (humanScore === 5) {
        resultsDiv.textContent = "GAME OVER: You are the champion!";
        
    } else if (computerScore === 5) {
        resultsDiv.textContent = "GAME OVER: The computer wins!";
    }
}

rockButton.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});