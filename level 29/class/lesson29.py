def check_number(number):
    if number > 0:
        return "დადებითი რიცხვია"
    elif number < 0:
        return "უარყოფით რიცხვია"
    else:
        return "ნული"

print(check_number(int(input("შეიყვანეთ რიცხვი: "))))

#1

def check_number(number):
    if number > 0:
        return "Positive number"
    elif number < 0:
        return "Negative number"
    else:
        return "Zero"

print(check_number(float(input("Enter a number: "))))

#2

def age_category(age):
    if age < 0:
        return "in tummy"
    elif age <= 12:
        return "Child"
    elif age <= 19:
        return "Teenager"
    elif age <= 35:
        return "Young Adult"
    elif age <= 64:
        return "Adult"
    else:
        return "Senior"

print(age_category(int(input("Enter your age: "))))

#3
