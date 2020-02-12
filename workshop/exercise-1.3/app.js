// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

const body = document.querySelector("body");
let timer = document.querySelector("#timer");
let result = document.querySelector("#result");
let timeText = document.querySelector(".time-text");

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.fontSize = "60px";
body.style.fontFamily = "Arial";
body.style.backgroundColor = "#33AACE";
body.style.color = "white";
result.style.fontWeight = "700";
result.style.textAlign = "center";
timer.style.backgroundColor = "#1B4485";
timer.style.padding = "8px";





let randomTime = Math.floor((Math.random() * 5) + 1);

timer.innerText = randomTime;

let counter = randomTime;

let countdown = setInterval(function () {
    counter -= 1;
    console.log(counter);
    if (counter >= 0) {
        timer.innerText = counter;
    } else {

        clearInterval(countdown);
    }
}, 1000)



// WIN or Lose Msgs
function youLose() {
    result.innerText = "You lose. You're bad at this game 👎🏼."
}

function youWin() {
    result.innerText = "Congratulations. You won the easiest game of life 👏🏼."
}


// TImer of actual game




let didYouClick = false;
window.addEventListener("click", function (e) {
    if (e) {
        didYouClick = true;
        console.log("clicked");
        timeText.innerText = "";
        youWin();

    }
})

setTimeout(function () {
    if (didYouClick) {
        clearTimeout();
        youWin();
    } else
        youLose();
}, (randomTime * 1000));