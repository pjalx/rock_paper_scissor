let playerWins = 0;
let compWins = 0;
let draws = 0;
let gamesPlayed = 0;

function computerPlay() {
    const compSel = [`Rock`, `Paper`, `Scissor`];
    const ranNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return compSel[ranNum];
}

function playRound(e) {
    gamesPlayed++;
    let resultText = document.getElementById('result');
    const playerSelection = e.target.value;
    const computerSelection = computerPlay();
    const playerScoreText = document.getElementById('userscore');
    const computerScoreText = document.getElementById('computerscore');
    const drawsText = document.getElementById('draws');
    const updateGames = document.getElementById('gamesplayed');
    resultText.innerText = `The computer selects ${computerSelection}.`;
    if (playerSelection == computerSelection) {
        resultText.innerText += ` It's a tie, ${playerSelection} = ${computerSelection}.`;
        draws++;
    }
    else if (playerSelection == `Rock`) {
        if (computerSelection == `Paper`) {
            resultText.innerText += ` You lose, ${computerSelection} beats ${playerSelection}!`;
            compWins++;
        } else {
            resultText.innerText += ` You win, ${playerSelection} beats ${computerSelection}!`;
            playerWins++;
        }
    }
    else if (playerSelection == `Paper`) {
        if (computerSelection == `Scissor`) {
            resultText.innerText += ` You lose, ${computerSelection} beats ${playerSelection}!`;
            compWins++;
        } else {
            resultText.innerText += ` You win, ${playerSelection} beats ${computerSelection}!`;
            playerWins++;
        }
    }
    else if (playerSelection == `Scissor`) {
        if (computerSelection == `Rock`) {
            resultText.innerText += ` You lose, ${computerSelection} beats ${playerSelection}!`;
            compWins++;
        } else {
            resultText.innerText += ` You win, ${playerSelection} beats ${computerSelection}!`;
            playerWins++;
        }
    };
    updateGames.innerText = gamesPlayed;
    drawsText.innerText = draws;
    playerScoreText.innerText = playerWins;
    computerScoreText.innerText = compWins;
}

document.querySelectorAll('.but').forEach(button => button.addEventListener('click', playRound));