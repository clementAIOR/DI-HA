"use strict";

/*
EXERCISE 4 — EMPLOYEES
======================
STRATEGY
1. map() builds a NEW array containing a greeting for every user.
2. filter() builds a NEW array containing only Full Stack Residents.
3. BONUS: filter().map() selects residents first, then keeps only last names.

WHY NOT PUSH INTO AN ARRAY INSIDE map()?
The assignment says to 'push into a new array using map()'. But map()
already creates and returns the new array, so no manual push() is needed.

DESTRUCTURING (covered in today's lesson):
({ firstName }) takes the firstName property from a user object.
It is a shorter alternative to user.firstName.
*/

const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" }
];

// PART 1: map() transforms each user object into a greeting string.
const welcomeStudents = users.map(({ firstName }) => `Hello ${firstName}`);
console.log("Welcome messages:", welcomeStudents);

// PART 2: filter() keeps only objects whose role matches exactly.
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log("Full Stack Residents:", fullStackResidents);

// BONUS: Chaining methods means using the output of one method as
// the input of the next. filter() returns residents; map() extracts last names.
const residentLastNames = users
    .filter(user => user.role === "Full Stack Resident")
    .map(({ lastName }) => lastName);

console.log("Resident last names:", residentLastNames);

/* EXPECTED RESULTS
welcomeStudents:
["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael",
 "Hello Robert", "Hello Wes", "Hello Zach"]
fullStackResidents: objects for Bradley, Chloe, and Robert
residentLastNames: ["Bouley", "Alnaji", "Hajek"]
*/
