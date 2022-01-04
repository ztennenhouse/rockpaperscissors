let userScore = 0;
let compScore = 0;
let round = 0;


// adding consts

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const userContainer = document.querySelector('.user-container');
const gameWrapper = document.querySelector('.game-wrapper');

//Results array
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog.classList.add('round-result');
gameWrapper.insertAdjacentElement('beforeend', resultsLog);


function computerPlay() {
    let compChoice = Math.floor((Math.random() * 3) + 1);
    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
    
}
function playRound(playerSelection, computerSelection) {
    var playerSelection = this.dataset.button;
    var computerSelection = computerPlay(); 
    // convert console.log to result in html
    /* console.log = function(message) {
        document.getElementById('result').innerHTML = message;
    };
    console.log(r1); */
    
    
    //if the player wins
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper"
        && (compScore <= 5 || userScore <= 5))
        ) {
            userScore++;
            result = 'You lost: ' + playerSelection +  ' beats ' + computerSelection + '.  ';
            if (userScore >= 5) {
                result = 'You won the match!';
            }
        round++;

    // if player loses
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock"
        && (compScore <= 5 || userScore <= 5)) 
    ) {
        compScore++;
        result = 'You lost: ' + computerSelection +  ' beats ' + playerSelection + '. ';
        if (compScore >= 5) {
            result = 'You lost the match!';
        }
        round++;
    } else {
        result = 'Tie: ' + playerSelection + ' vs ' + computerSelection;
        round++;
    }
    let score = userScore + "-" + compScore;
    document.getElementById('result').innerHTML = result;
    document.getElementById('playerScore').innerHTML = userScore;
    document.getElementById('compScore').innerHTML = compScore; 

}
// addEventListeners
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);


