import random


# ============================================================
# Exercise 1: What Are You Learning?
# ============================================================

def display_message():
    print("I am learning about functions in Python.")


print("\n--- Exercise 1 ---")
display_message()


# ============================================================
# Exercise 2: What's Your Favorite Book?
# ============================================================

def favorite_book(title):
    print(f"One of my favorite books is {title}.")


print("\n--- Exercise 2 ---")
favorite_book("Alice in Wonderland")


# ============================================================
# Exercise 3: Some Geography
# ============================================================

def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")


print("\n--- Exercise 3 ---")
describe_city("Reykjavik", "Iceland")
describe_city("Paris")
describe_city("Jerusalem", "Israel")


# ============================================================
# Exercise 4: Random
# ============================================================

def compare_random_number(number):
    if number < 1 or number > 100:
        print("Please choose a number from 1 to 100.")
        return

    random_number = random.randint(1, 100)

    if number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {random_number}")


print("\n--- Exercise 4 ---")
compare_random_number(50)


# ============================================================
# Exercise 5: Personalized Shirts
# ============================================================

def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")


print("\n--- Exercise 5 ---")
make_shirt()
make_shirt("medium")
make_shirt("small", "Custom message")
make_shirt(size="small", text="Hello!")


# ============================================================
# Exercise 6: Magicians
# ============================================================

def show_magicians(magician_names):
    for magician in magician_names:
        print(magician)


def make_great(magician_names):
    for index in range(len(magician_names)):
        magician_names[index] += " the Great"


print("\n--- Exercise 6 ---")
magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]
make_great(magician_names)
show_magicians(magician_names)


# ============================================================
# Exercise 7: Temperature Advice (including both bonuses)
# ============================================================

def get_random_temp(season=None):
    # Seasonal ranges are illustrative, not actual weather forecasts.
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(5, 24)
    elif season == "summer":
        return random.uniform(20, 40)
    elif season == "autumn":
        return random.uniform(0, 25)
    else:
        return random.uniform(-10, 40)


def get_season(month):
    # Northern Hemisphere seasons (meteorological convention).
    if month in (12, 1, 2):
        return "winter"
    elif month in (3, 4, 5):
        return "spring"
    elif month in (6, 7, 8):
        return "summer"
    else:
        return "autumn"


def main():
    while True:
        month_input = input("Enter a month (1-12): ")

        try:
            month = int(month_input)
        except ValueError:
            print("Please enter a whole number between 1 and 12.")
            continue

        if 1 <= month <= 12:
            break

        print("Please enter a month between 1 and 12.")

    season = get_season(month)
    temperature = get_random_temp(season)

    print(f"Season: {season}")
    print(f"The temperature right now is {temperature:.1f} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temperature < 24:
        print("Nice weather.")
    elif temperature < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It's really hot! Stay cool.")


print("\n--- Exercise 7 ---")
main()
