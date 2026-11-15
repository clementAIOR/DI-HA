
MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

# Step 1: Convert the string into a 2D list
matrix = [list(row) for row in MATRIX_STR.strip("\n").splitlines()]

# Step 2: Prepare the decoded message
decoded_message = ""
pending_space = False

# Step 3: Read column by column
for col in range(len(matrix[0])):
    for row in range(len(matrix)):

        char = matrix[row][col]

        # Step 4: Check if the character is a letter
        if char.isalpha():

            if pending_space and decoded_message:
                decoded_message += " "

            decoded_message += char
            pending_space = False

        else:
            pending_space = True

# Step 5: Display the result
print(decoded_message)
