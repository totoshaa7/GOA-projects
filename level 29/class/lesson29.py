def word_count(text):
    
    words = text.split()
    return len(words)

text = "goa,goa,goa"
print(word_count(text)) 

#1

def age_category(age):
    if age < 1:
        return "ga good:
    elif age <= 13:
        return "goa goa
    elif age <= 18:
        return goa teen
    elif age <= 55:
        return "თქენ ხართ ახალგაზრდა ადამიანი."
    elif age <= 97:
        return "თქვენ ხართ ზრდასრული."
    else:
        return "თქვენ ხართ მოხუცი."

# მომხმარებლის ასაკი
age = int(input("დაწერეთ თქვენი ასაკი: "))
print(age_category(age))
