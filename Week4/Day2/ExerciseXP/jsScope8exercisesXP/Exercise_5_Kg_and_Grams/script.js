"use strict";
/*
 * EXERCISE 5 — KILOGRAMS AND GRAMS
 * STRATEGY:
 * 1. Multiply kilograms by 1,000 because one kilogram = 1,000 grams.
 * 2. Implement the same calculation as a declaration, expression, and
 *    one-line arrow function, to compare their syntax.
 */

// 1. FUNCTION DECLARATION: named function introduced by `function`.
function kilogramsToGramsDeclaration(kg) {
    return kg * 1000;
}
console.log(kilogramsToGramsDeclaration(2.5)); // 2500

// 2. FUNCTION EXPRESSION: assign a function to a variable.
const kilogramsToGramsExpression = function (kg) {
    return kg * 1000;
};
console.log(kilogramsToGramsExpression(2.5)); // 2500

// One-line difference: declarations are hoisted and callable before their definition; function expressions are assigned to variables and callable only after initialization.

// 3. ONE-LINE ARROW FUNCTION: concise syntax, implicit return.
const kilogramsToGramsArrow = kg => kg * 1000;
console.log(kilogramsToGramsArrow(2.5)); // 2500

const examples = [
    `Declaration: 2.5 kg = ${kilogramsToGramsDeclaration(2.5)} g`,
    `Expression:  2.5 kg = ${kilogramsToGramsExpression(2.5)} g`,
    `Arrow:       2.5 kg = ${kilogramsToGramsArrow(2.5)} g`
];
document.getElementById("weight-results").textContent = examples.join("\n");
