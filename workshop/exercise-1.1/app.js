// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const text = document.querySelector(".result");
let body = document.querySelector("body");

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";

let counter = 1;
text.innerText = `You have ${counter} second to click!`;




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
}, 1000)

let didYouClick = false;

window.addEventListener("click", function (event) {
    if (event) {
        didYouClick = true;
    }
})


