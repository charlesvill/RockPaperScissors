let userScore=0;
let compScore=0;
let rounds = 0; 
let playing = false; 

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const cScoreDiv = document.querySelector('#c_score');
const pScoreDiv = document.querySelector('#player_score');
const restartBtn = document.querySelector('#restart');

cScoreDiv.textContent = `${compScore}`; 
pScoreDiv.textContent = `${userScore}`; 

rockBtn.addEventListener("click", () => game("rock"));
paperBtn.addEventListener("click", () => game("paper"));
scissorBtn.addEventListener("click", () => game("scissors"));
restartBtn.addEventListener("click", () => reloadPage());



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

    
const draw = 'it\'s a draw!';
const playerWin = 'Player wins round';
const compWin = 'Player loses round';
const error = 'there was an error, try again';



//player selects rock
if(playerSelection==='rock'&&computerChoice==='paper'){
    
    return compWin;
}
else if(playerSelection==='rock'&&computerChoice==='rock'){
    return draw;
}
else if(playerSelection==='rock'&&computerChoice==='scissors'){
    
    return playerWin;
}
//player selects paper
else if(playerSelection==='paper'&&computerChoice==='paper'){
    return draw;
}
else if(playerSelection==='paper'&&computerChoice==='rock'){
    
    return playerWin;
}
else if(playerSelection==='paper'&&computerChoice==='scissors'){
    
    return compWin;
}
//player selects scissors
else if(playerSelection==='scissors'&&computerChoice==='paper'){
    
    return playerWin;
}
else if(playerSelection==='scissors'&&computerChoice==='rock'){
    
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
    console.log(playerSelection);

   if (playing && rounds <= 5)
   {
    const playerWin = 'Player wins round';
    const compWin = 'Player loses round';
    const draw = 'It\'s a draw!';
    
    //resultsDiv.textContent = "Results: "
    
    
        var computerSelection = computerChoice(ranNum());
        var roundResults = playRound(playerSelection, computerSelection);

        if(roundResults === playerWin ){
            resultsDiv.textContent =  `${playerSelection} beats ${computerSelection} , you have won a round`;
            userScore++;
            rounds++; 
            pScoreDiv.textContent = `${userScore}`;
            if (userScore >= 3 ){
                
                endGame(); 
                
            }
        }
        else if(roundResults === compWin){
            resultsDiv.textContent = `${computerSelection} beats ${playerSelection} , you have lost this round.`;
            compScore++; 
            rounds++; 
            cScoreDiv.textContent = `${compScore}`;
                if(compScore >=3 ){
                //endgame function where computer wins
                
                endGame(); 

               }
            
             //keep score and end game when 5 rounds up or one has 3 points
        }
        else {
            rounds++; 
            resultsDiv.textContent = `Between ${computerSelection} and ${playerSelection} is a draw!`;
        }
    
   }
   else if (rounds > 5 || !playing)
   {
    
    endGame(); 
   } 
}  


function newGame()
{
    userScore = 0; 
    compScore = 0; 
    rounds = 0; 
    playing = true; 
}

function endGame()
{
    playing = false; 
    
    if (rounds > 5){rounds = 5;}
    if(compScore>userScore){
        resultsDiv.textContent = `The computer has won! total rounds: ${rounds}`;
    }
    else if(compScore===userScore){
        resultsDiv.textContent = `Looks like it was a draw! total rounds: ${rounds}`;
    }
    else{
        resultsDiv.textContent = `You have won! total rounds: ${rounds}`;
    }
    // what round they were on
    // update div to who was in the lead, try again prompt?
}

function reloadPage()
{
   window.location.reload();
}
// at the moement this pause button does not work. 


newGame();


