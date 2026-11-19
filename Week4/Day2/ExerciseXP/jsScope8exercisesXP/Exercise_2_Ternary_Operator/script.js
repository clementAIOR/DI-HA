"use strict";
/*
 * EXERCISE 2 — TERNARY OPERATOR
 * STRATEGY:
 * 1. Turn `function winBattle() { return true; }` into an arrow function.
 * 2. Call winBattle() inside the condition of a ternary operator.
 * 3. Use 10 XP if true and 1 XP if false, then console.log the result.
 */

// We have no parameters, so we write empty parentheses: ().
// This is the short arrow-function form of returning `true`.
const winBattle = () => true;

// CONDITION ? VALUE_IF_TRUE : VALUE_IF_FALSE
// winBattle() returns true, so experiencePoints becomes 10.
const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); // Expected: 10

// Optional: show the same result in the HTML page.
document.getElementById("battle-result").textContent = String(winBattle());
document.getElementById("xp-result").textContent = `Experience points: ${experiencePoints}`;
