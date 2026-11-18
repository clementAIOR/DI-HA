// JavaScript Daily Challenge: Star Pattern
// Run with: node star_pattern.js
// Or paste this code into Chrome Developer Tools > Console.

// Exercise 1: one for loop
console.log("VERSION 1 - ONE LOOP");
let line = "";

for (let i = 1; i <= 6; i++) {
  line += "* ";
  console.log(line.trim());
}

// Exercise 2: two nested for loops
console.log("\nVERSION 2 - NESTED LOOPS");

for (let i = 1; i <= 6; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row.trim());
}
