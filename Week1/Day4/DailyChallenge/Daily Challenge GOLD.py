from datetime import datetime, date
import calendar

today = date.today()

# Ask for a valid birthdate.
while True:
    user_input = input("Enter your birthdate (DD/MM/YYYY): ")

    try:
        birthdate = datetime.strptime(user_input.strip(), "%d/%m/%Y").date()

        if birthdate > today:
            print("Your birthdate cannot be in the future.")
            continue

        break

    except ValueError:
        print("Invalid date. Use DD/MM/YYYY, for example: 15/06/1995.")


# Calculate the user's age.
age = today.year - birthdate.year

# Subtract one year if their birthday has not happened yet this year.
if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

print(f"\nYou are {age} years old!")

# The last digit of the age determines the number of candles.
number_of_candles = age % 10
candles = "i" * number_of_candles

# Center the candles between underscores.
cake_top = candles.center(11, "_")

cake = f"""
       {cake_top}
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""

# Bonus: print two cakes if the birth year was a leap year.
if calendar.isleap(birthdate.year):
    print("You were born in a leap year — you get two cakes!")
    number_of_cakes = 2
else:
    number_of_cakes = 1

for cake_number in range(number_of_cakes):
    print(cake)