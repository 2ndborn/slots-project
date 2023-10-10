/**
 * The game needs to response to the user pressing the “Begin” button on the main game screen to starts the game.
 * The game needs to place random numbers into the slots and then remove them after 2 seconds.
 * The game needs to response to the user entering numbers into the slots by moving on to the next slot(when using the keyboard).
 * The game needs to response to the user pressing the “Submit” button by checking whether the answers given match the numbers that originally appeared.
 * If the answers match the game must inform the user that they have given the correct answer and then add one point to their score.
 * If the answer doesn’t match the game must inform the user that they have given the wrong answer and remove a life(one of the light bulbs) from the window.
 * After a turn is completed, the game displays a “Continue” button.
 * The game need to response to the user pressing the “Continue” button by placing another set of random numbers into the slots.
 * The game must response to the user’s 3rd incorrect answer by notifying them that the game is over.
 * The game must display the “Begin” button to enable the user to play again.
 * */

let num1;
let num2;
let score;

/**
 * This function starts a new game by calling the newGame() function.
 * The new game button is then replaced with the submit button.
 */
document.getElementById('new-game').addEventListener('click', function () {
    document.getElementById('submit-answer').classList.remove('hide');
    document.getElementById('new-game').classList.add('hide');
    newGame()
});


/**
 * This function generates 2 random numbers and calls the displayNumbers function
 */
let newGame = () => {
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    displayNumbers(num1, num2);
};


function newTurn() {

}

/**
 * This function add the randomly generated number to window.
 * After 3 seconds operand 1 & 2 are hidden and replaced with 
 * answer box 1 & 2.
 */
function displayNumbers(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    setTimeout(function () {
        document.getElementById('operand1').classList.add('hide');
        document.getElementById('operand2').classList.add('hide');
        document.getElementById('answer-box1').classList.remove('hide');
        document.getElementById('answer-box2').classList.remove('hide');
    }, 3000);
}

function recordAnswer() {
    num1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
}

function checkAnswer() {
    let userAnswer1 = parseInt(document.getElementsByClassName('answer-box1').value);
    let userAnswer2 = parseInt(document.getElementsByClassName('answer-box2').value);
    let recordAnswer = recordAnswer();
    let correctAnswer1 = userAnswer1 === num1;
    let correctAnswer2 = userAnswer2 === operand2;

    if (correctAnswer1 && correctAnswer2) {
        alert('Congratualation! You answered correctly!!!');
    } else; {
        alert('Unfortunatly that was the wrong answer.');
    }
}

function incrementScore() {

}

function removeLife() {

}




