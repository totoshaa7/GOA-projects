# class MyClass:
#  simba = "mepe lomi 1"
#  mupasa = "mepe lomi 2"

# new_my_class = MyClass()
# print(new_my_class.simba)
# print(new_my_class.mupasa)


# class Lomi:
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age
        
# new_my_class = Lomi("otuli",21)
# print(new_my_class.name)
# print(new_my_class.age)

class MyClass:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    def __str__(self):
       return f"Lomivar: {self.name}, age: {self.age} "
new_my_otuli = MyClass("otuli",21)
print(new_my_otuli)
