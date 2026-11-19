"use strict";

/*
EXERCISE 2 — COLORS #2
======================
STRATEGY
1. Reuse the colors array.
2. Use forEach() to get the color and its position.
3. Use the ordinal array to choose "st", "nd", "rd", or "th".
4. Use a ternary operator for the choice of suffix, as requested.

WHY A TERNARY?
A ternary is a short if/else expression:
  condition ? valueIfTrue : valueIfFalse
For the seven choices in this exercise, only 1, 2, and 3 have special endings.
All remaining numbers (4–7) use "th".
*/

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const choice = index + 1;  // Convert the zero-based index to a human-friendly number.

    // For choices 1–3, use ordinal[1], ordinal[2], or ordinal[3].
    // Otherwise, use ordinal[0] ("th").
    const suffix = choice <= 3 ? ordinal[choice] : ordinal[0];

    console.log(`${choice}${suffix} choice is ${color}.`);
});

/* EXPECTED OUTPUT
1st choice is Blue.
2nd choice is Green.
3rd choice is Red.
4th choice is Orange.
5th choice is Violet.
6th choice is Indigo.
7th choice is Yellow.

NOTE: For a longer list (11th, 12th, 13th, 21st, etc.), the rule
must also account for numbers ending in 11, 12, or 13. Here the
provided array contains only seven colors, so this solution is correct.
*/
