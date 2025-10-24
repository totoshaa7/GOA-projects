class Person {
  constructor(name, age, city, profession) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.profession = profession;
  }

  displayInfo() {
    console.log(`სახელი: ${this.name}, ასაკი: ${this.age}, ქალაქი: ${this.city}, პროფესია: ${this.profession}`);
  }
}

const person1 = new Person("ნიკა", 25, "თბილისი", "პროგრამისტი");
person1.displayInfo()


