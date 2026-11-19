"use strict";
/*
 * EXERCISE 8 — JUICE BAR
 *
 * OUR STRATEGY
 * PART I: Create makeJuice(size), nest addIngredients(first, second, third),
 *         then call makeJuice() once in the global scope.
 * PART II: Improve makeJuice(size) so it collects six ingredients in an
 *          array. Call addIngredients() twice and displayJuice() once.
 *
 * HOW TO KEEP BOTH PARTS ON THE SAME EXERCISE PAGE
 * We store the named function expression in a global `let makeJuice`.
 * We first call the Part I version, then REASSIGN makeJuice to the improved
 * Part II version and call it. The calls themselves are at global scope.
 * In a real project, Part II would normally replace Part I entirely.
 */

// ------------------------ PART I ------------------------
let makeJuice = function makeJuice(size) {
    // A nested function has access to the `size` parameter from its parent.
    function addIngredients(first, second, third) {
        const sentence = `The client wants a ${size} juice, ` +
                         `containing ${first}, ${second}, ${third}.`;
        document.getElementById("juice-part-one").textContent = sentence;
        console.log("Part I:", sentence);
    }

    // As requested, call the inner function exactly ONCE.
    addIngredients("orange", "mango", "ginger");
};

// Call the Part I version at the top (global) level of the script.
makeJuice("small");

// ------------------------ PART II ------------------------
// Reassign the global variable to a new, improved makeJuice function.
// A separate function could also be used, but this preserves the
// function name required by the instructions for BOTH stages.
makeJuice = function makeJuice(size) {
    // Every new order starts with its own empty array.
    const ingredients = [];

    function addIngredients(first, second, third) {
        // push() adds three entries to the SAME array on every invocation.
        ingredients.push(first, second, third);
    }

    function displayJuice() {
        // Both inner functions "remember" the outer variables: a closure.
        // join(", ") turns the array into a comma-separated text list.
        const sentence = `The client wants a ${size} juice, ` +
                         `containing ${ingredients.join(", ")}.`;
        document.getElementById("juice-part-two").textContent = sentence;
        console.log("Part II:", sentence);
    }

    addIngredients("strawberry", "banana", "apple");
    addIngredients("pear", "pineapple", "mint");
    // 2 calls × 3 ingredients = 6 total ingredients.

    displayJuice(); // Call once, AFTER all six ingredients have been added.
};

// Call the improved Part II function at global scope as requested.
makeJuice("large");
