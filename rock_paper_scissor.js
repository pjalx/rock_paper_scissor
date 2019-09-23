function computerPlay() {
    const compSel = [`Rock`, `Paper`, `Scissor`];
    const ranNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return compSel[ranNum];
}
/*
function playRound(playerSelection, computerSelection = computerPlay()) {
    console.log(`The computer selects ${computerSelection}.`)
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection == computerSelection) {
        return `It's a tie, ${playerSelection} = ${computerSelection}.`
    }
    else if(playerSelection == `Rock`) {
        if(computerSelection == `Paper`) {
            return `You lose, ${computerSelection} beats ${playerSelection}!`
        }else {
            return `You win, ${playerSelection} beats ${computerSelection}!`
        }
    }
    else if(playerSelection == `Paper`) {
        if(computerSelection == `Scissor`) {
            return `You lose, ${computerSelection} beats ${playerSelection}!`
        }else {
            return `You win, ${playerSelection} beats ${computerSelection}!`
        }
    }
    else if(playerSelection == `Scissor`) {
        if(computerSelection == `Rock`) {
            return `You lose, ${computerSelection} beats ${playerSelection}!`
        }else {
            return `You win, ${playerSelection} beats ${computerSelection}!`
        }
    }    
}
*/
function game(games) {
    if(!games) {
        return;
    }
    
    let playerWins = 0;
    let compWins = 0;
    let ties = 0;
    let gamesPlayed = null;

    function playRound() {
        if(games == gamesPlayed) {
            return console.log(`The Computer Won:${compWins} games, You Won:${playerWins} games, and Tied:${ties} times.`);
        } 
        gamesPlayed++;       
        let playerSelection = prompt(`Rock Paper or Scissor, Please Choose One`, ``);
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        while (playerSelection != `Rock` && playerSelection != `Paper` && playerSelection != `Scissor`) {
            playerSelection = prompt(`Please Choose Either Rock, Paper or Scissor`);
        }
        const computerSelection = computerPlay();
        console.log(`The computer selects ${computerSelection}.`)
        if(playerSelection == computerSelection) {
            console.log(`It's a tie, ${playerSelection} = ${computerSelection}.`);
            ties++;
        }
        else if(playerSelection == `Rock`) {
            if(computerSelection == `Paper`) {
                console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
                compWins++;
            }else {
                console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
                playerWins++;
            }
        }
        else if(playerSelection == `Paper`) {
            if(computerSelection == `Scissor`) {
                console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
                compWins++;
            }else {
                console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
                playerWins++;
            }
        }
        else if(playerSelection == `Scissor`) {
            if(computerSelection == `Rock`) {
                console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
                compWins++;
            }else {
                console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
                playerWins++;
            }
        };
        playRound();    
    }
    playRound();
}