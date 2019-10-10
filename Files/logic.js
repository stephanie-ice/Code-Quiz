
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
    setTime ();
    
/*This is my Start Button*/

/*This is the on click event*/

/*Inside the click event, this calls the function to pop-up the modal*/

/*Inside the click event, this calls the function to start the Timer decrement*/



/*This is my Quiz Loop logic*/

/*5 modals will pop up in succession, prompted by a click event*/

/*When the last modal click event is fired, 
---this is the function that closes the modal pop up*/

/*---And, this is the function that stops the timer*/

/*---This is the function for storing the stopped timer value in Local Storage*/

/*---This redirects the user to the finishline page*/



/*This is my quiz question array of objects*/




/*This is the logic for each question of the quiz*/

/*This is the click event that*/

/*compares the value of the answer choice clicked with the value of the corresponding object value*/

/*if value is true, then*/

/*---returns a dynamically generated element that states "correct"*/

/*---waits half of one second and pops up the next modal*/

/*---or returns a dynamically generated element that states "incorrect"*/

/*---while loops back to waiting for this same click event, again*/