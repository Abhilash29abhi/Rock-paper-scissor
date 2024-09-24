// Caching DOM elements
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const messageElement = document.getElementById('msg');
const choices = document.querySelectorAll('.choice');

// Variables to hold scores
let userScore = 0;
let compScore = 0;

// Function to generate computer choice
function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine winner
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'comp';
    }
}

// Function to update the scores and display the result
function playRound(userChoice) {
    const compChoice = getCompChoice();
    const result = determineWinner(userChoice, compChoice);

    if (result === 'user') {
        userScore++;
        messageElement.textContent = `You win! ${userChoice} beats ${compChoice}`;
    } else if (result === 'comp') {
        compScore++;
        messageElement.textContent = `You lose! ${compChoice} beats ${userChoice}`;
    } else {
        messageElement.textContent = `It's a draw! You both chose ${userChoice}`;
    }

    // Update the score on the UI
    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
}

// Event listeners for user choices
choices.forEach(choice => {
    choice.addEventListener('click', function () {
        const userChoice = this.id;
        playRound(userChoice);
    });
});
