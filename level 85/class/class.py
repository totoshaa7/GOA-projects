class Person:
     def __init__(self, name):
        self.name = name

     def greeting(self):
         return f"hello, my name is {self.name}!"
        
p = Person("Person")
print(p.greeting())

class Lion(Person):
    def __init__(self, fname, lname):
     Person.__init__(self, fname )

new_person = Lion("Person", 13)
print(new_person.greeting())
