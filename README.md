
## Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button - THEN a timer starts and I am presented with a question
WHEN I answer a question - THEN I am presented with another question
WHEN I answer a question incorrectly - THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0 - THEN the game is over
WHEN the game is over - THEN I can save my initials and my score

------------------------------------------------------------------------------------
## General structure of the quiz

Greeting for the page
Introduce rules of the game
timer will start with a click on the start button
Question with options and can choose only one option
once selected and submitted - cant return to previous question 
correct answer gain points
Incorrect answer cost penalty which subtract time from the clock
Game will end either all questions answered or timer reaches 0
save score with initial and score

## create HTML 
create div element class it with container for the questions and answer
    create header element with question 
    create div for the answer buttons
    4 button elements for answers options
create another div container for start button and next button.

added timer with hide property and will remove it in JS to show when quiz starts
-------------------------------------------------------------------------------

Adding rules for the quiz to brief the users
updated header and rules for the quiz 


### pseudo code
Start button with best wishes and time starts or exit quiz
question and four options
5 questions one by one
record points for correct answer
time penalty for incorrect answer

## 14/03/2022

create array with questions, answer and 4 options including correct answer 

workflow of the quiz 
1) Function to start the game
    start the quiz game with click on the start button
    add event listener click on start button to start the game 
    hide the start button, header and rules after the game start


2)function StartTimer for 100 seconds
time set and will start the quiz start button
Next step - to add penalty for the wrong question 




3) Function to set the next question 
function set next question is working 
next step is to match selected options with the correct answer with true or false
if return true then add points with false 20 second penalty.

4) function checkAnswer created now 
    check the answer submitted by user with correct answer 
    next button initiated by removing hide class list and also added ++ in quizTracker to pop up next question.

## Date 17/03/2022

5) Added conditional statement to match correct answer and user score goes up by 1
6) added conditional statement for the questions to end the quiz or restart it and hide next button at the last question.
    next button is actually useless because while selecting the answer - quiz goes by 1+
    still needs to capture result of the answer and make next button active 
    options to end the quiz or restart it.gi

Finally debug the error - it was small typo error.

next to work is to store the initial for the users and link it to the high scores button .

## final comment:
There are few things I would like to work on it but due but I am unable to complete due to new week started and also the need to start working on new assignment as well. 







