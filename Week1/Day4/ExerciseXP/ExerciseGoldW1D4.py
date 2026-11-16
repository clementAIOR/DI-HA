import random
from time import perf_counter


# ============================================================
# Exercise 1: Concatenate lists without using +
# ============================================================

print("\n--- Exercise 1: Concatenate lists ---")

first_list = [1, 2, 3]
second_list = [4, 5, 6]

combined_list = first_list.copy()
combined_list.extend(second_list)

print(combined_list)


# ============================================================
# Exercise 2: Multiples of both 5 and 7
# ============================================================

print("\n--- Exercise 2: Multiples of both 5 and 7 ---")

# The stop value is excluded, so use 2501 to include 2500.
for number in range(1500, 2501):
    if number % 5 == 0 and number % 7 == 0:
        print(number)


# ============================================================
# Exercise 3: Find the first index
# ============================================================

print("\n--- Exercise 3: Find the first index ---")

names = ["Samus", "Cortana", "V", "Link", "Mario", "Cortana", "Samus"]

user_name = input("Enter a name (case-sensitive): ").strip()

if user_name in names:
    print("First index:", names.index(user_name))
else:
    print(f"Sorry, {user_name} is not in the list.")


# ============================================================
# Exercise 4: Greatest number
# ============================================================

print("\n--- Exercise 4: Greatest number ---")

numbers = []

for position in range(1, 4):
    while True:
        try:
            number = float(input(f"Enter number {position}: "))
            break
        except ValueError:
            print("Please enter a valid number, such as 25 or 3.5.")

    numbers.append(number)

greatest_number = max(numbers)

# Display whole-number results without a trailing .0.
if greatest_number.is_integer():
    greatest_number = int(greatest_number)

print("The greatest number is:", greatest_number)


# ============================================================
# Exercise 5: The alphabet
# ============================================================

print("\n--- Exercise 5: The alphabet ---")

alphabet = "abcdefghijklmnopqrstuvwxyz"
vowels = "aeiou"

for letter in alphabet:
    if letter in vowels:
        print(f"{letter} is a vowel.")
    else:
        print(f"{letter} is a consonant.")


# ============================================================
# Exercise 6: Words and letters
# ============================================================

print("\n--- Exercise 6: Words and letters ---")

words = []

for position in range(1, 8):
    while True:
        word = input(f"Enter word {position}/7: ").strip()
        if word:
            break
        print("Please enter a word; the input cannot be empty.")

    words.append(word)

while True:
    letter = input("Enter a single character (case-sensitive): ")
    if len(letter) == 1:
        break
    print("Please enter exactly one character.")

for word in words:
    if letter in word:
        print(f"'{word}': '{letter}' first appears at index {word.index(letter)}.")
    else:
        print(f"Sorry, '{letter}' does not appear in '{word}'.")


# ============================================================
# Exercise 7: Min, max, and sum
# ============================================================

print("\n--- Exercise 7: Min, max, and sum ---")

million_numbers = list(range(1, 1_000_001))

print("Minimum:", min(million_numbers))
print("Maximum:", max(million_numbers))

start_time = perf_counter()
total = sum(million_numbers)
elapsed_time = perf_counter() - start_time

print("Sum:", total)
print(f"Time to calculate the sum: {elapsed_time:.6f} seconds")


# ============================================================
# Exercise 8: List and tuple
# ============================================================

print("\n--- Exercise 8: List and tuple ---")

user_input = input("Enter numbers separated by commas (e.g. 34,67,55): ")

# Keep the values as strings to match the exercise's example.
number_list = []

for value in user_input.split(","):
    number_list.append(value.strip())

number_tuple = tuple(number_list)

print(number_list)
print(number_tuple)


# ============================================================
# Exercise 9: Random number, with both bonuses
# ============================================================

print("\n--- Exercise 9: Guess the number ---")
print("Each valid guess starts a new round with a new random draw.")

wins = 0
losses = 0

while True:
    guess_input = input("Guess a number from 1 to 9, or type 'quit': ").strip()

    if guess_input.lower() == "quit":
        break

    try:
        guess = int(guess_input)
    except ValueError:
        print("Please enter a whole number or 'quit'.")
        continue

    if not 1 <= guess <= 9:
        print("Your number must be between 1 and 9.")
        continue

    secret_number = random.randint(1, 9)

    if guess == secret_number:
        print("Winner")
        wins += 1
    else:
        print("better luck next time")
        print(f"The number was {secret_number}.")
        losses += 1

print("\n--- Final results ---")
print("Total games:", wins + losses)
print("Games won:", wins)
print("Games lost:", losses)