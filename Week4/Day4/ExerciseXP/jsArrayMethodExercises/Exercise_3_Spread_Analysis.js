"use strict";

/*
EXERCISE 3 — ANALYZING THE SPREAD OPERATOR
==========================================
STRATEGY
Predict the results BEFORE running the code, then verify with console.log().
The three examples are independent.

WHAT DOES ... DO?
Spread (...) takes the individual elements of an iterable (such as an array
or string) and inserts them into a new array.
*/

// --------------------------------------------
// #1 — PREDICTION (before execution)
// --------------------------------------------
// The final array will be:
// ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// WHY? ...vegetables inserts both vegetable items in order,
// and ...fruits inserts both fruit items in order.
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log("#1:", result);

// --------------------------------------------
// #2 — PREDICTION (before execution)
// --------------------------------------------
// The result will be ["U", "S", "A"].
// WHY? A string is iterable: spreading it into an array extracts characters.
const country = "USA";
console.log("#2:", [...country]);

// --------------------------------------------
// BONUS — PREDICTION (before execution)
// --------------------------------------------
// The result will be [undefined, undefined].
// WHY? [,,] has LENGTH 2, but its two positions are empty 'holes'.
// The array iterator yields undefined for each hole. Spreading the
// array copies those yielded values into two actual array elements.
let newArray = [...[,,]];
console.log("Bonus:", newArray);

// OPTIONAL WAY TO SEE THE DIFFERENCE:
// An empty slot is NOT the same as an element containing undefined.
// const sparse = [,,];
// console.log(0 in sparse);   // false: position 0 is missing.
// console.log(0 in newArray); // true: position 0 exists and is undefined.
