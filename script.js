const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const cScoreDiv = document.querySelector('#c_score');
const pScoreDiv = document.querySelector('#player_score');

rockBtn.addEventListener('click', () => game("rock")); 
paperBtn.addEventListener('click', () => game("paper"));
scissorBtn.addEventListener('click', () => game("scissors"));



function ranNum (){
    let number = Math.floor(Math.random()*3 +1);
    return number;
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
function playRound(playerSelection, computerChoice){

    console.log('the function is playing!');
const draw = 'it\'s a draw!';
const playerWin = 'Player wins round';
const compWin = 'Player loses round';
const error = 'there was an error, try again';

let playerScore= 0;
let compScore = 0;



//player selects rock
if(playerSelection==='rock'&&computerChoice==='paper'){
    compScore++;
    return compWin;
}
else if(playerSelection==='rock'&&computerChoice==='rock'){
    return draw;
}
else if(playerSelection==='rock'&&computerChoice==='scissors'){
    playerScore++;
    return playerWin;
}
//player selects paper
else if(playerSelection==='paper'&&computerChoice==='paper'){
    return draw;
}
else if(playerSelection==='paper'&&computerChoice==='rock'){
    playerScore++;
    return playerWin;
}
else if(playerSelection==='paper'&&computerChoice==='scissors'){
    compScore++;
    return compWin;
}
//player selects scissors
else if(playerSelection==='scissors'&&computerChoice==='paper'){
    playerScore++;
    return playerWin;
}
else if(playerSelection==='scissors'&&computerChoice==='rock'){
    compScore++;
    return compWin;
}
else if(playerSelection==='scissors'&&computerChoice==='scissors'){
    return draw;
}
else{ 
    return error;
}

}



function game(playerSelection)
{
    
    let userScore=0;
    let compScore=0;
    let rounds;
    const playerWin = 'Player wins round';
    const compWin = 'Player loses round';
    const draw = 'it\'s a draw!';

    //play 5 rounds 
    //This below is being refactored with the buttons instead

    
        
        //set i to round variable to pass outer scope and add one if it's on the last one
        //this is because on round5 it will exit loop before assigning i as 5.
        //if(i>=4){rounds=i+1;}
        //else{rounds=i;}


        //where i left off: the round is playing with the buttons but it does not update the score of the winner, but is displaying the results of the round.
       
        var computerSelection = computerChoice(ranNum());
        var roundResults = playRound(playerSelection, computerSelection);
        resultsDiv.textContent = `Results: ${roundResults}`;
        cScoreDiv.textContent = `Computer Score: ${compScore}`;
        pScoreDiv.textContent = ` Player Score: ${userScore}`;

        //will need to add the variable function assignments to the loop so it actually updates the values. 
    }          //evaluate winner and add points
  

    
  


