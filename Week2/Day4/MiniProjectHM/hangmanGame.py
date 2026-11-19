import random

wordslist = [
    'correction', 'childish', 'beach', 'python', 'assertive',
    'interference', 'complete', 'share', 'credit card', 'rush', 'south'
]

word = random.choice(wordslist)

# There are 7 pictures: 0 mistakes, then 1 to 6 mistakes.
hangman_pictures = [
    r"""
  +---+
  |   |
      |
      |
      |
      |
=========
""",
    r"""
  +---+
  |   |
  O   |
      |
      |
      |
=========
""",
    r"""
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
""",
    r"""
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
""",
    r"""
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========
""",
    r"""
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========
""",
    r"""
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
"""
]


def show_word(secret_word, guessed_letters):
    """Show stars for unguessed letters and keep spaces visible."""
    display = ''
    for letter in secret_word:
        if letter == ' ':
            display += ' '
        elif letter in guessed_letters:
            display += letter
        else:
            display += '*'
    return display


def play_hangman():
    guessed_letters = set()
    mistakes = 0
    max_mistakes = 6

    print('Welcome to Hangman!')

    while mistakes < max_mistakes:
        print(hangman_pictures[mistakes])
        print('Word:', show_word(word, guessed_letters))
        print('Guessed letters:', ', '.join(sorted(guessed_letters)) or 'None')
        print('Mistakes remaining:', max_mistakes - mistakes)

        guess = input('Guess one letter: ').strip().lower()

        if len(guess) != 1 or not guess.isalpha():
            print('Please enter exactly one letter.\n')
            continue

        if guess in guessed_letters:
            print('You already guessed that letter. Try another!\n')
            continue

        guessed_letters.add(guess)

        if guess in word:
            print('Correct!\n')
        else:
            mistakes += 1
            print('Wrong guess!\n')

        if '*' not in show_word(word, guessed_letters):
            print('Word:', word)
            print('You win! Congratulations!')
            return

    print(hangman_pictures[mistakes])
    print('Game over! The word was:', word)


if __name__ == '__main__':
    play_hangman()
