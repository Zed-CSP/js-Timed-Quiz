
// ***************
// Questions library
// ***************
const questions = [
    question1 = {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            {text: "<script src='xxx.js'>", correct: true},
            {text: "<script href='xxx.js'>", correct: false},
            {text: "<script name='xxx.js'>", correct: false},
            {text: "<script link='xxx.js'>", correct: false},
        ]
    },
    question2 = {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: "alertBox('Hello World');", correct: false},
            {text: "msg('Hello World');", correct: false},
            {text: "alert('Hello World');", correct: true},
            {text: "msgBox('Hello World');", correct: false},
        ]
    },
    
    question3 = {
        question: "How do you create a function in JavaScript?",
        answers: [
            {text: "function = myFunction()", correct: false},
            {text: "function myFunction()", correct: true},
            {text: "function:myFunction()", correct: false},
            {text: "function myFunction{}", correct: false},
        ]
    },
    
    question4 = {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            {text: "call myFunction()", correct: false},
            {text: "call function myFunction()", correct: false},
            {text: "myFunction()", correct: true},
            {text: "myFunction", correct: false},
        ]
    },
    
    question5 = {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text: "if i = 5", correct: false},
            {text: "if i = 5 then", correct: false},
            {text: "if (i == 5)", correct: true},
            {text: "if i == 5 then", correct: false},
        ]
    },
    
    question6 = {
        question: "How does a WHILE loop start?",
        answers: [
            {text: "while (i <= 10)", correct: true},
            {text: "while i = 1 to 10", correct: false},
            {text: "while (i <= 10; i++)", correct: false},
            {text: "while i <= 10", correct: false},
        ]
    },
    
    question7 = {
        question: "How does a FOR loop start?",
        answers: [
            {text: "for (i = 0; i <= 5)", correct: false},
            {text: "for (i <= 5; i++)", correct: false},
            {text: "for (i = 0; i <= 5; i++)", correct: true},
            {text: "for i = 1 to 5", correct: false},
        ]
    },
    
    question8 = {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            {text: "##This is a comment", correct: false},
            {text: "// This is a comment", correct: true},
            {text: "<!--This is a comment-->", correct: false},
            {text: "/*This is a comment*/", correct: false},
        ]
    },
    
    question9 = {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            {text: "Math.round(7.25)", correct: true},
            {text: "rnd(7.25)", correct: false},
            {text: "round(7.25)", correct: false},
            {text: "Math.rnd(7.25)", correct: false}
        ]
    },
    
    question10 = {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            {text: "Math.ceil(x, y)", correct: false},
            {text: "Math.max(x, y)", correct: true},
            {text: "top(x, y)", correct: false},
            {text: "ceil(x, y)", correct: false},
        ]
    }

]