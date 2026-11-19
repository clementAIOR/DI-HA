"use strict";

/*
EXERCISE 1 — COLORS
===================
STRATEGY
1. Store the seven colors in the supplied array.
2. Use forEach() to visit every color and automatically receive its index.
3. Add 1 to the index because JavaScript arrays start at 0, but choices start at 1.
4. Use some() to check whether at least one color is exactly "Violet".

WHY THESE METHODS?
- forEach() is designed to perform an action (here, console.log) for each item.
- some() returns a Boolean (true/false) and stops as soon as it finds a match.
*/

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// forEach calls this arrow function once per array element.
// index goes from 0 to 6, so (index + 1) produces choice numbers 1 through 7.
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// some() tests each color against "Violet".
// === checks for exact equality (including uppercase/lowercase).
const hasViolet = colors.some(color => color === "Violet");

// A ternary picks the appropriate message based on that Boolean.
console.log(hasViolet ? "Yeah" : "No...");

/* EXPECTED OUTPUT
1# choice is Blue.
2# choice is Green.
3# choice is Red.
4# choice is Orange.
5# choice is Violet.
6# choice is Indigo.
7# choice is Yellow.
Yeah
*/
