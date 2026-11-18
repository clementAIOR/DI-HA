
def display_board():
    print("\n    1   2   3")

    for i in range(3):
        print(f"{i + 1}   {board[i][0]} | {board[i][1]} | {board[i][2]}")
        if i < 2:
            print("   ---+---+---")

    print()


def player_input(player):
    while True:
        row_text = input(f"Player {player}, choose a row (1-3): ")
        col_text = input(f"Player {player}, choose a column (1-3): ")

        if row_text not in ("1", "2", "3") or col_text not in ("1", "2", "3"):
            print("Invalid input. Enter a number from 1 to 3 for each position.")
            continue

        row = int(row_text) - 1
        col = int(col_text) - 1

        if board[row][col] != " ":
            print("This square is taken. Choose another one.")
            continue

        return row, col


def check_win(board, player):
    for i in range(3):
        # Check rows
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True

        # Check columns
        if board[0][i] == board[1][i] == board[2][i] == player:
            return True

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True

    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False


def check_tie(board):
    for row in board:
        for cell in row:
            if cell == " ":
                return False

    return not check_win(board, "X") and not check_win(board, "O")


def play():
    global board

    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    print("Welcome to Tic Tac Toe! Player X starts.")

    while True:
        display_board()

        row, col = player_input(current_player)
        board[row][col] = current_player

        if check_win(board, current_player):
            display_board()
            print(f"Player {current_player} wins! Congratulations!")
            break

        if check_tie(board):
            display_board()
            print("It's a tie! No one wins.")
            break

        if current_player == "X":
            current_player = "O"
        else:
            current_player = "X"


if __name__ == "__main__":
    play()
