// ### The Task

// Create a page that

// 1. contains 3 sections (one for each of the following)
// 2. displays the current time
// 2. contains a start/stop button with a stopwatch which starts at 00:00 and continues until the user clicks "stop"
// 3. contains a timer where the user can enter a number of seconds, click start and the timer counts down to 0. There should be a sound announcingthe end as well.

// ### Make it look "decent"

// Go as crazy as you like. It doesn't need to be complicated, just a little "purty."


// CREATE SECTIONS

let section_1 = document.createElement("div");
let section_2 = document.createElement("div");
let section_3 = document.createElement("div");

let timeParagraph = document.createElement("p");
let button = document.createElement("button");
let stopWatch = document.createElement('p');
let countDownInput = document.createElement("input");
let countDownBtn = document.createElement("button");
let countDownText = document.createElement("p");

// APPEND SECTIONS 

let body = document.querySelector("body");
body.appendChild(section_1);
body.appendChild(section_2);
body.appendChild(section_3);

// SOME STYLING

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";




// SECTION 1

// show current time 
setInterval(function () {
    let currentMinutes = new Date().getMinutes();
    let currentHours = new Date().getHours();
    let currentSeconds = new Date().getSeconds();
    let time = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    timeParagraph.innerText = time;
}, 1000)

section_1.appendChild(timeParagraph);
timeParagraph.style.fontSize = "3em";
timeParagraph.style.marginBottom = "10px";

// SECTION 2 

section_2.appendChild(stopWatch);

let stopMilliseconds = "00";
let stopSeconds = "00";
let stopMinutes = "00";

stopWatch.innerText = `${stopMinutes}:${stopSeconds}:${stopMilliseconds}`;
stopWatch.style.fontSize = "2rem";
stopWatch.style.margin = "20px";

section_2.appendChild(button);
section_2.style.textAlign = "center";
button.style.width = "80px";
button.style.height = "40px";
button.style.borderRadius = "5px";
button.style.border = "2px solid black";
button.style.fontSize = "20px";
button.style.cursor = "pointer";
button.innerText = "Start";


stopMilliseconds = 1;
setInterval(function () {
    if (btnStart) {
        if (stopMilliseconds < 10) {
            stopMilliseconds += 1;
            stopWatch.innerText = `${stopMinutes}:${stopSeconds}:${stopMilliseconds}`;
        } else {
            stopMilliseconds = 0;
            stopMilliseconds += 1;

            stopWatch.innerText = `${stopMinutes}:${stopSeconds}:${stopMilliseconds}`;
        }
    } else if (btnStart = false) {
        clearInterval();
    }

}, 100);


// function secInterval() {
stopSeconds = 1;
setInterval(function () {
    if (btnStart) {
        if (stopSeconds < 60) {
            stopSeconds += 1;
            stopWatch.innerText = `${stopMinutes}:${stopSeconds}:${stopMilliseconds}`;
        } else {
            stopSeconds = 0;
            stopSeconds += 1;
            minInterval();
            stopWatch.innerText = `${stopMinutes}:${stopSeconds}:${stopMilliseconds}`;
        }
    } else if (btnStart = false) {
        clearInterval();
    }

    // console.log(stopSeconds);
}, 1000);
// }



stopMinutes = 0;
setInterval(function () {
    if (btnStart) {
        if (stopMinutes < 60) {
            stopMinutes += 1;
            stopWatch.innerText = `${stopMinutes}:${stopSeconds}:${stopMilliseconds}`;
        } else {
            stopMinutes = 0;
            stopMinutes += 1;
            stopWatch.innerText = `${stopMinutes}:${stopSeconds}:${stopMilliseconds}`;
        }
    } else if (btnStart = false) {
        clearInterval();
    }
}, 3600000);



let buttonCount = 1;
let btnStart = false;

button.addEventListener("click", function () {
    if (buttonCount % 2 !== 0) {
        buttonCount++;
        button.innerText = "Stop";
        btnStart = true;
    } else if (buttonCount % 2 === 0) {
        buttonCount++;
        button.innerText = "Start";
        btnStart = false;
    }

})

// SECTION 3 

// a timer where the user can enter a number of seconds, click start and the timer counts down to 0. There should be a sound announcing the end as well. 

// let countDownInput = document.createElement("input");
// let countDownBtn = document.createElement("button");
// let countDownText = document.createElement("p");

section_3.style.display = "flex";
section_3.style.flexDirection = "column";
section_3.style.paddingTop = "20px";
section_3.style.alignItems = "center";

countDownInput.style.margin = "20px"
countDownInput.style.height = "30px"
countDownInput.style.width = "110px"
countDownInput.style.border = "none";
countDownInput.style.textAlign = "center";
countDownInput.placeholder = "Seconds"
countDownInput.style.borderBottom = "2px solid grey";

countDownBtn.style.height = "40px";
countDownBtn.style.width = "80px";
countDownBtn.style.border = "2px solid grey";
countDownBtn.style.borderRadius = "4px";
countDownBtn.style.backgroundColor = "grey";
countDownBtn.style.fontWeight = "600";

countDownBtn.innerText = "Count Down";

section_3.appendChild(countDownInput);
section_3.appendChild(countDownBtn);
section_3.appendChild(countDownText);


let countDownClick = false;
let countDownCount = 1;

countDownBtn.addEventListener("click", function () {

    if (countDownCount % 2 !== 0) {
        countDownClick = true;
        countDownCount++;
        countDownBtn.innerText = "Stop";
        console.log(countDownCount);
    } else if (countDownCount % 2 === 0) {
        // countDownInput.value = "That's not a number!";
        countDownClick = false;
        countDownCount++;
        countDownBtn.innerText = "Start";

    }
})

let sound = new Audio("ding.mp3");
sound.loop = false;


// TIMER GOES DOWN
setInterval(function () {
    if (countDownClick) {
        if (countDownInput.value > 0) {
            countDownInput.value -= 1;
        } else {
            sound.play();
            countDownInput.value = 0;
            countDownBtn.innerText = "Done!";
            clearInterval();
            setTimeout(function () {
                sound.pause();
            }, 1000);

        }
    } else if (countDownClick = false) {

        clearInterval();
    }
}, 1000);

function playSound() {
    if (countDownInput.value === 0) {
        sound.play();
    }
}