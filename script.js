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

function getHumanChoice(){
    let hc=prompt('Enter choice: ');
    return hc;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    let shc= humanChoice.toLowerCase();
    let cc=computerChoice;
    if(shc=='rock' && cc=='rock'){
        console.log("Tie! No one wins");
    }
    else if(shc=='rock' && cc=='paper'){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(shc=='rock' && cc=='scissors'){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(shc=='paper' && cc=='rock'){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(shc=='paper' && cc=='paper'){
        console.log('Tie! No one wins');
    }
    else if(shc=='paper' && cc=='scissors'){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(shc=='scissors' && cc=='rock'){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if(shc=='scissors' && cc=='paper'){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else{
        console.log('Tie! No one wins');
    }
}

function playGame(){
    let i;
    for(i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("Game Over: You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Game Over: The computer wins!");
    } else {
        console.log("Game Over: It's a dead tie!");
    }
}

playGame();