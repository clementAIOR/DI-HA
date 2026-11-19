"use strict";
/*
 * EXERCISE 3 — IS IT A STRING?
 * STRATEGY:
 * 1. Receive a value as a parameter.
 * 2. `typeof` reveals its JavaScript primitive type.
 * 3. Compare the type to the string "string" and return a Boolean.
 */

// One parameter needs no parentheses (parentheses are also allowed).
// `===` is strict equality and produces true or false automatically.
const isString = value => typeof value === "string";

console.log(isString("hello"));       // true
console.log(isString([1, 2, 4, 0]));   // false — an array is an object

// A few additional tests illustrate what the function considers a string.
const examples = [
    ["'hello'", isString("hello")],
    ["[1, 2, 4, 0]", isString([1, 2, 4, 0])],
    ["42", isString(42)],
    ["'' (empty string)", isString("")]
];
document.getElementById("string-tests").textContent = examples
    .map(([input, result]) => `${input} → ${result}`)
    .join("\n");
