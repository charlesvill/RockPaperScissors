let ranNum = Math.floor(Math.random()*3 +1);
let computerSelection = computerChoice(ranNum);
let playerChoice = prompt('rock, paper, or scissors?');


function computerChoice(ranNum){
    switch(ranNum){
        case 1 : 
            choice ='rock';
            break;
        
        case 2:
            choice = 'paper';
            break;
    
        case 3:
            choice = 'scissors';
            break;
         default:
            console.log('something did not go right');
    
}
return choice;
}

function playRound(playerSelection, computerSelection){

const draw = 'it\'s a draw!';
const playerWin = 'Player wins round';
const compWin = 'Player loses round';
const error = 'there was an error, try again';

let playerScore= 0;
let compScore = 0;

//player selects rock
if(playerSelection==='rock'&&computerSelection==='paper'){
    compScore++;
    return compWin;
}
else if(playerSelection==='rock'&&computerSelection==='rock'){
    return results;
}
else if(playerSelection==='rock'&&computerSelection==='scissors'){
    playerScore++;
    return playerWin;
}
//player selects paper
else if(playerSelection==='paper'&&computerSelection==='paper'){
    return results;
}
else if(playerSelection==='paper'&&computerSelection==='rock'){
    playerScore++;
    return playerWin;
}
else if(playerSelection==='paper'&&computerSelection==='scissors'){
    compScore++;
    return compWin;
}
//player selects scissors
else if(playerSelection==='scissors'&&computerSelection==='paper'){
    playerWin++;
    return playerWin;
}
else if(playerSelection==='scissors'&&computerSelection==='rock'){
    compScore++;
    return compWin;
}
else if(playerSelection==='scissors'&&computerSelection==='scissors'){
    return draw;
}
else{ 
    return error;
}

}

console.log(playRound(playerChoice.toLowerCase(), computerSelection));