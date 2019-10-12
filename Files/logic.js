
/*This is the Timer. The setTime function doesn't work yet.*/
/*This will be wrapped in a JS eventlistener*/
    var timeEl = document.querySelector(".timer");
    var secondsLeft = 75;

    function setTime() {
        var timerInterval = setInterval(function() {
        console.log ("secondsLeft: ", secondsLeft);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        } else {
            secondsLeft--;
            timeEl.textContent = "Time " + secondsLeft;
        }
    }, 1000);
}

    
/*This is my Start Button, Modal, and Close Button inside the modal*/
/*This is the variable that will grab the start button element*/
    var startBtn = document.getElementById("start");
/*This is the variable that will grab the modal element*/    
    var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");
    
/*Inside the click event, this is the function to pop-up the modal*/
    
/*This is the on click event*/
    startBtn.onclick = function() {
        modal.style.display = "block";
/*Inside the click event, this calls the function to start the Timer decrement*/
        setTime ();
        askQuestion ();
    }




/*This is my Quiz Loop logic*/

/*5 modals will pop up in succession, prompted by the above click event*/

/*When the last modal click event is fired, 
---this is the function that closes the modal pop up*/

/*---And, this is the function that stops the timer*/

/*---This is the function for storing the stopped timer value in Local Storage*/

/*---This redirects the user to the finishline page*/



/*This is my quiz question array of objects*/

var quiz = [{
    question: "What does JS stand for?",
    answers: ["JavaScript","JavaScrilla","Jamaican Stiva","Jeremy Stein"],
    correct: "a",
},{
    question: "",
    answers: [],
    correct: "",
}];

var counter = 0;


/*This is the logic that creates the question and answers in the modal, */
var modalDiv = document.getElementById("modalContent")
var askThis = document.createElement ("p");
var answersHere = document.createElement ("li")
/*and displays the question and answers inside of each new element*/
function askQuestion () {
    var currentQuestion = quiz[counter];
    console.log(currentQuestion);
    debugger;
    counter++;
    var textNode = document.createTextNode(currentQuestion.question);
    askThis.appendChild(textNode);
    modalDiv.appendChild(askThis);

    console.log ("This is the question text " + askThis);
    console.log ("This is the array of answers " + answersHere);

    modalDiv.appendChild (answersHere);
}

/*and a click event for each element*/



/*This is the logic for each question of the quiz*/

/*This is the click event that*/

/*compares the value of the answer choice clicked with the value of the corresponding object value*/

/*if value is true, then*/

/*---returns a dynamically generated element that states "correct"*/

/*---waits half of one second and pops up the next modal*/

/*---or returns a dynamically generated element that states "incorrect"*/

/*---while loops back to waiting for this same click event, again*/