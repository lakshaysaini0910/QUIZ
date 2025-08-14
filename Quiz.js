const questions = [
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<href>", "<a>", "<hyperlink>"],
    answer: "<a>"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Mark Language",
      "Hyper Tool Multi Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["title", "src", "alt", "href"],
    answer: "alt"
  },
  {
    question: "Which HTML tag is used to define the largest heading?",
    options: ["<h1>", "<head>", "<heading>", "<h6>"],
    answer: "<h1>"
  },
  {
    question: "Which tag is used to insert a line break?",
    options: ["<lb>", "<break>", "<br>", "<newline>"],
    answer: "<br>"
  },
  {
    question: "In HTML, which attribute is used to open a link in a new tab/window?",
    options: ['window="_blank"', 'target="_blank"', 'newtab="true"', 'open="new"'],
    answer: 'target="_blank"'
  },
  {
    question: "Which of the following is the correct HTML for inserting an image?",
    options: [
      '<img alt="image" src="pic.jpg">',
      '<image src="pic.jpg" alt="image">',
      '<img href="pic.jpg" alt="image">',
      '<pic src="pic.jpg" alt="image">'
    ],
    answer: '<img alt="image" src="pic.jpg">'
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<foot>", "<section>"],
    answer: "<footer>"
  },
  {
    question: "What is the correct HTML element for playing video files?",
    options: ["<movie>", "<video>", "<play>", "<media>"],
    answer: "<video>"
  },
  {
    question: "Which HTML element is used to display a scalar measurement within a range?",
    options: ["<gauge>", "<progress>", "<meter>", "<scale>"],
    answer: "<meter>"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  const questionObj = shuffledQuestions[currentQuestionIndex];
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = questionObj.question;
  optionsEl.innerHTML = "";

  questionObj.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(selectedOption) {
  const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }
  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "#a0e7a0"; // Green
    } else if (btn.textContent === selectedOption) {
      btn.style.backgroundColor = "#f7a8a8"; // Red
    }
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  const resultEl = document.getElementById("result");
  const quizEl = document.getElementById("quiz");

  quizEl.innerHTML = ""; // Clear quiz content
  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `🎉 You scored ${score} out of ${shuffledQuestions.length}! <br><br>
    <button onclick="startQuiz()">Play Again</button>`;
}

startQuiz();