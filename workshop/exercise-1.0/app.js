// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let main = document.querySelector(".main");
main.style.fontSize = "50px";
let h1 = document.createElement("h1");
h1.innerText = "HELLO!";
window.addEventListener("click", function () {
    main.appendChild(h1);
    console.log("You clicked");
})