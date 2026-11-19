/*
EXERCISE 2 — MOVE THE BOX
=========================
OUR STRATEGY
1. Find the yellow container and the red square using DOM selectors.
2. Calculate how far the red square can travel before touching the edge.
3. Start a repeating timer with setInterval().
4. At every tick, increase the square's horizontal position by 1 pixel.
5. Use clearInterval() to stop exactly at the right edge.

Why animate 'left'? Because the red square has position: absolute in CSS,
and the yellow container has position: relative. This lets the square
move horizontally INSIDE the yellow box.
*/

// Keep the timer ID outside the function so we can stop a previous run
// if the user clicks the button several times.
let intervalId;

// The HTML button calls this function with onclick="myMove()".
function myMove() {
    // Find the two existing HTML elements we will work with.
    const box = document.getElementById("animate");
    const container = document.getElementById("container");

    // The square must stop when its RIGHT edge touches the container's
    // RIGHT edge. So subtract the square's width from the container width.
    // With 400px and 50px, the maximum LEFT position is 350px.
    const maxPosition = container.clientWidth - box.offsetWidth;

    // We begin at the left edge, which is position 0.
    let position = 0;

    // If the button is clicked again, stop the old timer first.
    // Otherwise two intervals might move the same square at once.
    clearInterval(intervalId);

    // Reset the red square to the start for each new animation.
    box.style.left = "0px";

    // setInterval repeatedly runs the callback. The exercise asks for 1ms.
    // Note: real browsers often run intervals slower than 1ms; this is normal.
    intervalId = setInterval(function () {
        // Always check the stopping condition BEFORE moving.
        // 'return' exits this callback so it cannot move again this tick.
        if (position >= maxPosition) {
            clearInterval(intervalId);
            return;
        }

        // Increase the number by one (e.g., 0 -> 1 -> 2 -> 3).
        position += 1;

        // CSS positions require units, so we add the string 'px'.
        box.style.left = position + "px";
    }, 1);
}

/*
CHECK YOUR UNDERSTANDING
- setInterval(callback, 1): requests repeated calls with a 1ms delay.
- position += 1: changes a number (our horizontal coordinate).
- box.style.left: applies that coordinate to the DOM element.
- clearInterval(intervalId): stops the animation when it reaches the end.
- container.clientWidth - box.offsetWidth: prevents the square from escaping.
*/
