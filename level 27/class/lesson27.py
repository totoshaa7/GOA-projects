def welcome(name):
    print(f"Welcome, {name}")
#1 davalebis dasasruli


def printBill(customer_name):
    print("------")
    print(customer_name)
    print("------")

name = input("Enter customer name: ")


printBill(name)

#2 davalebis dasasruli

def calc(x, y):
    return [x + y, x * y]

res = calc(3, 4)
print(res[0])

#3 davalebis dasasruli


def sum(x):
    res = 0
    for i in range(x):
        res += i
    return res

print(sum(4))

#4 davalebis dasasruli