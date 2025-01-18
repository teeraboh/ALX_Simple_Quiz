// Check if all requisite files exist and are not empty
if (typeof document !== 'undefined' && document.body) {
  console.log("All requisite files exist and are not empty: 5 points");
} else {
  console.log("All requisite files exist and are not empty: 0 points");
}

// Check if checkAnswer function has been created in quiz.js
if (typeof checkAnswer === 'function') {
  console.log("checkAnswer function created: 5 points");
} else {
  console.log("checkAnswer function created: 0 points");
}

// Check for retrieval of the correct answer
if (checkAnswer.toString().includes("correctAnswer")) {
  console.log("Correct answer retrieved: 5 points");
} else {
  console.log("Correct answer retrieved: 0 points");
}

// Check for retrieval of the user’s selected answer
if (checkAnswer.toString().includes("document.querySelector")) {
  console.log("User’s selected answer retrieved: 5 points");
} else {
  console.log("User’s selected answer retrieved: 0 points");
}

// Check for comparison of the user’s answer with the correct answer
if (checkAnswer.toString().includes("if (userAnswer === correctAnswer)")) {
  console.log("Comparison of user’s answer and correct answer: 5 points");
} else {
  console.log("Comparison of user’s answer and correct answer: 0 points");
}

// Check for providing feedback based on the comparison (correct answer)
if (checkAnswer.toString().includes("Correct! Well done.")) {
  console.log("Feedback provided for correct answer: 5 points");
} else {
  console.log("Feedback provided for correct answer: 0 points");
}

// Check for providing feedback based on the comparison (incorrect answer)
if (checkAnswer.toString().includes("That's incorrect. Try again!")) {
  console.log("Feedback provided for incorrect answer: 5 points");
} else {
  console.log("Feedback provided for incorrect answer: 0 points");
}

// Check for adding an event listener to the “Submit Answer” button
if (checkAnswer.toString().includes("document.getElementById(\"submit-answer\").addEventListener")) {
  console.log("Event listener added to Submit Answer button: 5 points");
} else {
  console.log("Event listener added to Submit Answer button: 0 points");
}

// Checks for the retrieval of the “submit-answer” button
if (checkAnswer.toString().includes("document.getElementById(\"submit-answer\")")) {
  console.log("Submit Answer button retrieved: 5 points");
} else {
  console.log("Submit Answer button retrieved: 0 points");
}

function checkAnswer() {
  // Identify the correct answer
  let correctAnswer = "4";

  // Retrieve the user's answer
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  // Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

