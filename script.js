// MALIVO BRAIN CHALLENGE

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const checkButton = document.getElementById("check-answer");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

// Our first puzzle
const correctAnswer = "piano";

let score = 0;
let answered = false;

checkButton.addEventListener("click", function () {

    if (answered) {
        feedback.textContent = "You have answered this puzzle!";
        return;
    }

    const userAnswer = answer.value.trim().toLowerCase();

    if (userAnswer === "") {
        feedback.textContent = "Please enter an answer first!";
        return;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! 🎉 You earned 10 points!";
        score += 10;
        scoreDisplay.textContent = score;
        answered = true;
    } else {
        feedback.textContent = "Not quite! Try again. 💪";
    }

});