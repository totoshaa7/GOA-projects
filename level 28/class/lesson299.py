def search(text, word):
    if word in text:
        return "სიტყვა ნაპოვნია"
    else:
        return "სიტყვა ნაპოვნია"

print(search("ეს გასაოცარია", "გასაოცარია")) 

#2

def count_words(text):
    words = text.split()  
    return len(words)     

text = "ეს არის ტექსტური წინადადება"
print(count_words(text))  


#3


def check_number(number):
    if number > 0:
        return "რიცხვი დადებითია"
    elif number < 0:
        return "რიცხვი უარყოფითია"
    else:
        return "რიცხვი ნულია"
    
    #4

  