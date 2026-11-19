"use strict";
/*
 * EXERCISE 6 — FORTUNE TELLER
 * STRATEGY:
 * 1. Create a function expression wrapped in parentheses.
 * 2. Immediately call it by putting (arguments) after the parentheses.
 * 3. Build the sentence with a template literal (backticks and ${}).
 * 4. Put the result in the page with textContent.
 */

(function (numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${geographicLocation}, ` +
                    `and married to ${partnerName} with ${numberOfChildren} kids.`;

    // textContent inserts plain text and does NOT interpret HTML.
    document.getElementById("fortune-result").textContent = fortune;
    console.log(fortune);
})(2, "Alex", "Paris", "software developer");

// The function is called immediately; we did not need to give it a name.
