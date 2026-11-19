"use strict";
/*
 * EXERCISE 1 — SCOPE
 *
 * OUR STRATEGY
 * 1. Predict what each variable refers to before running the code.
 * 2. Keep the five original situations in separate { ... } blocks.
 *    Otherwise, multiple top-level declarations such as `let a = 0;`
 *    and `let a = 1;` would cause "Identifier 'a' has already been declared".
 * 3. Run one situation at a time via its button so alerts are manageable.
 * 4. Show the same answer on the page and in the browser console.
 *
 * IMPORTANT: `let` and `const` are block-scoped. A variable inside
 * { ... } is not the same variable as an equally named one outside.
 */

const caseActions = {};

function showAnswer(caseId, lines) {
    const answer = lines.join("\n");
    document.getElementById(`output-${caseId}`).textContent = answer;
    console.log(`Case #${caseId}:\n${answer}`);
}

// #1: The function declares its own `a`, initially 5.
{
    function funcOne() {
        let a = 5;
        if (a > 1) {
            a = 3; // Same variable: assign the new value 3.
        }
        alert(`inside the funcOne function ${a}`);
        return a;
    }

    // PREDICTION: alert shows "inside the funcOne function 3".
    // WHY: the condition 5 > 1 is true, so `a = 3` runs.
    // IF `const a = 5`: assigning a = 3 throws a TypeError.
    // The alert would never be reached if the error is unhandled.
    window.funcOne = funcOne; // Optional: also try funcOne() in console.
    caseActions["1"] = function () {
        showAnswer("1", [
            `Result: ${funcOne()}`,
            "With const: TypeError — assignment to a constant variable."
        ]);
    };
}

// #2: Both functions close over the SAME outer `a` variable.
{
    let a = 0;

    function funcTwo() {
        a = 5; // No `let`: update the existing a, do not create a new one.
    }

    function funcThree() {
        alert(`inside the funcThree function ${a}`);
        return a;
    }

    // PREDICTION: funcThree() -> 0; funcTwo() updates a;
    //             funcThree() -> 5.
    // IF the outer `a` is const: funcTwo() throws TypeError.
    // The first alert is 0; the second call to funcThree() will not
    // run automatically after an uncaught error from funcTwo().
    window.funcTwo = funcTwo;
    window.funcThree = funcThree;
    caseActions["2"] = function () {
        a = 0; // Reset on every click so the demo always starts at 0.
        const before = funcThree();
        funcTwo();
        const after = funcThree();
        showAnswer("2", [
            `Before funcTwo(): ${before}`,
            `After funcTwo(): ${after}`,
            "With const: funcTwo() would throw a TypeError."
        ]);
    };
}

// #3: `window` is the browser's global object.
{
    function funcFour() {
        window.a = "hello"; // Create/set a global-object property.
    }

    function funcFive() {
        // In this isolated example, no `let a` shadows the window property.
        // Therefore, bare `a` resolves to window.a in the browser.
        alert(`inside the funcFive function ${a}`);
        return a;
    }

    // PREDICTION: "inside the funcFive function hello".
    // NOTE: a separate top-level `let a` can shadow window.a in a
    // classic browser script. Running #3 alongside the originals of
    // #2, #4, and #5 without isolation would change the behavior.
    window.funcFour = funcFour;
    window.funcFive = funcFive;
    caseActions["3"] = function () {
        funcFour();
        showAnswer("3", [`Result: ${funcFive()}`, "The property lives on window.a."]);
    };
}

// #4: Inner `a` is independent from the outer `a` (shadowing).
{
    let a = 1;

    function funcSix() {
        let a = "test"; // A new variable local to this function.
        alert(`inside the funcSix function ${a}`);
        return a;
    }

    // PREDICTION: inner a -> "test"; outer a remains 1.
    // IF either/both `let` declarations become `const`, nothing
    // changes: we never reassign either variable.
    window.funcSix = funcSix;
    caseActions["4"] = function () {
        const inner = funcSix();
        showAnswer("4", [
            `Inside funcSix(): ${inner}`,
            `Outer a: ${a}`,
            "With const: same output, because there is no reassignment."
        ]);
    };
}

// #5: A block-scope `a` shadows another `a` outside the if block.
{
    caseActions["5"] = function () {
        let a = 2;
        let inside;

        if (true) {
            let a = 5; // Exists only inside these curly brackets.
            inside = a;
            alert(`in the if block ${a}`);
        }

        alert(`outside of the if block ${a}`);
        showAnswer("5", [
            `Inside if: ${inside}`,
            `Outside if: ${a}`,
            "With const: same output; the two declarations are in different scopes."
        ]);
    };
    // PREDICTION: first alert 5, then alert 2.
    // IF both `let` declarations are changed to `const`, this still
    // works because neither binding is reassigned.
}

// Listen for clicks; look up the function by the button's data-case.
document.querySelectorAll("button[data-case]").forEach(function (button) {
    button.addEventListener("click", function () {
        caseActions[button.dataset.case]();
    });
});
