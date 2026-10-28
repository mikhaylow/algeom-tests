const start_button = document.getElementById("start-button");
const start_screen = document.getElementById("start-screen");
const questionScreen = document.getElementById("questions-screen");

const questionsData = [
  {
    id: 1,
    question:
      "Опредилетиль кв. матрицы - это число равное сумме произведений элементов какой-либо строки (столбца) на их алгебраические дополнения",
    options: ["верно", "неверно"],
    correct: "", // add corrent answer
  },

  {
    id: 2,
    question: "При транспонировании матрицы как меняется её определитель",
    options: ["становится отрицательным", "равен 0", "не изменяется"],
    correct: "", // add corrent answer
  },

  {
    id: 3,
    question: "При перестановке двух строк (или двух столбцов) определитель",
    options: [
      "не изменяется",
      "меняет знак на противополжный",
      "становится отрицательным",
    ],
    correct: "", // add corrent answer
  },
  {
    id: 4,
    question: "Опредилетиль матрицы с двумя равными строками (или столбцами)",
    options: ["равен -1", "равен последнему элементу матрицы", "равен 0"],
    correct: "", // add corrent answer
  },

  {
    id: 5,
    question:
      "Общий множитель элементов любой строки (или столбца) можно вынести за знак определителя",
    options: ["верно", "неверно"],
    correct: "", // add corrent answer
  },

  {
    id: 6,
    question:
      "Если элементы матрицы двух строк (или столбцов) пропорциональны, то определитель",
    options: ["равен 0", "не равен 0"],
    correct: "", // add corrent answer
  },

  {
    id: 7,
    question:
      "Если к элементам матрицы одной строки (или столбца) прибавить соответствующие элементы другой строки (или столбца), умноженные на число, то определитель",
    options: ["изменится", "не изменится"],
    correct: "", // add corrent answer
  },
  {
    id: 8,
    question: "Определитель треугольной матрицы равен",
    options: [
      "сумме элементов матрицы",
      "произведению элементов главной диагонали",
      "равен 0",
    ],
    correct: "", // add corrent answer
  },

  {
    id: 9,
    question:
      "Квадратная матрица n порядка у которой определитель отличен от 0 называется",
    options: ["вырожденная", "невырожденная"],
    correct: "", // add corrent answer
  },

  {
    id: 10,
    question:
      "Квадратная матрица n порядка у которой определитель равен 0 называется",
    options: ["вырожденная", "невырожденная"],
    correct: "", // add corrent answer
  },
];

start_button.addEventListener("click", () => {
  start_screen.classList.add("hidden");
  renderQuestionScreen();
});

let currentQuestionIndex = 0;
let score = 0;

function renderQuestionScreen() {
  if (currentQuestionIndex >= questionsData.length - 1) {
    questionScreen.innerHTML = `<div class="title">Тест окончен!</div><div class="info">Ваш результат: ${score} из ${questionsData.length}</div>`;
    return;
  }

  const currentData = questionsData[currentQuestionIndex];

  const optionsHtml = currentData.options
    .map((option, index) => {
      return `<button class="answer-button" onclick="handleAnswer(${index})">${option}</button>`;
    })
    .join("");

  questionScreen.innerHTML = `
    <div class="question-title">${currentData.question}</div>
    <div class="question-options-buttons">
      ${optionsHtml}
    </div>
  `;
}

function handleAnswer(selectedIndex) {
  const currentData = questionsData[currentQuestionIndex];

  if (selectedIndex === currentData.correct) score++;

  currentQuestionIndex++;
  renderQuestionScreen();
}
