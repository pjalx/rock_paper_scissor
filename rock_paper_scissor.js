function computerPlay() {
    const compSel = [`Rock`, `Paper`, `Scissor`];
    const ranNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return compSel[ranNum];
}

function playRound(playerSelection, computerSelection) {
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