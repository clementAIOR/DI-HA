// JavaScript Exercises XP — Exercises 1 to 7
// Open index.html and use Chrome Developer Tools > Console.

// EXERCISE 1: List of people
console.log("=== Exercise 1: List of people ===");
const people = ["Greg", "Mary", "Devon", "James"];

// Part I — Arrays
people.shift(); // Remove Greg.
people[people.indexOf("James")] = "Jason"; // Replace James.
people.push("Clement"); // Add your name.
console.log("Mary's index:", people.indexOf("Mary")); // 0

// The array is now ["Mary", "Devon", "Jason", "Clement"].
// slice(1, 3) includes index 1 ("Devon") but excludes index 3 ("Clement").
// It therefore copies "Devon" and "Jason", leaving out Mary and Clement.
const peopleCopy = people.slice(1, 3);
console.log("Copied array:", peopleCopy); // ["Devon", "Jason"]
const fooIndex = people.indexOf("Foo");
console.log("Foo's index:", fooIndex); // -1
console.log("Why -1? indexOf returns -1 when the searched element is not found in the array.");

const last = people[people.length - 1];
console.log("Last person:", last); // Clement

// Part II — Loops
for (const person of people) {
  console.log(person);
}

console.log("Up to Devon:");
for (const person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}

// EXERCISE 2: Favorite colors
console.log("=== Exercise 2: Favorite colors ===");
const colors = ["blue", "red", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

// Bonus: correct suffixes for the five choices.
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
}

// EXERCISE 3: Repeat the question
// prompt() returns a string or null. Press the button in index.html.
function repeatQuestion() {
  console.log("Exercise 3: Open the browser Console to see results from the other exercises.");
  let number;
  do {
    const answer = prompt("Please enter a number of at least 10:");
    if (answer === null) {
      console.log("The user cancelled.");
      return;
    }
    console.log("Type of prompt value:", typeof answer); // "string"
    number = answer.trim() === "" ? NaN : Number(answer);
  } while (Number.isNaN(number) || number < 10);

  console.log("Accepted number:", number);
  alert("Accepted number: " + number);
}

// EXERCISE 4: Building Management
console.log("=== Exercise 4: Building Management ===");
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log("Floors:", building.numberOfFloors);
console.log("Apartments on floor 1:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on floor 3:", building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log("Second tenant:", secondTenant);
console.log("Number of rooms:", secondTenantRooms);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log("Dan's rent:", building.numberOfRoomsAndRent.dan[1]); // 1200

// EXERCISE 5: Family
console.log("=== Exercise 5: Family ===");
const family = { mother: "Sarah", father: "Daniel", child: "Emma" };

for (const key in family) {
  console.log(key);
}
for (const key in family) {
  console.log(family[key]);
}

// EXERCISE 6: Rudolf
console.log("=== Exercise 6: Rudolf ===");
const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
// Object.keys() gives us an array of the object's keys in insertion order.
// This traditional for loop uses an index, as required by the exercise.
const detailKeys = Object.keys(details);
let sentence = "";
for (let i = 0; i < detailKeys.length; i++) {
  const key = detailKeys[i];
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim()); // my name is Rudolf the reindeer

// EXERCISE 7: Secret Group
console.log("=== Exercise 7: Secret Group ===");
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const initials = [];

for (let i = 0; i < names.length; i++) {
  initials.push(names[i][0]);
}

initials.sort();
const societyName = initials.join("");
console.log(societyName); // ABJKPS

// Run Exercise 3 when the user clicks the button.
document.getElementById("start-exercise-3").addEventListener("click", repeatQuestion);
