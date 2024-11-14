#hello goa
def word_count(text):
    words = text.split()
    return len(words)
#1

def check_number(num):
    if num > 0:
        return "რიცხვი დადებითია"
    elif num < 0:
        return "რიცხვი უარყოფითია"
    else:
        return "რიცხვი ნულია"
#2

def age_category(age):
    if age < 13:
        return "ბავშვი"
    elif 13 <= age < 18:
        return "მოზარდი"
    elif 18 <= age < 65:
        return "მოზრდილი"
    else:
        return "პენსიონერი"
#3

def age_category(age):
    if age < 13:
        return "ბავშვი"
    elif 13 <= age < 18:
        return "მოზარდი"
    elif 18 <= age < 65:
        return "მოზრდილი"
    else:
        return "პენსიონერი"
#4