
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
let button11 = document.createElement("button");
let button12 = document.createElement("button");
let button13 = document.createElement("button");
let button14 = document.createElement("button");
let button15 = document.createElement("button");
let button16 = document.createElement("button");
let button17 = document.createElement("button");
let button18 = document.createElement("button");
let button19 = document.createElement("button");
let button20 = document.createElement("button");

let heading = document.createElement("h1");
document.body.appendChild(heading);


heading.innerText = "";
heading.style.display = "inline-block";
heading.style.width = "100vw";
heading.style.textAlign = "center";

document.body.style.color = "#F66592";
document.body.style.fontFamily = "Helvetica";
document.body.style.backgroundColor = "#3f4fa5";

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);
document.body.appendChild(button5);
document.body.appendChild(button6);
document.body.appendChild(button7);
document.body.appendChild(button8);
document.body.appendChild(button9);
document.body.appendChild(button10);
document.body.appendChild(button11);
document.body.appendChild(button12);
document.body.appendChild(button13);
document.body.appendChild(button14);
document.body.appendChild(button15);
document.body.appendChild(button16);
document.body.appendChild(button17);
document.body.appendChild(button18);
document.body.appendChild(button19);
document.body.appendChild(button20);

document.body.style.display = "flex";
document.body.style.justifyContent = "space-around";
document.body.style.flexWrap = "wrap";

let allButtons = document.getElementsByTagName("button");



for (i = 0; i < allButtons.length; i++) {
    allButtons[i].style.padding = "10px 20px";
    allButtons[i].style.margin = "10px 20px";
    allButtons[i].style.width = "120px";
    allButtons[i].style.height = "50px";
    allButtons[i].style.border = "1px solid transparent";
    allButtons[i].style.borderRadius = "5px";
    allButtons[i].innerText = "Button";
    allButtons[i].style.cursor = "pointer";
    allButtons[i].style.color = "white";
    allButtons[i].style.fontSize = "15px";
    allButtons[i].style.fontWeight = "600";
    allButtons[i].style.backgroundColor = "#F66592";

    allButtons[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "#24E886";
    });

    allButtons[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "#F66592";
    })

    allButtons[i].addEventListener("click", function () {
        this.style.backgroundColor = "#F66592";
    })





}
