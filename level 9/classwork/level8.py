# ask the user to enter the savings
savings = input("Enter your current savings: ")

# convert the user input into a float value and update the variable
savings = float(savings)

# savings grow after 1 year at a 5% annual interest rate
balance = savings * 1.05

# convert the balance into a string and update the variable
balance_str = str(balance)

# concatenate the 2 strings to produce a message
message = "Amount after 1 year with 5% interest: " + balance_str

# display the message
print(message)































# convert the values into numbers 
wins = input(3)
ties = input(1)

# 1 win 3 points
# 1 tie 1 point
# calculate the score
score = (wins + ties)

# concatenate the 2 strings to produce a message
message = "total score is" + str(score)

print(message)
