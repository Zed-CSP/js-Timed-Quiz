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

function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // if the answer is correct, the score will increase by 1
    if (correct) {  
        playerScore++
        console.log("correct! " + score)
        headerElements.classList.remove('hide')
        headerElements.innerText = "Correct!"
    } else if (!correct) {
        // if the answer is incorrect, the timer will decrease by 10 seconds
        timeLeft -= 10
        console.log("wrong! " + timeLeft)
        headerElements.classList.remove('hide')
        headerElements.innerText = "Wrong!"
    } else {
        console.log("error")
    }
    // if all questions are answered, the game will end
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        endGame()
    }
}

function setStatusClass(element, correct) {
    // changes hues of buttons
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    // removes hues of buttons
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState() {
    // resets state of buttons
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    headerElements.classList.add('hide')
    //while operates as long as the condition is true, so it will keep removing the first child until there are no more children
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function timer() {
    // counts down from 100 seconds, stops when time is up or all questions are answered
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
        if (gameON === false) {
            return timeLeft
        } else if (timeLeft <= 0) {
            gameON = false;
            clearTimeout(timerId);
            getScore();
            endGame();
            return timeLeft
        } else {
            timeLeftElement.innerHTML = 'Time Remaining ' + timeLeft;
            timeLeft--;
            getScore();
            return timeLeft
        }
    }
}

function endGame() {
    // do something when time is up
    gameON = false;
    console.log("endGame");
    questionContainerElement.classList.add('hide');
    document.getElementById('score').classList.remove('top-right');
    document.getElementById('next').classList.add('hide');
    document.getElementById('timer').classList.add('hide');
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('input').classList.remove('hide');
    playerResults.update(playerScore, timeLeft);
    console.log(playerResults);
    scoreElement.innerHTML = playerResults.message;
   
}

function getHighScores() {
    console.log('getHighScores');
    playerResults.updateName();
    highScoresArray = JSON.parse(localStorage.getItem('highScoresArray'));
    if (highScoresArray === null) {
        highScoresArray = [];
    }
    highScoresArray.push(playerResults);
    if (highScoresArray.length > 1) {
        highScoresArray.sort((a, b) => b.score - a.score || b.time - a.time);
    }
    if (highScoresArray.length > 10) {
        highScoresArray.pop();
    }
    localStorage.setItem('highScoresArray', JSON.stringify(highScoresArray));

}