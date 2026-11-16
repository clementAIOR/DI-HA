# Challenge 1: Multiples of a Number

number = int(input("Enter an integer: "))
length = int(input("Enter the desired list length (0 or more): "))

if length < 0:
    print("The length cannot be negative.")
else:
    multiples = []

    for multiplier in range(1, length + 1):
        multiples.append(number * multiplier)

    print("Multiples:", multiples)


# Challenge 2: Remove Consecutive Duplicate Letters

user_string = input("\nEnter a string: ")

result = ""

for character in user_string:
    # Keep the character only if it differs from the last one kept.
    # An empty result always accepts the first character.
    if result == "" or character != result[-1]:
        result += character

print("Modified string:", result)