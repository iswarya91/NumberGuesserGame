const lowVal = 1;
const highVal = 5;
const numOfGuess = 3;
let guessCount = 0;
let gameOver = false;
const submitBtn = document.querySelector('#submit');
const numInput = document.querySelector('.num-input');
const result = document.querySelector('.result');
const gameRangeDisp = document.querySelector('.game-range')

let correctAns = Math.round(Math.random() * (highVal - lowVal) + lowVal);

gameRangeDisp.innerText = `${lowVal} and ${highVal}`;
submitBtn.addEventListener('click', submitEvtHandler);

function submitEvtHandler(e) {
    e.preventDefault();
    
    if (e.target.innerText.toUpperCase() === 'Play Again'.toUpperCase()) {
        resetGame();
        return;
    }

    const val =  Number(numInput.value);
    if (val < lowVal || val > highVal) {
       result.innerText = 'Please enter value in the given range';
       return;
    }

    if (val === correctAns) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }

}
function resetGame() {
    guessCount = 0;
    result.innerText = '';
    numInput.value = '';
    numInput.removeAttribute('disabled')
    numInput.style.borderColor = 'black';
    numInput.style.color = 'black';
    submitBtn.innerText = 'Submit';
    correctAns = Math.round(Math.random() * (highVal - lowVal) + lowVal);
}

function handleCorrectAnswer() {
    result.innerText = 'Correct Answer!';
    submitBtn.innerText = 'Play Again';
    gameOver = true;
    result.style.color = 'green';
    numInput.style.borderColor = 'green';
    numInput.style.color = 'green';
    numInput.setAttribute('disabled', 'disabled');
}

function handleWrongAnswer() {
    guessCount++;
    const guessRemaining = numOfGuess - guessCount;
    if (guessRemaining > 0) {
        result.innerText = `Answer Incorrect. You have ${guessRemaining} more guesses.`
    } else {
        result.innerText = `Game over. The correct answer was ${correctAns}`;
        result.style.color = 'red';
        numInput.style.borderColor = 'red';
        numInput.style.color = 'red';
        numInput.setAttribute('disabled', 'disabled');
        submitBtn.innerText = 'Play Again';
        gameOver = true;
        
    }
}