# ============================================================
# Exercise 1: Favorite Numbers
# ============================================================

print("\n--- Exercise 1: Favorite Numbers ---")

my_fav_numbers = {3, 7, 12}

my_fav_numbers.add(20)
my_fav_numbers.add(42)

# Sets are unordered. Remove the specific number added last.
my_fav_numbers.remove(42)

friend_fav_numbers = {7, 21, 30}

# A union combines both sets without duplicates.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("My friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)


# ============================================================
# Exercise 2: Tuple
# ============================================================

print("\n--- Exercise 2: Tuple ---")

numbers = (1, 2, 3)

# Tuples cannot be modified after creation.
# numbers.append(4) would cause an error: tuples have no append().

# Concatenation creates a NEW tuple instead.
new_numbers = numbers + (4, 5)

print("Original tuple:", numbers)
print("New tuple:", new_numbers)


# ============================================================
# Exercise 3: List Manipulation
# ============================================================

print("\n--- Exercise 3: List Manipulation ---")

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

print("Basket:", basket)
print("Number of Apples:", basket.count("Apples"))

basket.clear()
print("Final basket:", basket)


# ============================================================
# Exercise 4: Floats
# ============================================================

print("\n--- Exercise 4: Floats ---")

# An int represents a whole number, such as 2.
# A float can represent a fractional value, such as 2.5.
# A whole-number value such as 2.0 is also a float.

sequence = []

for number in range(3, 11):
    if number % 2 == 0:
        # Use integer division to keep these results as integers.
        sequence.append(number // 2)
    else:
        sequence.append(number / 2)

print(sequence)


# ============================================================
# Exercise 5: For Loop
# ============================================================

print("\n--- Exercise 5: For Loop ---")

print("Numbers from 1 to 20:")

for number in range(1, 21):
    print(number)

print("Numbers at even indices:")

# enumerate() supplies both the index and the number.
# Indices start at 0, so this prints 1, 3, 5, ..., 19.
for index, number in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(number)


# ============================================================
# Exercise 6: While Loop
# ============================================================

print("\n--- Exercise 6: While Loop ---")

while True:
    name = input("Enter your first name (at least 3 letters): ").strip()

    # isalpha() rejects digits, including mixed inputs like Bob123.
    if name.isalpha() and len(name) >= 3:
        print("thank you")
        break

    print("Please enter at least 3 letters, without spaces or symbols.")


# ============================================================
# Exercise 7: Favorite Fruits
# ============================================================

print("\n--- Exercise 7: Favorite Fruits ---")

favorite_fruits = input(
    "Enter your favorite fruits, separated by spaces: "
).lower().split()

fruit = input("Enter the name of any fruit: ").strip().lower()

if fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


# ============================================================
# Exercise 8: Pizza Toppings
# ============================================================

print("\n--- Exercise 8: Pizza Toppings ---")

toppings = []

while True:
    topping = input("Enter a topping, or 'quit' to finish: ").strip()

    if topping.lower() == "quit":
        break

    if topping == "":
        print("Please enter a topping or 'quit'.")
        continue

    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = 10 + 2.50 * len(toppings)

print("Your toppings:", toppings)
print(f"Total pizza cost: ${total_cost:.2f}")


# ============================================================
# Exercise 9: Cinemax Tickets
# ============================================================

print("\n--- Exercise 9: Cinemax Tickets ---")

family_ages = []

while True:
    age_input = input("Enter a family member's age, or 'done': ").strip()

    if age_input.lower() == "done":
        break

    try:
        age = int(age_input)
    except ValueError:
        print("Please enter a whole number or 'done'.")
        continue

    if age < 0:
        print("Age cannot be negative.")
        continue

    family_ages.append(age)

total_ticket_cost = 0

for age in family_ages:
    if age < 3:
        ticket_price = 0
    elif age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    total_ticket_cost += ticket_price

print("Family ages:", family_ages)
print(f"Total ticket cost: ${total_ticket_cost:.2f}")


# ============================================================
# Exercise 9 Bonus: Restricted Movie (ages 16-21 inclusive)
# ============================================================

print("\n--- Bonus: Restricted Movie ---")

attendees = input("Enter attendees' first names, separated by spaces: ").split()

# Iterate over a COPY so removing names does not skip anyone.
for person in attendees.copy():
    while True:
        try:
            age = int(input(f"How old is {person}? "))
        except ValueError:
            print("Please enter a whole number.")
            continue

        if age < 0:
            print("Age cannot be negative.")
            continue

        break

    if not 16 <= age <= 21:
        attendees.remove(person)
        print(f"{person} cannot attend: ages 16-21 only.")

print("Final list of attendees:", attendees)