# Exercise 8 — Juice Bar

## Part I: Nested functions

At global scope, we assign a named `makeJuice` function to a variable, then call `makeJuice("small")`. Within `makeJuice(size)` we define an inner `addIngredients(first, second, third)` function. The inner function uses `size` from its outer function and writes a sentence to the DOM. It is called **once**.

## Part II: An array and closure

Part II is an improved replacement for the first version. We reassign `makeJuice` to a new named function expression and call `makeJuice("large")` in the global scope. This one starts with an empty `ingredients` array, calls `addIngredients()` **twice** to push **six** ingredients, and then calls `displayJuice()` **once**.

Why an array? It collects ingredients without displaying the sentence until the full order is ready. Why a closure? Both nested functions access `ingredients` and `size` from their outer `makeJuice()` function.

### Why `let makeJuice = function makeJuice(...)` instead of two declarations?

If both parts declared `function makeJuice(...)` at the top level, the second declaration would be hoisted and replace the first before we called it. Using a named function expression stored in `let` lets the two versions be run **in sequence** on this single exercise page while keeping the exact required function name. Part II would ordinarily replace Part I in a final application.
