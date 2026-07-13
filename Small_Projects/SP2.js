let randomNumber = parseInt(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessInput');
const guessSlot = document.querySelector('#previousGuesses');
const remaining = document.querySelector('#remainingGuesses');
const lowOrHi = document.querySelector('#message');
const newGameButton = document.querySelector('#newGame');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

submit.addEventListener('click', function (e) {
    e.preventDefault();

    if (!playGame) return;

    const guess = parseInt(userInput.value);

    validateGuess(guess);
});

function validateGuess(guess) {

    if (isNaN(guess)) {
        alert('Please enter a valid number');
        return;
    }

    if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    prevGuess.push(guess);

    displayGuess(guess);

    if (guess === randomNumber) {

        displayMessage(
            ` Congratulations! You guessed the number in ${numGuess} attempts.`
        );

        endGame();

    } else if (numGuess === 10) {

        displayMessage(
            ` Game Over! The number was ${randomNumber}`
        );

        endGame();

    } else {

        checkGuess(guess);
    }

    numGuess++;
}

function checkGuess(guess) {

    if (guess < randomNumber) {

        displayMessage(' Your guess is too low.');

    } else {

        displayMessage(' Your guess is too high.');
    }
}

function displayGuess(guess) {

    userInput.value = '';

    guessSlot.innerHTML += `${guess}, `;

    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {

    lowOrHi.innerHTML = message;
}

function endGame() {

    userInput.value = '';

    userInput.setAttribute('disabled', '');

    playGame = false;

    newGameButton.style.display = 'inline-block';
}

newGameButton.addEventListener('click', function () {

    randomNumber = parseInt(Math.random() * 100) + 1;

    prevGuess = [];

    numGuess = 1;

    playGame = true;

    guessSlot.innerHTML = '';

    remaining.innerHTML = '10';

    lowOrHi.innerHTML = '';

    userInput.removeAttribute('disabled');

    userInput.value = '';

    newGameButton.style.display = 'none';
});