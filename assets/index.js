

let choiceArray = ['rock', 'paper', 'scissors']
let buttons = document.querySelectorAll('.choice-btn');
let playerScoreText = document.querySelector('#player-score');
let computerScoreText = document.querySelector('#computer-score');
let winnerText = document.querySelector('.winner');
let roundInfoText = document.querySelector('.round-info')

//keep track of current scores
let wins = {
    computer: 0,
    player: 0
}
//score needed to win (if user doesnt reset increases)
let scoreToWin = 5

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerChoice = e.target.id
        let computerChoice = getComputerChoice()
        let roundInfo = playRound(playerChoice, computerChoice)
        let { message, winner } = roundInfo
        //Show winner
        roundInfoText.textContent = `${message}`
        roundInfoText.classList.remove('hide')
        //Update score
        wins[winner.toLowerCase()] += 1
        playerScoreText.textContent = `Player: ${wins.player}`
        computerScoreText.textContent = `Computer: ${wins.computer}`
        //Check to see if 5 score reached
        if (wins[winner.toLowerCase()] == scoreToWin) {
            winnerText.textContent = `${winner} Wins!`
            winnerText.classList.remove('hide');


            setTimeout(() => {
                resetGame();
            }, 1000)
        }
    })
})

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choiceArray[randomNumber];
}

function playRound(pChoice, cChoice) {
    return runGameLogic(pChoice, cChoice)
}

function runGameLogic(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'rock') {
                return { message: 'It\s a Draw!', winner: 'null' }
            } else if (computerChoice == 'scissors') {
                return { message: `You Win! ${playerChoice} beats ${computerChoice}!`, winner: 'Player' }

            } else if (computerChoice == 'paper') {
                return { message: `You Lose! ${computerChoice} beats ${playerChoice}`, winner: 'Computer' }
            }
            break;
        case 'paper':
            if (computerChoice == 'rock') {
                return { message: `You Win! ${playerChoice} beats ${computerChoice}!`, winner: 'Player' }
            } else if (computerChoice == 'scissors') {
                return { message: `You Lose! ${computerChoice} beats ${playerChoice}`, winner: 'Computer' }

            } else if (computerChoice == 'paper') {
                return { message: 'It\s a Draw!', winner: 'null' }
            }
            break;
        case 'scissors':
            if (computerChoice == 'rock') {
                return { message: `You Lose! ${computerChoice} beats ${playerChoice}`, winner: 'Computer' }
            } else if (computerChoice == 'scissors') {
                return { message: 'It\s a Draw!', winner: 'Draw' }

            } else if (computerChoice == 'paper') {
                return { message: `You Win! ${playerChoice} beats ${computerChoice}!`, winner: 'Player' }
            }
            break;

        default:
            return 'Invalid Choice'
            break;
    }
}

function resetGame() {
    let userAnswer = prompt('Do you want to reset the game? y/n')
    if (userAnswer == 'y') {
        wins.player = 0
        wins.computer = 0
        roundInfoText.classList.add('hide')
        winnerText.classList.add('hide')
        playerScoreText.textContent = `Player: ${wins.player}`
        computerScoreText.textContent = `Computer: ${wins.computer}`
    } else if( userAnswer == 'n') {
        scoreToWin = scoreToWin + 5
        winnerText.classList.add('hide')
        roundInfoText.classList.add('hide')
    } else {
        resetGame()
    }
}