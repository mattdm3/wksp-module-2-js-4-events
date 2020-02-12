// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...

const text = document.querySelector(".result");
let body = document.querySelector("body");

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";

let counter = 5;
text.innerText = `You have ${counter} second to click!`;

document.querySelector(".time-text").innerHTML = "";


let counterInterval = setInterval(function () {
    // while (counter > 0) {
    counter -= 1;
    console.log(counter);
    if (counter > 0) {
        text.innerText = `You have ${counter} second to click!`;

    } else clearInterval(counterInterval);
    // }
}, 1000);


// text.style.position = "absolute";
// text.style.top = "40vh";
// text.style.left = "40vh";
text.style.fontSize = "2rem";

function youLose() {
    text.innerText = "You lose!";
}
function youWin() {
    text.innerText = "WINNER!";
}

setTimeout(function () {
    if (didYouClick) {
        clearTimeout();
        youWin();
    } else youLose();
}, 5000)

let didYouClick = false;

window.addEventListener("click", function (event) {
    if (event) {
        didYouClick = true;
    }
})
