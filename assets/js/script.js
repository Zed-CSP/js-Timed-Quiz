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

// ***************
// functions
// ***************
function startGame() {
    //starts the game when button is pressed
    playerResults.Reset();
    timeLeft = 100;
    currentQuestionIndex = 0;
    playerScore = 0;
    gameON = true;
    console.log('function startedGame')
    startButton.classList.add('hide')
    headerElements.classList.add('hide')
    //starts timer function
    timer()
    // shuffles questions returns value above or below 0
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    // sets current question index to 0
    currentQuestionIndex = 0
    questionElement.classList.remove('hide')
    answerButtonsElement.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    timeLeftElement.classList.remove('hide')
    scoreElement.classList.remove('hide')
    setNextQuestion()
}

function submit() {
    getHighScores()
    displayHighScores()
}

function getScore() {
    if (gameON) {
        scoreElement.innerHTML = "Score: " + playerScore
    } else {
        console.log('getScore error')
    }
}

function setNextQuestion(gameON) {
    console.log('function setNextQuestion')
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    console.log('function showQuestion')
    console.log(question)
    // displays question
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        // only sets "correct" value if answer is correct, this is because it will return a string if true and not a boolean
        if (answer.correct) {
            console.log('correct answer set')
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })    
}