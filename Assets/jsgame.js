const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choice1: "Strings",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
    answer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store ________.",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the above",
    answer: 4,
  },
  {
    question:
      "A very useful tool during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "Terminal/Bash",
    choice3: "For Loops",
    choice4: "console.log",
    answer: 4,
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables.",
    choice1: "Commas",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Parenthesis",
    answer: 3,
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _________.",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parenthesis",
    choice4: "Square Brackets",
    answer: 3,
  },
];

// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem('score', score);
    return window.location.assign("./end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);

    selectedAnswer == currentQuestion.answer ? (score++, getNewQuestion()) : (getNewQuestion());
  });
});


startGame();
