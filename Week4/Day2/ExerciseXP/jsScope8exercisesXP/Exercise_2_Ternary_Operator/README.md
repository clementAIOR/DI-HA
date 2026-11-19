# Exercise 2 — Ternary Operator

`const winBattle = () => true;` is an **arrow function**. Because it has one expression, `return` can be omitted.

The ternary operator is a short alternative to a basic `if / else`:
```js
const experiencePoints = winBattle() ? 10 : 1;
```
Read it as: *if `winBattle()` is true, use 10; otherwise, use 1.* The expected output is **10**.
