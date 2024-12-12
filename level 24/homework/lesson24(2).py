number = 42

print("The answer is {:0>5}".format(number))  


x = 5
y = 10
print("x: {}, y: {}".format(x, y))  


person = {"name": "Bob", "age": 30}
print("{name} is {age} years old.".format(**person))  

weather = {"city": "New York", "temperature": 75}
print("The temperature in {city} is {temperature}°F.".format(**weather))  



book = {"title": "1984", "author": "George Orwell"}
print("The book '{title}' is written by {author}.".format(**book)) 


car = {"make": "Toyota", "model": "Camry"}
print("This car is a {make} {model}.".format(**car))



movie = {"title": "Inception", "director": "Christopher "}
print("The movie '{title}' was directed by {director}.".format(**movie)) 


car = {"make": "bmw", "model": "5 series"}
print("This car is a {make} {model}.".format(**car))

#goa

car = {"make": "bmw", "model": "8 series"}
print("This car is a {make} {model}.".format(**car))


#goa


car = {"make": "bmw", "model": "x5"}


print("this car is a: {make} {model}.".format(**car))




#goa



template = "Hello, {name}. Welcome to {place}."

formatted_string = template.format(name="goa", place="Wonderland")
print(formatted_string) 