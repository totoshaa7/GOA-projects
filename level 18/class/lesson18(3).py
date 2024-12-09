#დავალება: მომხმარებელს შემოატანინეთ რიცხვი, ხოლო შემდეგ დაპრინტეთ, ყველა ლუწი რიცხვი მომხმარებლის შემოატანილი რიცხვის ჩათვლით.
user_input=int(input("Enter your number:"))
for i in range(user_input):
    if i % 2 != 0:
        print(i)