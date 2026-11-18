
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayFrame(words) {
    let longest = 0;

    // Find the longest word
    for (let word of words) {
        if (word.length > longest) {
            longest = word.length;
        }
    }

    let border = "*".repeat(longest + 4);

    console.log(border);

    // Display each word
    for (let word of words) {
        console.log("* " + word.padEnd(longest) + " *");
    }

    console.log(border);
}

// Ask the user for words
rl.question("Enter words separated by commas: ", function(input) {

    let words = input.split(",").map(word => word.trim());

    displayFrame(words);

    rl.close();
});
