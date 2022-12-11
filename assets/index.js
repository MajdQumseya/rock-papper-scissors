const choiceArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choiceArray[randomNumber];
}

function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    let formattedChoice = playerChoice.toLowerCase();
    if (!choiceArray.includes(formattedChoice)) {
        getPlayerChoice()
    } else {
        return formattedChoice;
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    return runGameLogic(playerChoice, computerChoice)
}

function game() {
    let wins = {
        computer: 0,
        player: 0
    }

    for (let i = 0; i < 5; i++) {
        let roundInfo = playRound()
        let { message, winner } = roundInfo
        if (winner !== 'null') {
            wins[winner]++
            console.log(message)
        } else {
            console.log(message)
        }
        console.log(wins)

    }
}

function runGameLogic(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'rock') {
                return { message: 'It\s a Draw!', winner: 'null' }
            } else if (computerChoice == 'scissors') {
                return { message: `You Win! ${playerChoice} beats ${computerChoice}!`, winner: 'player' }

            } else if (computerChoice == 'paper') {
                return { message: `You Lose! ${computerChoice} beats ${playerChoice}`, winner: 'computer' }
            }
            break;
        case 'paper':
            if (computerChoice == 'rock') {
                return { message: `You Win! ${playerChoice} beats ${computerChoice}!`, winner: 'player' }
            } else if (computerChoice == 'scissors') {
                return { message: `You Lose! ${computerChoice} beats ${playerChoice}`, winner: 'computer' }

            } else if (computerChoice == 'paper') {
                return { message: 'It\s a Draw!', winner: 'null' }
            }
            break;
        case 'scissors':
            if (computerChoice == 'rock') {
                return { message: `You Lose! ${computerChoice} beats ${playerChoice}`, winner: 'computer' }
            } else if (computerChoice == 'scissors') {
                return { message: 'It\s a Draw!', winner: 'null' }

            } else if (computerChoice == 'paper') {
                return { message: `You Win! ${playerChoice} beats ${computerChoice}!`, winner: 'player' }
            }
            break;

        default:
            return 'Invalid Choice'
            break;
    }
}
