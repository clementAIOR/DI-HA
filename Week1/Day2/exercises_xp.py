# Exercise 1: Hello World
print("Hello world\n" * 4, end="")


# Exercise 2: Some Math
print((99 ** 3) * 8)  # Expected result: 7762392


# Exercise 3: Predict the output, then run the comparisons
print(5 < 3)               # My guess: False
print(3 == 3)              # My guess: True
print(3 == "3")            # My guess: False

# This comparison causes an error. Catch it so the script can continue.
try:
    print("3" > 3)         # My guess: TypeError
except TypeError as error:
    print("TypeError:", error)

print("Hello" == "hello")  # My guess: False


# Exercise 4: Your computer brand
computer_brand = "Apple"
print(f"I have a {computer_brand} computer.")


# Exercise 5: Your information
name = "Haïm"
age = 44
shoe_size = 45  # Example only: replace with your actual shoe size.

info = (
    f"My name is {name}, I am {age} years old, "
    f"I wear size {shoe_size} shoes, and I am learning Python to build app & games."
)
print(info)


# Exercise 6: A & B
a = 10
b = 5

if a > b:
    print("Hello World")


# Exercise 7: Odd or Even
# Type a whole number, such as 7 or 12, then press Enter.
number = int(input("Exercise 7 - Enter a whole number: "))

if number % 2 == 0:
    print(f"{number} is even.")
else:
    print(f"{number} is odd.")


# Exercise 8: What's your name?
entered_name = input("Exercise 8 - What is your name? ").strip()

if entered_name.lower() == name.lower():
    print("Same name! One of us must be the limited edition.")
else:
    print(f"Hi, {entered_name}! At least we won't mix up our coffee orders.")


# Exercise 9: Tall enough to ride a roller coaster
# Type the number only, such as 185 or 175.5, then press Enter.
height = float(input("Exercise 9 - Enter your height in centimeters: "))

if height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")
