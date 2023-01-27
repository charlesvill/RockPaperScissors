function getComputersChoice(){
    const ranNum = Math.floor(Math.random()*3) +1;
    const rock = 'rock';
    const paper= 'paper';
    const scissors= 'scissors';

    switch(ranNum){
        case '1':
            return rock;
            break;
        case '2':
            return paper;
            break;
        case '3':
            return scissors;
            break;
        default: null;
    }

}

alert(getComputersChoice());
