
let num1;
let num2;
let correct = [];
let incorrect = [];
let currentBox = 1

document.addEventListener("keydown", function (event) {
    if (event.key >= "1" && event.key <= "9") {
        const num = parseInt(event.key);
        event.preventDefault()
        key(num);

        const btn = document.getElementById("btn" + num);
        if (btn) {
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 150);
        }
    }

    if (event.key === "Backspace") {
        event.preventDefault()
        del();

        const delBtn = document.getElementById("btnDel");
        if (delBtn) {
            delBtn.classList.add("active");
            setTimeout(() => delBtn.classList.remove("active"), 150);
        }
    }

    if (event.key === "Enter") {
        submitAnswer();

        const sub = document.getElementById("btnSub");
        if (sub) {
            sub.classList.add("active");
            setTimeout(() => sub.classList.remove("active"))
        }
    }
})

/**Initializes click functions that increments the game.*/
function initializeGame() {
    let newG = document.getElementById("new-game");
    newG.addEventListener("click", newGame);
    let sub = document.getElementById("submit");
    sub.addEventListener("click", submitAnswer);
    let con = document.getElementById("continue");
    con.addEventListener("click", continuePlaying);
}

/**This function starts a new game by calling the newGame() function.
 * The new game button is then replaced with the submit button.*/
function newGame() {
    hideElement("new-game");
    hideElement("game-overlay");
    runGame();
    moveCursor();
    revealSubmit();
}

/**This function submits the users answer and replaces
 * the submit button with the continue button.
 * Then it calls the record answer function.*/
function submitAnswer() {
    unhideElement("continue");
    hideElement("submit");
    disableElement("answer-box1");
    disableElement("answer-box2");
    recordNumbers();
}

/**When a number is entered this function
 *  moves the cursor to the next input box*/
function moveCursor() {
    let move = document.getElementById("answer-box1");
    move.addEventListener("keyup", function (event) {
        if (event.key <= 9) {
            document.getElementById("answer-box2").focus();
        }
    });
}

/**When a number is entered this function
 *  unhides the "Submit" button*/
function revealSubmit() {
    let reveal = document.getElementById("answer-box2");
    reveal.addEventListener("keyup", function (event) {
        if (event.key <= 9) {
            unhideElement("submit");
        }
    });
}

/**This function allows the user to generate another set of random numbers.
 * The continue button is replaced with the submit button.
 * Answer boxes 1 & 2 are reset to zero.*/
function continuePlaying() {
    hideElement("continue");
    document.getElementById("answer-box1").value = "";
    document.getElementById("answer-box2").value = "";
    enableElement("answer-box1");
    enableElement("answer-box2");
    currentBox = 1
    newTurn();
}

/**Hides an element when called.*/
function hideElement(elementId) {
    document.getElementById(elementId).classList.add("hide");
}

/**Reveals an element when called.*/
function unhideElement(elementId) {
    document.getElementById(elementId).classList.remove("hide");
}

/**Disables an element when called.*/
function disableElement(elementId) {
    document.getElementById(elementId).disabled = true;
}

/**Enables an element when called.*/
function enableElement(elementId) {
    document.getElementById(elementId).disabled = false;
}

/**loaded the DOM and initializes the game.*/
document.addEventListener("DOMContentLoaded", initializeGame);

/**This function generates 2 random numbers
 * and calls the displayNumbers function*/
function runGame() {
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    displayNumbers(num1, num2);
}

/**This function calls the run game function
 *so the user can have another turn.
 *hides answer box 1 & 2 and replaces them
 *with operand 1 & 2.*/
function newTurn() {
    hideElement("answer-box1");
    hideElement("answer-box2");
    unhideElement("operand1");
    unhideElement("operand2");
    runGame();
}

/**This function add the randomly generated number to window.
 *After 3 seconds operand 1 & 2 are hidden and replaced with
 *answer box 1 & 2.*/
function displayNumbers(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    setTimeout(function () {
        hideElement("operand1");
        hideElement("operand2");
        unhideElement("answer-box1");
        unhideElement("answer-box2");
        document.getElementById("answer-box1").focus();
    }, 1500);
}

/**This function records the numbers displayed by
 * the by operands 1 and 2 * and converts them from
 * strings to integers.
 * Calls the function check answer*/
function recordNumbers() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    checkAnswers();
}

function key(num) {
  const box1 = document.getElementById("answer-box1");
  const box2 = document.getElementById("answer-box2");

  if (currentBox === 1) {
    box1.value += num;
    if (box1.value.length >= box1.maxLength) {
      currentBox = 2;   // switch to box2
      box2.focus();
    }
  } else {
    box2.value += num;
  }
}

function del() {
    const box1 = document.getElementById("answer-box1");
    const box2 = document.getElementById("answer-box2");

    if (currentBox === 2 && box2.value.length > 0) {
        box2.value = box2.value.slice(0, -1);
        if (box2.value.length === 0) {
            currentBox = 1
            box1.focus()
        }
    } else {
        box1.value = box1.value.slice(0, -1);
        currentBox = 1
        box1.focus();
    }
}

/**This function records the values of the users answers
 *  and converts them from strings to integers.
 * Defines what a correct answer is and displays a difference
 *  alert based on the users answer.*/
function checkAnswers() {
    let userAnswer1 = parseInt(document.getElementById("answer-box1").value);
    let userAnswer2 = parseInt(document.getElementById("answer-box2").value);
    let correctAnswer1 = userAnswer1 === num1;
    let correctAnswer2 = userAnswer2 === num2;

    if (correctAnswer1 && correctAnswer2) {
        alert("Congratulation! You answered correctly!!!");
        incrementScore();
    } else {
        alert(`Unfortunately  the correct answer was ${num1} and ${num2}.`);
        incrementWrongAnswer();
    }
}

/**Gets the current score and increases by 1 point.*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    correct.push(oldScore);
}

/**Get the wrong answers and push to incorrect array.*/
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    incorrect.push(oldScore);
    removeLife();
}

/**Removes a users life after ever incorrect answer.*/
function removeLife() {
    for(let i of incorrect) {
        if (i === 1) {
            hideElement("life1");
        } else if (i === 2) {
            hideElement("life2");
        } else if (i === 3) {
            hideElement("life3");
            gameOver();
        };
    };
}

/** * This function ends the game.*/
function gameOver() {
    hideElement("answer-box1");
    hideElement("answer-box2");
    hideElement("continue");
    finish();
}

/** * Allows the user to refresh the page and continue playing*/
function finish() {
    let playAgain = confirm("Game Over\n\nPlay again?");
    let close = window.location.href="index.html";

    if (playAgain == true) {
        location.reload();
    } else {
        close;
    };
}