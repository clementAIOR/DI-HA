
import random

secret_number = random.randint(1, 100)
attempts = 0
max_attempts = 7

print("Welcome to the Number Guessing Game!")
print("Guess a number between 1 and 100.")

while attempts < max_attempts:

    try:
        guess = int(input("Enter your guess: "))
    except ValueError:
        print("Please enter a valid number.")
        continue

    if guess < 1 or guess > 100:
        print("Please enter a number between 1 and 100.")
        continue

    attempts += 1

    if guess == secret_number:
        print(f"Congratulations! You won in {attempts} attempts!")
        break

    elif guess < secret_number:
        print("Too low!")

    else:
        print("Too high!")

    print(f"Attempts remaining: {max_attempts - attempts}")

else:
    print(f"Game over! The number was {secret_number}.")
