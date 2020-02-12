// INSTRUCTIONS

// TWO players wait for a signal to start after a random delay. 

// Once the start signal, first person to press tehir key wins. IF a player presses before the signal appears, they lose. Player one presses the Q key and player 2 the p key. 

// FEATURES TO IMPLEMENT



// 2. Random position signal with sound (the exclamation marks)

// 3. Getting a point (first player to press their key wins, adds a point to the player)

// 4. Lose round (Opponent wins point)

// 5. Scores (display scores at the top for each player)

// 6. 3 rounds to win

// 7. Winning screen with restart button


// OPTIONAL 

// - Implement the sounds
// - Run animation
// - Move player to prize when round is won




// BODY STYLES 

document.body.margin = 0;
document.body.padding = 0;
document.body.style.width = "100%";



// PART 1 - CREATE & append ALL ELEMENTS

// Crate Main section w backgound

let main = document.createElement("div");
document.body.appendChild(main);

main.style.backgroundImage = "url(./imgs/bg.gif)";
main.style.backgroundRepeat = "no-repeat";
main.style.width = "1020px";
main.style.height = "95vh";
main.style.backgroundSize = "cover";
main.style.margin = "0 auto";
main.style.backgroundPosition = "center center";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignContent = "center";
main.style.alignItems = "center";
main.style.position = "relative";

// create background with MENU

let menu = document.createElement("div");
main.appendChild(menu);

menu.style.width = "35%";
menu.style.height = "28%";

menu.style.margin = "auto";
menu.style.textAlign = "center";
menu.style.alignItems = "center";
menu.style.display = "flex";
menu.style.flexDirection = "column";
menu.style.justifyContent = "space-around";
menu.style.minWidth = "120px";


// menu.style.display = "none";


let startBtn = document.createElement("button");
let instBtn = document.createElement("button");

menu.appendChild(startBtn);
menu.appendChild(instBtn);


// Styling for menu buttons
for (i = 0; i < 2; i++) {
    menu.children[i].style.width = "40%";
    menu.children[i].style.height = "23%";
    menu.children[i].style.minWidth = "90px";
    menu.children[i].style.border = "4px solid #8394ad";
    menu.children[i].style.backgroundColor = "#415777";
    menu.children[i].style.color = "white";
    menu.children[i].style.fontSize = "1rem";
    menu.children[i].style.cursor = "pointer";
    menu.children[i].style.zIndex = "50";
    menu.children[i].id = "b" + i;
}

startBtn.innerText = "Start Game"
instBtn.innerText = "Instructions"

// menu.style.opacity = "0";


// Create Instructions = INST

let inst = document.createElement("div");
main.appendChild(inst);

let instText = document.createElement("p");
let instExit = document.createElement("button");


inst.appendChild(instText);
inst.appendChild(instExit);

instText.innerText = "Two player wait for a signl to start after a random delay. Once the start signal, the first person to press their key wins. If a player presses before the singal appears, they lose. Player one presses the q key and player 2 presses the p key."

inst.style.width = "60%";
inst.style.minWidth = "90px";
inst.style.border = "4px solid #8394ad";
inst.style.backgroundColor = "#415777";
inst.style.color = "white";
inst.style.fontSize = "1.1rem";
inst.style.padding = "20px 20px";
inst.style.overflow = "hidden";
inst.style.position = "absolute";
inst.style.textAlign = "center";
inst.style.top = "40%";
inst.style.left = "20%";

inst.style.opacity = "0";



// Exit button for instruction

instExit.style.position = "absolute";
instExit.style.top = "0";
instExit.style.right = "0";
instExit.style.margin = "0";
instExit.style.border = "1px solid grey";
instExit.style.height = "18px";
instExit.style.width = "18px";
instExit.style.padding = "0";
instExit.style.cursor = "pointer";

instExit.innerText = "X";


//START GAME = create two palayers, player 1 and player 2

let players = document.createElement("div");
let player1 = document.createElement("img");
let player2 = document.createElement("img");
main.appendChild(players);
players.appendChild(player1);
players.appendChild(player2);

players.style.position = "absolute";
players.style.bottom = "5%";
players.style.left = "5%";
players.style.display = "flex";
players.style.justifyContent = "space-between";
players.style.width = "90%";
player1.src = "./imgs/p1.gif";
player2.src = "./imgs/p2.gif";
player2.width = "100";
player1.width = "100";
player2.style.opacity = "0";
player1.style.opacity = "0";

player1.style.transitionDuration = ".2s";
player2.style.transitionDuration = ".2s";



// create middle bottom ring 

let middleRing = document.createElement("img");
main.appendChild(middleRing);

middleRing.src = "./imgs/prize.gif";
middleRing.width = 80;
middleRing.style.opacity = 0;
middleRing.style.transitionDelay = ".1s";
middleRing.style.position = "absolute";
middleRing.style.bottom = "20px";

middleRing.style.paddingBottom = "60px";

// create signal (random?) with sound 

let signal = document.createElement("img");

main.appendChild(signal);

signal.src = "./imgs/signal.png";
signal.width = "100";
signal.style.position = "absolute";
signal.style.top = "50%";
signal.style.opacity = "0";

//create a foul element 

let foul = document.createElement("img");
main.appendChild(foul);

foul.src = "./imgs/foul.png";
foul.width = 80;
foul.style.position = "absolute";
foul.style.bottom = "50%";


foul.style.opacity = "0";


//create a "GO" element 

let go = document.createElement("p");

main.appendChild(go);

go.innerText = "GO!";
go.style.textAlign = "center";
go.style.fontSize = "100px";
go.style.fontWeight = "700";
go.style.fontFamily = "Helvetica";
go.style.fontFamily = "Helvetica";
go.style.position = "absolute";
go.style.top = "40%";
go.style.opacity = "0";


//create scores display at top of each player  ( 3 rings each ) playerOneScore, PlayerTwoScore. 
let score = document.createElement("div");
let pl1Score = document.createElement("div");
let pl2Score = document.createElement("div");

let p1_1 = document.createElement("img");
let p1_2 = document.createElement("img");
let p1_3 = document.createElement("img");

let p2_1 = document.createElement("img");
let p2_2 = document.createElement("img");
let p2_3 = document.createElement("img");


main.appendChild(score);

score.style.position = "absolute";
score.style.display = "flex";
score.style.justifyContent = "space-between";
score.style.width = "90%";
score.style.top = "40px";

score.appendChild(pl1Score);
pl1Score.appendChild(p1_1);
pl1Score.appendChild(p1_2);
pl1Score.appendChild(p1_3);

score.appendChild(pl2Score);
pl2Score.appendChild(p2_1);
pl2Score.appendChild(p2_2);
pl2Score.appendChild(p2_3);


p1_1.src = "./imgs/prize.gif";
p1_1.width = "80";
p1_1.id = "1id-1";
p1_1.style.opacity = "0";


p1_2.src = "./imgs/prize.gif";
p1_2.width = "80";
p1_2.id = "1id-2";
p1_2.style.opacity = "0";

p1_3.src = "./imgs/prize.gif";
p1_3.width = "80";
p1_3.id = "1id-3"
p1_3.style.opacity = "0";

p2_1.src = "./imgs/prize.gif";
p2_1.width = "80";
p2_1.id = "2id-1";
p2_1.style.opacity = "0";


p2_2.src = "./imgs/prize.gif";
p2_2.width = "80";
p2_2.id = "2id-2";
p2_2.style.opacity = "0";

p2_3.src = "./imgs/prize.gif";
p2_3.width = "80";
p2_3.id = "2id-3";
p2_3.style.opacity = "0";

// CREATE next round button

let nextRound = document.createElement("h2");
nextRound.innerText = "Next Round";
nextRound.style.border = "4px solid white";
nextRound.style.borderRadius = "20px";
nextRound.style.padding = "20px"
nextRound.style.background = "gold";
nextRound.style.fontSize = "65px";
nextRound.style.bottom = "280px";
nextRound.style.fontFamily = "Helvetica";
nextRound.style.opacity = "0";
nextRound.style.position = "absolute";


main.appendChild(nextRound);

// create winning screen with restart button 

// PART 2  -  CREATE FUNCTIONALITY ************


let p1_points = 0;
let p2_points = 0;



let resetRound = function () {
    nextRound.style.transitionDelay = "0s";
    nextRound.style.opacity = "0";
    player2.style.transform = "translate(0, 0)";
    player1.style.transform = "translate(0, 0)";
    middleRing.style.opacity = "0";
    middleRing.style.transform = "translate(0,0)";
    randomStartTimer();
}

let checkRound = function () {

    if (p1_points != 3 && p2_points != 3) {
        nextRound.style.transitionDelay = ".3s";
        nextRound.style.opacity = "1";
        nextRound.style.cursor = "pointer";
        nextRound.addEventListener("click", resetRound);
    }
}

let pointChecker = function () {
    middleRing.style.opacity = "0";
    if (p1_points === 1 && p1_1.style.opacity === "0") {
        p1_1.style.opacity = "1";
        checkRound();
    } else if (p1_points === 2 && p1_2.style.opacity === "0") {
        p1_2.style.opacity = "1";
        checkRound();
    } else if (p1_points === 3 && p1_3.style.opacity === "0") {
        p1_3.style.opacity = "1";
        checkRound();
    } else if (p2_points === 1 && p2_1.style.opacity === "0") {
        p2_1.style.opacity = "1";
        checkRound();
    } else if (p2_points === 2 && p2_2.style.opacity === "0") {
        p2_2.style.opacity = "1";
        checkRound();
    } else if (p2_points === 3 && p2_3.style.opacity === "0") {
        p2_3.style.opacity = "1";
        checkRound();
    }

    if (p1_points === 3) {
        player2.style.opacity = "0";
        go.style.opacity = "1";
        go.style.top = "80px";
        go.innerHTML = "<h3> PLAYER 1 WINS! </h3>";
        nextRound.style.display = "none";
        middleRing.style.display = "none";
    } else if (p2_points === 3) {
        player1.style.opacity = "0";
        go.style.opacity = "1";
        go.style.top = "80px";
        go.innerHTML = "<h3> PLAYER 2 WINS! </h3>";
        nextRound.style.display = "none";
        middleRing.style.display = "none";


    }

}


let checkLoser = function () {
    if (event.key === "q") {
        console.log("player 1, too early!!!")
    } else if (event.key === "p") {
        console.log("player 2, too early!!!")
    }
}
let checkWinner = function () {
    if (event.key === "p") {
        window.removeEventListener('keypress', checkWinner);
        go.style.opacity = "0";
        player2.style.transform = "translate(-415px, 0)";
        middleRing.style.transform = "translate(0, -130px)";
        p2_points += 1;
        pointChecker();



    } else if (event.key === "q") {
        window.removeEventListener('keypress', checkWinner);
        go.style.opacity = "0";
        player1.style.transform = "translate(405px, 0)";
        middleRing.style.transform = "translate(0, -130px)";
        p1_points += 1;
        pointChecker();




    }
}


// WHEN START BUTTON IS PRESSED
let randomStartTimer = () => {

    middleRing.style.opacity = "1";
    signal.style.opacity = "1";

    let randomSeconds = Math.floor(Math.random() * 5000);
    window.addEventListener("keypress", checkLoser);
    setTimeout(function () {
        window.removeEventListener("keypress", checkLoser);
        window.addEventListener('keypress', checkWinner);
        signal.style.opacity = "0";
        go.style.opacity = "1";


    }, randomSeconds)
}


let handleMenu = (e) => {

    //START BUTTON DO THIS

    if (e.target.id === "b0") {
        menu.style.opacity = "0";
        menu.style.opacity = "0";
        player1.style.opacity = "1";
        player2.style.opacity = "1";
        signal.style.opacity = "1";

        randomStartTimer();
    }

    //INST BUTTON DO THIS

    if (e.target.id === "b1") {
        menu.style.opacity = "0";
        inst.style.opacity = "1";



    }
}


let handleExit = (e) => {
    inst.style.opacity = '0';
    menu.style.opacity = "1";
}

// window.addEventListener("keypress", handleKey);
menu.addEventListener("click", handleMenu);
instExit.addEventListener("click", handleExit);

