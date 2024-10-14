#goa#
range= int(input("შეიყვანეთ  დასაწყისი: "))
end = int(input("შეიყვანეთ  დასასრული: "))
step = int(input("შეიყვანეთ  შემდეგი: "))


numbers = range(start, end, step)


for number in numbers:
    print(number)
