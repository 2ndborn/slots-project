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
let correct = [];
let incorrect = [];

/**
 * This function starts a new game by calling the newGame() function.
 * The new game button is then replaced with the submit button.
 */
document.getElementById('new-game').addEventListener('click', function () {
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('new-game').classList.add('hide');
    runGame();
});

/**
 * This function submits the users answer and replaces the submit button with the continue button.
 * Then it calls the record answer function.
 */
document.getElementById('submit').addEventListener('click', function () {
    document.getElementById('continue').classList.remove('hide');
    document.getElementById('submit').classList.add('hide');
    recordNumbers();
});
/*
document.getElementById('answer-box2').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('continue').classList.remove('hide');
        document.getElementById('submit').classList.add('hide');
        recordNumbers();
    }
});*/

/**
 * This function allows the user to generate another set of random numbers.
 * The continue button is replaced with the submit button.
 * Answer boxes 1 & 2 are reset to zero.
 */
document.getElementById('continue').addEventListener('click', function () {
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('continue').classList.add('hide');
    document.getElementById('answer-box1').value = "";
    document.getElementById('answer-box2').value = "";
    newTurn();
});

/**
 * This function generates 2 random numbers and calls the displayNumbers function
 */
function runGame() {
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    displayNumbers(num1, num2);
};

/**
 * This function calls the run game function so the user can have another turn.
 * hides answer box 1 & 2 and replaces them with operand 1 & 2.
 */
function newTurn() {
    document.getElementById('answer-box1').classList.add('hide');
    document.getElementById('answer-box2').classList.add('hide');
    document.getElementById('operand1').classList.remove('hide');
    document.getElementById('operand2').classList.remove('hide');
    runGame();
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
        document.getElementById('answer-box1').focus();
    }, 1500);
}
/**
 * This function records the numbers displayed by the by operands 1 and 2
 * and converts them from strings to integers.
 * Calls the function check answer
 */
function recordNumbers() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    checkAnswers();
}

/**
 * This function records the values of the users answers and converts them from strings
 * to integers.
 * defines what a correct answer is and displays a difference alert based on the users answer.
 */

function checkAnswers() {
    let userAnswer1 = parseInt(document.getElementById('answer-box1').value);
    let userAnswer2 = parseInt(document.getElementById('answer-box2').value);
    let correctAnswer1 = userAnswer1 === num1;
    let correctAnswer2 = userAnswer2 === num2;

    if (correctAnswer1 && correctAnswer2) {
        alert('Congratualation! You answered correctly!!!');
        incrementScore();
    } else {
        alert(`Unfortunatly the correct answer was ${num1} and ${num2}.`);
        incrementWrongAnswer();
    }
}

/**Gets the current score and increases by 1 point. */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    correct.push(oldScore);
}

/**
 * Get the wrong answers and push to incorrect array.
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
    incorrect.push(oldScore);
    removeLife();
}

/**
 * Removes a users life after ever incorrect answer.
 */
function removeLife() {
    let lifeOne = document.getElementById('life1');
    let lifeTwo = document.getElementById('life2');
    let lifeThree = document.getElementById('life3');

    for (let i of incorrect) {
        if (i === 1) {
            lifeOne.classList.add('hide');
        } else {
            if (i === 2) {
                lifeTwo.classList.add('hide');
            } else {
                if (i === 3) {
                    lifeThree.classList.add('hide');
                    gameOver();
                }
            }
        }
    }
}
/**
 * This function ends the game.
 */
function gameOver() {
    alert('Game Over. Refresh the page to play again.');
    document.getElementById('answer-box1').classList.add('hide');
    document.getElementById('answer-box2').classList.add('hide');
    document.getElementById('continue').classList.add('hide');
}