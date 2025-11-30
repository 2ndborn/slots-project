let operands = [];
let currentBox = 0;
let livesRemaining = 3;
const lifeIds = ["life1", "life2", "life3"];
let playerName = "Player"
let level = 0;

document.getElementById("name-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("player").value.trim();
    if (input) {
        playerName = input
    }
    header();
    hideElement("name-form")
    unhideElement("new-game")
})

function header() {
    const overlay = document.getElementById("game-overlay");
    const header = document.createElement("h1");
    header.id = "game-header";
    header.textContent = `Let's play ${playerName}!!!`
    const newGameBtn = document.getElementById("new-game");
    overlay.insertBefore(header, newGameBtn);
}

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
    const score = parseInt(document.getElementById("score").innerText)
    const numOperands = Math.min(2 + Math.floor(score / 5), 9);

    const submitBtn = document.getElementById("btn-sub");
    if (submitBtn) submitBtn.disabled = true;

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
        // alert(`Congratulation ${playerName}! You answered correctly!!!`);
        incrementScore();
    } else {
        alert(`Unfortunately, the correct answers were: ${operands.join(", ")}`);
        incrementWrongAnswer();
    }
}

/**Gets the current score and increases by 1 point.*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    if (oldScore % 5 === 0) {
        incrementStage();
    } else {
        showFadeMessage("You're correct!")
    }
}

/**Get the wrong answers and push to incorrect array.*/
function incrementWrongAnswer() {
    removeLife();
}

function incrementStage() {
    ++level;
    showFadeMessage(`Level ${level} achieved`)
}

function showFadeMessage(message) {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const msg = document.createElement("h1");
    msg.className = "fade-message";
    msg.textContent = message;
    div.appendChild(msg);

    // fade in
    setTimeout(() => msg.classList.add("show"), 50);

    // fade out
    setTimeout(() => {
        msg.classList.remove("show");
        setTimeout(() => msg.remove(), 500);
    }, 1500)
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
        event.preventDefault();

        const continueBtn = document.getElementById("continue");
        const submitBtn = document.getElementById("btn-sub"); // keypad submit button

        // If Continue is visible, trigger continuePlaying
        if (continueBtn && !continueBtn.classList.contains("hide")) {
            continuePlaying();
        }
        // Otherwise, if Submit is visible and enabled, trigger submitAnswer
        else if (submitBtn && !submitBtn.disabled) {
            submitAnswer();

            submitBtn.classList.add("active");
            setTimeout(() => submitBtn.classList.remove("active"), 150);
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
    const header = document.getElementById("game-header");
    if (header) header.remove();
    runGame();
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
  hideElement(lifeIds[livesRemaining]); // hides bulbs in reverse order
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

function finish() {
    unhideElement("game-overlay")
    const overlay = document.getElementById("game-overlay")
    const head = document.createElement("h1")
    head.textContent = "Game Over"
    head.id = "game-header"
    head.style.color = "red"
    overlay.appendChild(head)
    const subHead = document.createElement("h2")
    const score = document.getElementById("score").innerText;
    subHead.textContent = `You scored ${score}`
    subHead.id = "game-header"
    subHead.style.color = "hsl(0, 100%, 40%)"
    overlay.appendChild(subHead)
    const buttons = document.createElement("div");
    buttons.innerHTML = `
    <button class="play-again" onclick="location.reload()">
        <i class="fa fa-repeat" aria-hidden="true"></i>
    </button>
    <button class="home-btn" onclick="window.location.href='index.html'">
        <i class="fa fa-home" aria-hidden="true"></i>
    </button>
    `
    overlay.appendChild(buttons);
}