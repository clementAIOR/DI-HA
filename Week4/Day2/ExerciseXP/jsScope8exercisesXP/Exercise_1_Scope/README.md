# Exercise 1 — Scope

## Strategy
Predict the output *before* running each case. Click a numbered button to run only that case. Each case is isolated in a block because the original snippets reuse `let a` several times. Pasting all five original snippets unchanged into the same global scope would produce a redeclaration error.

## Predictions and explanations
- **#1:** `3`. `a` starts at `5`, and `a > 1` is true, so it is reassigned to `3`. With `const`, the assignment throws a **TypeError**.
- **#2:** `0`, then `5`. Both functions access the *same* outer variable `a`. With `const`, `funcTwo()` throws a **TypeError**, so execution of that sequence stops unless the error is caught.
- **#3:** `hello`. In this isolated browser example, setting `window.a` creates a global-object property, and unqualified `a` resolves to that property. **Caution:** a separate *global lexical* `let a` can shadow `window.a`.
- **#4:** `test` inside `funcSix()`; the outer `a` remains `1`. These are two different variables in different scopes. Both could be `const` because no reassignment occurs.
- **#5:** `5` inside the `if` and `2` outside. The inner declaration only exists inside the curly brackets. Using `const` for both declarations gives the same results.

## Why buttons?
Calling all five sequences immediately would open many alerts and make it difficult to compare the outcomes. Buttons still invoke the same functions and alerts, but let you test independently. You can also call `funcOne()`, `funcTwo()`, `funcThree()`, `funcFour()`, `funcFive()`, and `funcSix()` in the browser console.

Open `index.html` in Chrome and inspect `script.js` for the inline predictions. This project is intended for a **browser**, not Node.js, because `alert()` and `window` are browser APIs.
