#split
sentence = "The quick brown fox jumps over the lazy dog."
words_list = sentence.split()
print(words_list)

#1

text = "Python is a versatile programming language"
words = text.split()
#2
csv_data = "apple,banana,cherry,dates"
fruits = csv_data.split(',')
print(fruits)
#3



#format

name = "eka"
age = 25
message = "Hello, my name is {} and I am {} years old.".format(name, age)
print(message)

#1

message = "City: {city}, Country: {country}".format(city="goa", country="goaland")
print(message)


#2

message = "The fruit is a {fruit} and its color is {color}.".format(fruit="apple", color="red")
print(message)

#3


#join

words = ['goa', 'is', 'awesome']
sentence = ' '.join(words)
print(sentence)

#1


fruits = ['apple', 'banana', 'cherry']
result = ' '.join(fruits)
print(result)

#2

fruits = ['apple', 'banana', 'cherry']
result = '  '.join(fruits)
print(result)
 #3
