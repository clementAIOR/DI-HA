
text = input("String: ")
character = input("Character: ")

count = 0

for letter in text:
    if letter == character:
        count += 1

print(count)
