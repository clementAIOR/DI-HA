/*
EXERCISE 1 — TIMER
==================
OUR STRATEGY
1. Find the existing HTML elements so JavaScript can interact with them.
2. Write ONE reusable function that adds a <p>Hello World</p> paragraph.
   Both Part II and Part III need this, so we avoid repeating code.
3. Use setTimeout() for things that happen ONCE after 2 seconds.
4. Use setInterval() for something that happens EVERY 2 seconds.
5. Stop the interval either when the user clicks the button OR when
   there are 5 paragraphs in the container.

Note: All three parts run on the same page. That means the paragraph made
by Part II counts toward the total of 5 paragraphs in Part III.
*/

// Get elements by their HTML id. We save them in constants because the
// elements themselves do not change; only their contents change.
const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

// A function groups instructions together so we can call them many times.
function addHelloWorld() {
    // createElement makes a new <p> in memory; it is not on the page yet.
    const paragraph = document.createElement("p");

    // textContent puts text into our paragraph (rather than HTML code).
    paragraph.textContent = "Hello World";

    // appendChild inserts the paragraph into the existing #container div.
    container.appendChild(paragraph);
}

// PART I — setTimeout(function, delayInMilliseconds)
// We choose setTimeout because an alert should appear ONE TIME only.
// 2000 milliseconds = 2 seconds.
setTimeout(function () {
    alert("Hello World");
}, 2000);

// PART II — Again setTimeout, because we need only ONE new paragraph.
// We pass the function NAME, not addHelloWorld(), because we want JavaScript
// to call it later, not immediately.
setTimeout(addHelloWorld, 2000);

// PART III — setInterval runs repeatedly until we cancel it.
// The returned intervalId is like a ticket: we need it to stop the timer.
const intervalId = setInterval(function () {
    addHelloWorld(); // Add one new paragraph each time the timer fires.

    // querySelectorAll("p") finds ALL paragraphs inside #container.
    // .length tells us how many paragraphs exist right now.
    const paragraphCount = container.querySelectorAll("p").length;

    // The assignment says to stop as soon as we reach 5 paragraphs.
    if (paragraphCount >= 5) {
        clearInterval(intervalId); // Cancel future calls to this interval.
    }
}, 2000);

// A click is a user EVENT. addEventListener lets us respond to it.
// Clicking the button stops the interval early. It does not remove
// paragraphs already created, and it does not cancel either setTimeout.
clearButton.addEventListener("click", function () {
    clearInterval(intervalId);
});

/*
CHECK YOUR UNDERSTANDING
- setTimeout: once after a delay.
- setInterval: repeatedly after a delay.
- clearInterval: stops a repeating timer.
- createElement + appendChild: add new HTML to the page.
- querySelectorAll(...).length: count matching elements in the DOM.
*/
