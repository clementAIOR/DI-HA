"""Developers Institute — Daily Challenge: Sorting and Longest Word."""


def sort_words(text):
    """Sort comma-separated words alphabetically and join them again."""
    words = text.split(",")
    words.sort()
    return ",".join(words)


def longest_word(sentence):
    """Return the first longest word, keeping punctuation attached."""
    words = sentence.split()
    longest = ""

    for word in words:
        if len(word) > len(longest):
            longest = word

    return longest


def main():
    print("Challenge 1: Sorting")
    text = input("Enter words separated by commas: ")
    print(sort_words(text))

    print("\nChallenge 2: Longest Word")
    sentence = input("Enter a sentence: ")
    print(longest_word(sentence))


if __name__ == "__main__":
    main()
