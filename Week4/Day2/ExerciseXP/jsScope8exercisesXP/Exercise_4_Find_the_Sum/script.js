"use strict";
/*
 * EXERCISE 4 — FIND THE SUM
 * STRATEGY: Give the arrow function two parameters, add them using +,
 * and use the short arrow syntax to return the result automatically.
 */

// No braces means the result of `number1 + number2` is returned.
const sum = (number1, number2) => number1 + number2;

console.log(sum(8, 7)); // 15
document.getElementById("sum-result").textContent = `8 + 7 = ${sum(8, 7)}`;
