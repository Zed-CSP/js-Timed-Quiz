// ***************
// method objects
// ***************

var playerResults = {
    score: playerScore,
    time: timeLeft,
    pass: false,
    perfect: false,
    highScore: false,
    message: "",

    update: function() {
        console.log("update")
        this.score = playerScore;
        this.time = timeLeft;
        this.checkPass();
        this.checkPerfect();
        this.checkHighestScore();
        this.messageTree();
        setStatusClass(document.body, this.pass);

    },
    checkPass: function() {
        console.log("checkPass")
        console.log(playerResults)
        if (this.time > 0 && this.score >= 7) {
            this.pass = true;
            headerElements.classList.add('correct')
            headerElements.innerText = "PASS";
            return true;
        } else {
            this.pass = false;
            headerElements.classList.add('wrong')
            headerElements.innerText = "FAIL!";
            return false;
        }
    },
    checkPerfect: function() {
        console.log("checkPerfect")
        console.log(playerResults)
        if (this.score === 10) {
            this.perfect = true;
            return true;
        } else {
            this.perfect = false;
            return false;
        }
    },
    checkHighestScore: function() {
        console.log("checkHighestScore")
        console.log(playerResults)
        if ((highScoresArray.length == 0) || ((this.score > highScoresArray[0].score) && (this.time > highScoresArray[0]))) {
            this.highScore = true;
            return true;
        } else {
            this.highScore = false;
            return false;
        }
    },
    updateName: function() {
        console.log("updateName")
        this.name = document.getElementById("userName").value;
    },
    Reset: function() {
        this.name = '';
        this.score = 0;
        this.time = 0;
        this.pass = false;
        this.perfect = false;
        this.highScore = false;
        this.message = '';
        console.log(playerResults)
    },
    messageTree: function() {
        if ((this.highScore == true) && (this.time > 0) && (this.score >= 7)) {
            console.log("highScore message")
            this.message += "Congratulations! You got the new high score!";
            if (this.perfect) {
                console.log("perfect score message")
                this.message += " And you got a perfect score!";
                return true;
            } else {
                return true;
            }
        } else if (this.pass) {
            console.log("pass message")
            this.message += "You passed the quiz!";
            if (this.perfect) {
                console.log("perfect score message")
                this.message += " And you got a perfect score!";
                return true;
            } else {
                return true;
            }
        } else {
            console.log("fail message")
            this.message += "You FAILED the quiz!";
            alert("Hit the books!");
            if (!this.pass && this.time <= 0) {
                console.log("time out message")
                this.message += " You ran out of time!"
                alert("That was pathetic!");
                return true;
            }
            if (localStorage.getItem("highScoresArray") === null || localStorage.getItem("highScoresArray") === "[]" || localStorage.getItem("highScoresArray") === "" || localStorage.getItem("highScoresArray") === undefined) {
                console.log("no high scores message")
                this.message += " But there are no high scores yet... so you're technically the best? ...congrats I guess.";
            } else {
                return true;
            }
        }
    }
};