


// Array created with questions, options and answers.
var question = [{
question: "Inside which HTML element do we put the JavaScript?",
options: ["<script>" , "<js>" , "<javascript>" , "<scripting>"],
correctAnswer: "<script>",
},

{
question : "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
options:["if(i<>5)" , "if(!=5)" , "if i<>5" , "if i=!5 then"],
correctAnswer : "if(!=5)",
},

{
question : "Which operator is used to assign a value to a variable?",
options:[ "-", "x" , "=" , "*"], 
correctAnswer : "=",
},

{
question : "Is javaScript case-sensitive?",
options:["No" , "Yes" , "Not applicable" , "Both A and B"],
correctAnswer : "Yes",
},

{
question_1 : "How do you declare a JavaScript variable?",
correctAnswer : "var carName;",
options :[ "v carName;" , "variable carName;" , "var carName;" , "var = carName;"]
}
];



// variable to store date from question array 
var shuffledQuestion = question;
var quizTracker = 0;
var secondsLeft = 51;
var userAnswer = 0;
var winCounter = 0;
var loseCounter = 0;
var penalty = 0;
var singleClick = true;



//below are the variable to initiate the quiz
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var heading = document.getElementById("heading");
var rulesBox = document.getElementById("rules-box");
var timerCount = document.getElementById("timer-count");
var question = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var quizTimer = document.getElementById("quiz-timer");
var btnContainer = document.querySelector(".btn-container");
var button = document.querySelector(".button");
var resultButton = document.querySelector(".result");
var scores = document.getElementById("scores");
var container = document.querySelector("container");
var quizOver = document.getElementById("quiz-over");
var initials = document.getElementById("initial");
var result = document.getElementById("result");


// added click event listener to start button
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click" , setNextQuestion);
// nextButton will appear once quiz starts
nextButton.addEventListener('click', () => {
   quizTracker++;
    setNextQuestion();
    singleClick = false;
      
});
resultButton.addEventListener("click", wins);
//question.setAttribute("class", "question");

scores.addEventListener("click" , setWins);



function startGame() {
    secondsLeft = 51;
    console.log("Started");
    startButton.classList.add("hide"); // after clicking the start button - hide it to start the quiz
    resultButton.classList.add("hide"); // results high scores will be hidden 
    heading.classList.add("hide"); // hide the header
    rulesBox.classList.add("hide");// hide the rules for the quiz
    questionContainerElement.classList.remove("hide"); // question will pop up
    quizTimer.classList.remove("hide");
    setNextQuestion();
    // Start time function starts at 100 seconds
    startTimer();
        
}

//function to set the first question 
function setNextQuestion() {
    singleClick = true;
    var showQuestion = shuffledQuestion[quizTracker].question;
    //console.log(showQuestion);
    question.textContent = showQuestion; 
    answerButton.innerHTML = "";
    if(quizTracker >= shuffledQuestion.length -1){
        nextButton.classList.add("hide");
    } else {
        nextButton.classList.remove("hide");
    }
    
    for (i=0; i < shuffledQuestion[quizTracker].options.length; i++){
     var backhandButton = document.createElement("button");
        
        // backhandButton is button to select answer
        backhandButton.textContent = shuffledQuestion[quizTracker].options[i];
        // added click on backHandButton
        backhandButton.onclick = checkAnswer;
        //answer button and backhandButton connected
        answerButton.append(backhandButton);
       
       
    }
}


function checkAnswer() {
    singleClick =false;
    console.log(singleClick);
    console.log("userAns");
    console.log(this.textContent);
    
    // conditions to check correct answer with if 
    if (shuffledQuestion[quizTracker].correctAnswer == this.textContent){
       winCounter += 50;
    //console.log("correct Answer!");
    console.log( "your correct answer = " + winCounter);
    
     } else {
        scorePenalty(); // 10 seconds penalty for the wrong answer.
       console.log("wrong answer");
    }
    
    if(quizTracker >= shuffledQuestion.length -1) {
        endGame(); // creat end game function to submit the scores for users
     }

     
}


function wins(){
    //get stored value from client storage, if it available 
    var storedWins = localStorage.getItem('winCount');
    // if stored value doesn't exit, set counter to 0
    if (storedWins === null) {
        winCounter = 0;
    } else {
        // If a value if retrieved from client storage set the winCounter to that value
        winCounter = storedWins;
    } 
    // var userResult = document.createElement("h3");
    // userResult.textContent = winCounter;
    // result.append(userResult);
}




function setWins () {
    localStorage.setItem("winCount", winCounter);
    //debugger;
    localStorage.setItem("scores", winCounter);
    // grab initials out of the input and store their win count in their local storage 
 }



//function will start timer for the quiz
function startTimer() {
    secondsLeft = secondsLeft - 1;
    if(secondsLeft < 51) {
        timerCount.innerHTML = secondsLeft;
    }
    // if (secondsLeft < 1 ) {
    //     window.clearInterval(update);
    //}
    if (secondsLeft === 0){
        clearInterval(update);
        endGame();
    }
}
update = setInterval("startTimer()", 1000);
    

function scorePenalty(){
        if (secondsLeft >= 10){
            secondsLeft = secondsLeft -10 
        } else {
            endGame();
        } 
 }


function endGame(){
    clearInterval(update);
    scores.addEventListener("click" , setWins);
    questionContainerElement.classList.add("hide"); 
    quizOver.classList.remove("hide"); 
    document.getElementById("winCount").textContent = winCounter;
    scores.addEventListener("click" , setWins);
}


