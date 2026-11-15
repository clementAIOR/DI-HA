"""Developers Institute - Daily Challenge: Dictionaries (Week 1, Day 3)."""

# Challenge 1: Letter Index Dictionary

def letter_index_dictionary(word):
    letter_indices = {}

    for index in range(len(word)):
        letter = word[index]

        if letter in letter_indices:
            letter_indices[letter].append(index)
        else:
            letter_indices[letter] = [index]

    return letter_indices


# Challenge 2: Affordable Items

def affordable_items(items_purchase, wallet):
    # Remove the currency symbol and commas, then convert to a number.
    wallet = int(wallet.replace("$", "").replace(",", ""))
    basket = []

    # Dictionary order is purchase priority: buy earlier items first.
    for item, price_text in items_purchase.items():
        price = int(price_text.replace("$", "").replace(",", ""))

        if price <= wallet:
            basket.append(item)
            wallet -= price

    if len(basket) == 0:
        return "Nothing"
    else:
        return sorted(basket)


if __name__ == "__main__":
    word = input("Enter a word: ")
    print(letter_index_dictionary(word))

    items_purchase = {
        "Water": "$1",
        "Bread": "$3",
        "TV": "$1,000",
        "Fertilizer": "$20"
    }
    wallet = "$300"

    print(affordable_items(items_purchase, wallet))
