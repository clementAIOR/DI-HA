"""Developers Institute - Python dictionary exercises (1-4 + bonuses).

Run with: python3 dictionary_exercises.py
Uncomment the last line to try the interactive movie-ticket bonus.
"""

# Exercise 1: Converting lists into a dictionary
print("\n--- Exercise 1: Lists to dictionary ---")
keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]
result = dict(zip(keys, values))
print(result)


# Exercise 2: Cinemax #2
print("\n--- Exercise 2: Cinemax #2 ---")
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}


def calculate_tickets(family_members):
    total = 0

    for name, age in family_members.items():
        if age < 3:
            price = 0
        elif age <= 12:
            price = 10
        else:
            price = 15

        print(f"{name}: ${price}")
        total += price

    print(f"Total cost: ${total}")
    return total


calculate_tickets(family)


# Bonus for Exercise 2: Ask for names and ages
# To run this bonus, uncomment 'bonus_family_input()' at the bottom.
def bonus_family_input():
    new_family = {}
    while True:
        name = input("Enter a name (or 'done' to finish): ").strip()
        if name.lower() == "done":
            break
        if not name:
            print("Please enter a name.")
            continue

        age_text = input(f"Enter {name}'s age: ").strip()
        if not age_text.isdigit():
            print("Age must be a non-negative whole number. Try again.")
            continue

        new_family[name] = int(age_text)

    calculate_tickets(new_family)


# Exercise 3: Zara
print("\n--- Exercise 3: Zara ---")
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"],
    },
}

brand["number_stores"] = 2
print(f"Zara offers products for: {', '.join(brand['type_of_clothes'])}.")
brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

brand.pop("creation_date")
print("Last competitor:", brand["international_competitors"][-1])
print("Major colors in the US:", ", ".join(brand["major_color"]["US"]))
print("Number of dictionary keys:", len(brand))
print("All keys:", list(brand.keys()))

# Bonus: merge in the additional information. Existing keys get overwritten.
more_on_zara = {"creation_date": 1975, "number_stores": 7000}
brand.update(more_on_zara)
print("Merged Zara dictionary:", brand)


# Exercise 4: Disney characters
print("\n--- Exercise 4: Disney Characters ---")
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1. Character -> original index
characters_to_indices = {name: index for index, name in enumerate(users)}
print(characters_to_indices)

# 2. Original index -> character
indices_to_characters = {index: name for index, name in enumerate(users)}
print(indices_to_characters)

# 3. Alphabetical character -> new index
alphabetical_characters = {
    name: index for index, name in enumerate(sorted(users))
}
print(alphabetical_characters)

# Uncomment to try the interactive family bonus:
# bonus_family_input()
