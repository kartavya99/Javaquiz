


// Array created with questions, options and answers.
var question = [{
question: "Inside which HTML element do we put the JavaScript?",
options: ["<script>" , "<js>" , "<javascript>" , "<scripting>"],
correctAnswer: "<script>",
},

{
question : "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
correctAnswer : "if(!=5)",
options:["if(i<>5)" , "if(!=5)>" , "if i<>5" , "if i=!5 then"],
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
question : "How do you declare a JavaScript variable?",
correctAnswer : "var carName;",
options:[ "v carName;" , "variable carName;" , "var carName;" , "var = carName;"]
}
];

// timer variable
var secondsLeft = 150;



//below are the variable to initiate the quiz
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var heading = document.getElementById("heading");
var rulesBox = document.getElementById("rules-box");
var quizTimer = document.getElementById("quiz-timer");

startButton.addEventListener("click", startGame);

//first initiate start button with addEventlistner click for that creat variable StartButton

function startGame() {
    console.log("Started");
    startButton.classList.add("hide"); // after clicking the start button - hide it to start the quiz
    heading.classList.add("hide"); // hide the header
    rulesBox.classList.add("hide");// hide the rules for the quiz
    questionContainerElement.classList.remove("hide"); // question will pop up
    quizTimer.classList.remove("hide");
    
    

}




//function will start timer for the quiz
function startTimer() {
    //Sets timer
    var timerInterval = setInterval(function(){
        timerCount --;
        timerElement.textContent = timerCount + "seconds left.";

        if(secondsLeft = 0){
            clearInterval(timerInterval);
            sendMessage() = " thank you for taking this quiz!!!";
            startGame();
        }

    }, 1000);
}

