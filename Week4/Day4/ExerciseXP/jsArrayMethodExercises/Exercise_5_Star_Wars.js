"use strict";

/*
EXERCISE 5 — STAR WARS
======================
STRATEGY
Use reduce() to combine all the words into ONE string, adding a space
between each word so that the final sentence is readable.

HOW reduce() WORKS:
- accumulator ('sentence') stores the combined words so far.
- currentValue ('word') is the next array element.
- '' is the initial value: an empty string.
- The ternary prevents an unwanted leading space before the first word.

EXAMPLE:
Start: sentence = ''
Read 'a'    -> 'a'
Read 'long' -> 'a long'
Read 'time' -> 'a long time'
... until all eight elements are processed.
*/

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const sentence = epic.reduce((sentence, word) => {
    return sentence === "" ? word : `${sentence} ${word}`;
}, "");

console.log(sentence);

// EXPECTED OUTPUT: a long time ago in a galaxy far far away
