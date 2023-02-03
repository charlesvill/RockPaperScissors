function ranNum (){
    let number = Math.floor(Math.random()*3 +1);
    return number;
} 

 function playerChoice () {
    let choice = prompt('rock, paper, or scissors?').toLocaleLowerCase();
    return choice; 
 } 


function computerChoice(ranNum){
    let comChoice;
    switch(ranNum){
        case 1 : 
            comChoice ='rock';
            break;
        
        case 2:
            comChoice = 'paper';
            break;
    
        case 3:
            comChoice = 'scissors';
            break;
         default:
            console.log('something did not go right');
    
}
return comChoice;
}

//this function requires the passthrough of the computer choice and the input function variables
function playRound(playerChoice, computerChoice){

const draw = 'it\'s a draw!';
const playerWin = 'Player wins round';
const compWin = 'Player loses round';
const error = 'there was an error, try again';

let playerScore= 0;
let compScore = 0;

//player selects rock
if(playerChoice==='rock'&&computerChoice==='paper'){
    compScore++;
    return compWin;
}
else if(playerChoice==='rock'&&computerChoice==='rock'){
    return draw;
}
else if(playerChoice==='rock'&&computerChoice==='scissors'){
    playerScore++;
    return playerWin;
}
//player selects paper
else if(playerChoice==='paper'&&computerChoice==='paper'){
    return draw;
}
else if(playerChoice==='paper'&&computerChoice==='rock'){
    playerScore++;
    return playerWin;
}
else if(playerChoice==='paper'&&computerChoice==='scissors'){
    compScore++;
    return compWin;
}
//player selects scissors
else if(playerChoice==='scissors'&&computerChoice==='paper'){
    playerScore++;
    return playerWin;
}
else if(playerChoice==='scissors'&&computerChoice==='rock'){
    compScore++;
    return compWin;
}
else if(playerChoice==='scissors'&&computerChoice==='scissors'){
    return draw;
}
else{ 
    return error;
}

}



function game(){
    let userScore=0;
    let compScore=0;
    let rounds;
    const playerWin = 'Player wins round';
    const compWin = 'Player loses round';
    const draw = 'it\'s a draw!';

    //play 5 rounds 
    for ( let i=0; i<5; i++){
        
        //set i to round variable to pass outer scope and add one if it's on the last one
        //this is because on round5 it will exit loop before assigning i as 5.
        if(i>=4){rounds=i+1;}
        else{rounds=i;}
        let playerSelection = playerChoice();
        let computerSelection = computerChoice(ranNum());
        let roundResults = playRound(playerSelection, computerSelection);
        //will need to add the variable function assignments to the loop so it actually updates the values. 
        //evaluate winner and add points
        if(roundResults === playerWin ){
            console.log( `${playerSelection} beats ${computerSelection} , you have won a round`);
            userScore++;
            if (userScore >= 3 ){
                //endgame function where the user wins 
                
                i=5;
            }
        }
        else if(roundResults === compWin){
            console.log(`${computerSelection} beats ${playerSelection} , you have lost this round.`);
            compScore++;{
            if(compScore >=3 ){
                //endgame function where computer wins
                
                i=5; 
               }
            }
             //keep score and end game when 5 rounds up or one has 3 points
        }
        else if (roundResults === draw){
            console.log(`between ${computerSelection} and ${playerSelection} is a draw!`)
        }
        
//bug when it gets to round 5, it immediately kicks it out of the loop and does not evaluate the final score to determine a winner. 
    }

    if(compScore>userScore){
        alert(`The computer has won! ${userScore} to ${compScore}, total rounds: ${rounds}`);
    }
    else if(compScore===userScore){
        alert(`Looks like it was a draw! ${userScore} to ${compScore}, total rounds: ${rounds}`)
    }
    else{
        alert(`you have won! ${userScore} to ${compScore}, total rounds: ${rounds}`);
    }
}

game();
