"use strict";

/*
EXERCISE 6 — EMPLOYEES #2 (STUDENTS)
====================================
STRATEGY
1. Use filter() to return only students with isPassed === true.
2. BONUS: chain filter() with forEach() to congratulate each student.

WHY EACH METHOD?
- filter() RETURNS a new array containing the matching objects.
- forEach() DOES something for each object, but returns undefined.
- We use template strings to insert the student's name and course.
- Destructuring extracts the name and course from each object.
*/

const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// PART 1: Keep only students whose isPassed property is true.
const passedStudents = students.filter(student => student.isPassed === true);
console.log("Students who passed:", passedStudents);

// BONUS: filter returns the passing students; forEach logs a message
// for each passing student. We do not assign forEach's return value
// because it returns undefined, NOT an array.
students
    .filter(student => student.isPassed === true)
    .forEach(({ name, course }) => {
        console.log(`Good job ${name}, you passed the course in ${course}`);
    });

/* EXPECTED BONUS OUTPUT
Good job Ray, you passed the course in Computer Science
Good job Jenner, you passed the course in Information Technology
Good job Marco, you passed the course in Robotics
*/
