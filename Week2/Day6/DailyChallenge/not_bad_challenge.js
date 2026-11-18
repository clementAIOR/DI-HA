// Daily Challenge: replace "not ... bad" with "good".
// Works in a browser and with Node.js.

function improveSentence(sentence) {
  const wordNot = sentence.indexOf("not");
  const wordBad = sentence.indexOf("bad");

  if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    return sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  }

  return sentence;
}

const sentence = "This dinner is not that bad ! You cook well";
console.log(improveSentence(sentence));

// Show the result on the HTML page when run in a browser.
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("sentence-input");
    const output = document.getElementById("result");
    const button = document.getElementById("run-button");

    function runChallenge() {
      const result = improveSentence(input.value);
      output.textContent = result;
      console.log(result);
    }

    button.addEventListener("click", runChallenge);
    runChallenge();
  });
}
