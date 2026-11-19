# JavaScript Scope & Advanced Functions — 8 Independent Exercises

Each exercise has its **own folder** with `index.html`, `script.js`, and `README.md`. Exercise 7 additionally contains a local `avatar.svg` profile illustration. These are **not merged into one page**.

## How to run
1. Open any exercise folder in PyCharm.
2. Open its `index.html` in Chrome (or right-click > Open in Browser).
3. Read `script.js` for the **OUR STRATEGY** comments and line-by-line explanations.
4. Inspect the browser console for the exercise's `console.log()` outputs (Mac Chrome: `Cmd + Option + J`).

**Do not run these files with `node script.js`:** they use DOM methods, and Exercises 1 and 7 also use browser-specific APIs.

## Folder list
1. Exercise_1_Scope — five scope cases and their predictions (run independently)
2. Exercise_2_Ternary_Operator — arrow function and ternary
3. Exercise_3_Is_It_a_String — typeof and arrow function
4. Exercise_4_Find_the_Sum — one-line arrow function
5. Exercise_5_Kg_and_Grams — declaration vs expression vs arrow
6. Exercise_6_Fortune_Teller — IIFE and template literal
7. Exercise_7_Welcome — IIFE, navbar and local avatar
8. Exercise_8_Juice_Bar — nested functions and closures (both parts)

## Scope note
The assignment's original exercise 1 uses `let a` several times at the top level. Pasting the entire original sample into a single script without isolating the cases would throw a declaration error. The solution uses separate blocks to preserve each scenario's meaning.
