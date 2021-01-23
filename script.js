let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Invalid number!\nThe guessed value should be a number between 0 and 9.');
    }

    const humanDiff = Math.abs(humanGuess - secretTarget);
    const computerDiff = Math.abs(computerGuess - secretTarget);
    return humanDiff <= computerDiff;
};

const updateScore = id => id === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;