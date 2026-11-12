import random

# 1. Ask the user for a string.
user_string = input("Enter a string of exactly 10 characters: ")

# 2. Check the length.
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else:
    print("Perfect string")
    # 3. Print the first and last characters.
    print("First character:", user_string[0])
    print("Last character:", user_string[-1])

    # 4. Build and print the string one character at a time.
    built_string = ""
    for character in user_string:
        built_string += character
        print(built_string)

    # 5. Bonus: shuffle a list of characters, then join them.
    characters = list(user_string)
    random.shuffle(characters)
    jumbled_string = "".join(characters)
    print("Jumbled string:", jumbled_string)
