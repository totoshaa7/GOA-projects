
def main():
    
    first_name = input("შეიყვანეთ თქვენი სახელი: ")
    last_name = input("შეიყვანეთ თქვენი გვარი: ")
    age = input("შეიყვანეთ თქვენი ასაკი: ")
    location = input("შეიყვანეთ საცხოვრებელი ადგილი: ")
    mother_first_name = input("შეიყვანეთ დედის სახელი: ")
    mother_last_name = input("შეიყვანეთ დედის გვარი: ")
    mother_age = input("შეიყვანეთ დედის ასაკი: ")
    
  
    sentence = (f"მე ვარ {first_name} {last_name}, {age} წლის ვცხოვრობ {location}-ში "
                f"ჩემი დედაა {mother_first_name} {mother_last_name} რომელიც არის {mother_age} წლის")
    
  
    print("\n" + sentence)

if __name__ == "__main__":
    main()

#python
age = 1 
print(age)
#იმიტომ დავწერე რომ პრობლემა შემექმნა ატვირთვაში
