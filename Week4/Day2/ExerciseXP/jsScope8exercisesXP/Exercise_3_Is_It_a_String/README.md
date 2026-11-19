# Exercise 3 — Is It a String?

The arrow function is `const isString = value => typeof value === "string";`.

- `typeof "hello"` produces `"string"`, so the result is `true`.
- `typeof [1, 2, 4, 0]` produces `"object"`, so the result is `false`.
- The strict-equality operator `===` already returns a Boolean; no `if` statement is needed.

**Note:** `new String("hello")` is an object, not a primitive string. This solution intentionally uses `typeof` as taught in the course.
