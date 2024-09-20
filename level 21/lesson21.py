
name = input("შეიტანეთ თქვენი სახელი: ")


if len(name) > 2:
    
    modified_name = name[:2] + name[3:]
    print("გამომდინარე სახელი:", modified_name)
else:
    print("სახელი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს.")

    

    countries = ["საქართველო", "კანადა", "ბრიტანეთი", "ამერიკა", "ფრანსია"]


removed_country = countries.pop(4)
