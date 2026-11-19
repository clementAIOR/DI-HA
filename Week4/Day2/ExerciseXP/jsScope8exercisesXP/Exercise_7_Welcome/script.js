"use strict";
/*
 * EXERCISE 7 — WELCOME
 * STRATEGY:
 * 1. The HTML already contains a navbar and an empty user slot.
 * 2. Run an IIFE with the signed-in user's name as an argument.
 * 3. Create a div and img with createElement(), not HTML string markup.
 * 4. Insert the name with textContent and append both nodes to the navbar.
 *
 * The image is a local SVG placeholder so this exercise works offline.
 */

(function (username) {
    const userSlot = document.getElementById("signed-in-user");

    // Create an actual DOM div for the name and image.
    const userBadge = document.createElement("div");
    userBadge.classList.add("user-badge");

    const image = document.createElement("img");
    image.src = "avatar.svg";
    image.alt = `${username}'s profile picture`;
    image.width = 42;
    image.height = 42;

    const name = document.createElement("span");
    name.textContent = username; // Safer than injecting names via innerHTML.

    // The order of appendChild controls the order in the page.
    userBadge.appendChild(image);
    userBadge.appendChild(name);
    userSlot.appendChild(userBadge);

    console.log(`Welcome, ${username}!`);
})("John");
