

// ### B-E-A-U-TIFUL

// Don't forget to take some time to make it pretty.

// BODY STYLING
document.body.style.backgroundColor = "#f5396d";

// CREATE ELEMENTS

// main container 
let mainContainer = document.createElement("div");

// button and container
let startBtn = document.createElement("button");
let startBtnContainer = document.createElement("div");
// timer and container 
let timer = document.createElement("p");
let timerContainer = document.createElement("div");

// random buttons 

let randomBtnContainer = document.createElement("div");

let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
let button4 = document.createElement("button");
let button5 = document.createElement("button");
let button6 = document.createElement("button");
let button7 = document.createElement("button");
let button8 = document.createElement("button");
let button9 = document.createElement("button");
let button10 = document.createElement("button");

button1.classList.add("randomBtn");
button2.classList.add("randomBtn");
button3.classList.add("randomBtn");
button4.classList.add("randomBtn");
button5.classList.add("randomBtn");
button6.classList.add("randomBtn");
button7.classList.add("randomBtn");
button8.classList.add("randomBtn");
button9.classList.add("randomBtn");
button10.classList.add("randomBtn");


let allButtons = document.getElementsByClassName("randomBtn");


// APPEND SECTIONS

document.body.appendChild(mainContainer);
document.body.appendChild(randomBtnContainer);

mainContainer.appendChild(timerContainer);
timerContainer.appendChild(timer);

mainContainer.appendChild(startBtnContainer);
startBtnContainer.appendChild(startBtn);

randomBtnContainer.appendChild(button1);
randomBtnContainer.appendChild(button2);
randomBtnContainer.appendChild(button3);
randomBtnContainer.appendChild(button4);
randomBtnContainer.appendChild(button5);
randomBtnContainer.appendChild(button6);
randomBtnContainer.appendChild(button7);
randomBtnContainer.appendChild(button8);
randomBtnContainer.appendChild(button9);
randomBtnContainer.appendChild(button10);


// MAIN CONTAINER STYLING

mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";
mainContainer.style.width = "100vw";
mainContainer.style.height = "100vh";
mainContainer.style.fontFamily = "Montserrat";
mainContainer.style.position = "absolute";



//********** */ TIMER *********************

timerContainer.style.zIndex = "50";
timerContainer.style.transitionDuration = ".8s";

timer.style.color = "white";
timer.style.fontSize = "180px";
timer.style.padding = "0";
timer.style.margin = "0";
timer.innerText = "00:05";
timer.style.zIndex = "50";
timer.style.transitionDuration = ".8s";
timer.style.fontWeight = "800";


// timer.style.position = "absolute";
// timer.style.top = "200px";
// timer.style.left = "34%";
// timer.style.display = "none";
let seconds = 4;
function runTimer() {
    setInterval(function () {
        if (seconds > -1) {
            timer.innerText = `00:0${seconds}`;
            seconds -= 1;
        } else {
            timer.innerText = "YOU LOSE!";
        }
    }, 1000);
    clearInterval();

}



//********** */ START BTN *********************

// START BTN CONTAINER STYLING
// startBtnContainer.style.width = "100vw";
// startBtnContainer.style.height = "100vh";
// startBtnContainer.style.display = "flex";
// startBtnContainer.style.justifyContent = "center";
// startBtnContainer.style.alignItems = "center";
startBtnContainer.style.zIndex = "50";

// START BUTTON STYLING
startBtn.style.backgroundColor = "#fbdd04";
startBtn.style.width = "320px";
startBtn.style.height = "200px";
startBtn.style.borderRadius = "90px";
startBtn.style.border = "5px solid #202A41";
startBtn.style.color = "#202A41";
startBtn.style.fontFamily = "Montserrat";
startBtn.style.fontSize = "35px";
startBtn.style.fontWeight = "900";
startBtn.style.boxShadow = "9px 10px 47px -21px rgba(0,0,0,0.75)";
startBtn.style.transitionDuration = ".7s";

startBtn.innerText = "START GAME";
startBtn.style.zIndex = "50";
startBtn.style.position = "absolute";
startBtn.style.top = "40%";
startBtn.style.left = "40%";





// Part 3 = - a random number of buttons appear on the screen.

// RANDOM BTN CONTAINER STYLING
randomBtnContainer.style.width = "100vw";
randomBtnContainer.style.height = "100vh";
randomBtnContainer.style.display = "flex";
randomBtnContainer.style.justifyContent = "space-around";
randomBtnContainer.style.alignItems = "center";
randomBtnContainer.style.position = "absolute";






function randomBtn() {
    for (i = 0; i < allButtons.length; i++) {

        // position/color: 
        allButtons[i].style.position = "absolute";
        allButtons[i].style.color = "#EFC4D6";
        allButtons[i].style.backgroundColor = "#389DF2";
        allButtons[i].style.width = "110px";
        allButtons[i].style.height = "80px";
        allButtons[i].style.border = "3px solid #202A41";
        allButtons[i].style.borderRadius = "10px";
        allButtons[i].innerText = "CLICK ME!";
        allButtons[i].style.color = "#202A41";
        allButtons[i].style.fontFamily = "Montserrat";
        allButtons[i].style.fontSize = "20px";
        allButtons[i].style.fontWeight = "700";
        allButtons[i].style.cursor = "pointer";
        allButtons[i].style.opacity = ".8";
        allButtons[i].style.zIndex = "10";


        // add id to each 

        allButtons[i].id = i + 1;


        allButtons[i].style.top = `${(Math.random() * 800)}px`;
        allButtons[i].style.left = `${(Math.random() * 800) + 100}px`;

        allButtons[i].style.transitionDuration = ".9s";


        // Random determination of how many buttons (raise the level to make it harder)

        let level = 7;


        if (i > (Math.floor(Math.random() * level) + 1)) {
            allButtons[i].style.display = "none";
        }



    }
}

randomBtn();


// INTERACTIVITY ***************************

// # The Events Workshop

// ## Exercise 4 - Is This All a Game to You?!

// Building on the exercises done so far, write a program that

// - on load, there is only a 'Start' button
// - clicking on the start button
//     - deletes the button
//     - a random number of buttons appear on the screen.
// - These buttons need to all be clicked within a given amount of time.

// If the user is successful, reward them! They've won the game!!

// ### Note.

// - Once the user clicks all of the buttons, the game ends.
// - Once the game ends, the buttons no longer change change color (remove the event listeners).


window.onload = function () {
    randomBtnContainer.style.opacity = "0";
    timerContainer.style.opacity = "0";
}


// Count how many btns have generated on screen
let displayOnCount = 10;

function gameStart() {
    // stopPropagation();

    // Remove the startbutton
    startBtn.style.opacity = "0";
    startBtn.style.zIndex = "0";
    startBtn.style.display = "none";

    // Make time appear and start
    timerContainer.style.opacity = "1";
    timerContainer.style.zIndex = "0";
    runTimer();

    // make random buttons appear 
    randomBtnContainer.style.opacity = "1";
    randomBtnContainer.style.opacity = "1";

    // count how many there are


    for (i = 0; i < allButtons.length; i++) {
        if (allButtons[i].style.display === "none") {
            displayOnCount--;
        }
    }
    console.log(displayOnCount);

    // listen for clicks on random buttons

}


startBtn.addEventListener("click", gameStart);


// Check if win/lose ADD WINNER/LOSER TEXT

let winText = document.createElement("p");
document.body.appendChild(winText);

winText.innerText = "WINNER!👏🏼👏🏼👏🏼";
winText.style.fontSize = "90px";
winText.style.fontFamily = "Montserrat";
winText.style.color = "#202a41";
winText.style.fontWeight = "900";
winText.style.position = "absolute";
winText.style.top = "36%";
winText.style.left = "34%";
winText.style.transform = "scale(1.5)";
winText.style.transitionDuration = ".5s";
winText.style.opacity = "0";



function checkWin() {
    displayOnCount--;
    console.log(displayOnCount);
    if (displayOnCount === 0) {
        if (seconds > 0) {
            console.log("WINNER")
            winText.style.opacity = "1";
            timer.style.opacity = "0";
        }
        window.removeEventListener("click", randomBtnClick);
        window.removeEventListener("click", checkWin);
    }


}

// MAKE BUTTONS DISAPPEAR 

function randomBtnClick(e) {
    e.target.style.opacity = 0;
}

for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", randomBtnClick);
    allButtons[i].addEventListener("click", checkWin);

}
