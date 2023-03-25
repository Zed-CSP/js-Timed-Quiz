// ***************************
// ******** Quiz App *********
// ***************************


// ***************
// variables
// ***************
var highScoresArray = [];

// ***************
// DOM elements
// ***************

// buttons
const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const submitButton = document.getElementById('submit')
const restartButton = document.getElementById('restart')

// active elements
const timeLeftElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const headerElements = document.getElementById("header");
const inputElement = document.getElementById("input");

// containers
const questionContainerElement = document.getElementById('quiz-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')

// ***************
// event listeners
// ***************
startButton.addEventListener('click', startGame)
submitButton.addEventListener('click', submit)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
restartButton.addEventListener('click', () => {
    clearHighScores()
    restartGame()
})
