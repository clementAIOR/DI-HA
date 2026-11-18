
import random

# Generate 20,000 random numbers
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728


# Function to find all unique pairs
def find_pairs(numbers, target):
    seen = set()
    pairs = set()

    for number in numbers:
        complement = target - number

        if complement in seen:
            pair = tuple(sorted((number, complement)))
            pairs.add(pair)

        seen.add(number)

    return sorted(pairs)


# Call the function
result = find_pairs(list_of_numbers, target_number)

# Display all pairs
for num1, num2 in result:
    print(f"{num1} and {num2} sum to {target_number}")

print(f"\nTotal unique pairs found: {len(result)}")
