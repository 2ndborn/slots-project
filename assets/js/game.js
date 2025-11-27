

let operands = [];
let currentBox = 0;
let correctCount = 0; // tracks the correct answers
let livesRemaining = 3;
const lifeIds = ["life1", "life2", "life3"];

/**Initializes click functions that increments the game.*/
function initializeGame() {
    let newG = document.getElementById("new-game");
    newG.addEventListener("click", newGame);
    let sub = document.getElementById("submit");
    sub.addEventListener("click", submitAnswer);
    let con = document.getElementById("continue");
    con.addEventListener("click", continuePlaying);
}

function runGame() {
    // difficulty scaling: +1 box every 10 correct answers. Max is 9.
    const numOperands = Math.min(2 + Math.floor(correctCount / 10), 9);

    operands = Array.from({length: numOperands}, () => Math.floor(Math.random() * 9) + 1);
    displayOperands(operands);
}

function displayOperands(operands) {
    const container = document.getElementById("slot-container2");
    container.innerHTML = "";

    // show operands
    operands.forEach((num, i) => {
        const span = document.createElement("span");
        span.className = "slot";
        span.id = `operand${i}`;
        span.textContent = num;
        container.appendChild(span)
    });

    // after delay, relace with inputs
    setTimeout(() => {
        container.innerHTML = "";
        operands.forEach((_, i) => {
            const input = document.createElement("input");
            input.className = "slot";
            input.id = `answer-box${i}`;
            input.type = "text";
            input.maxLength = 1
            input.inputMode = "numeric";
            container.appendChild(input);
        });

        document.getElementById("answer-box0").focus();
        currentBox = 0;
    }, 1500)
    unhideElement("cal");
}

function key(num) {
    const input = document.getElementById(`answer-box${currentBox}`);
    if (input) {
        input.value = num;
        if (currentBox < operands.length - 1) {
            currentBox++;
            document.getElementById(`answer-box${currentBox}`).focus();
        }
    }

    // enable submit only if all boxes are filled
    const allFilled = operands.every((_, i) => {
        const box = document.getElementById(`answer-box${i}`);
        return box && box.value.trim() !== "";
    });
    document.getElementById("btn-sub").disabled = !allFilled;
}

function del() {
    const input = document.getElementById(`answer-box${currentBox}`);
    if (input && input.value.length > 0) {
        input.value = "";
    } else if (currentBox > 0) {
        currentBox--;
        document.getElementById(`answer-box${currentBox}`).focus();
        document.getElementById(`answer-box${currentBox}`).value = "";
    }
}

function checkAnswers() {
    const userAnswers = operands.map((_, i) => parseInt(document.getElementById(`answer-box${i}`).value));
    const allCorrect = userAnswers.every((val, i) => val === operands[i]);

    if (allCorrect) {
        alert("Congratulation! You answered correctly!!!");
        incrementScore();
        correctCount++
    } else {
        alert(`Unfortunately, the correct answers were: ${operands.join(", ")}`);
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
    removeLife();
}

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
    hideElement("cal");
    operands.forEach((_, i) => {
        disableElement(`answer-box${i}`)
    });
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

/**This function allows the user to generate another set of random numbers.
 * The continue button is replaced with the submit button.
 * Answer boxes 1 & 2 are reset to zero.*/
function continuePlaying() {
    hideElement("continue");
    const container = document.getElementById("slot-container2");
    container.innerHTML = "";
    currentBox = 0
    runGame();
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

function recordNumbers() {
    checkAnswers();
}

/**Removes a users life after ever incorrect answer.*/
function removeLife() {
    livesRemaining--;
    hideElement(lifeIds[lifeIds.length - livesRemaining - 1]);

    if (livesRemaining === 0) {
        gameOver();
    }
}


/** * Allows the user to refresh the page and continue playing*/
function gameOver() {
  operands.forEach((_, i) => hideElement(`answer-box${i}`));
  hideElement("continue");
  finish();
}