function User(name, age, city, profession) {
    this.name = name;       
    this.age = age;          
    this.city = city;        
    this.profession = profession; 
}
    const newUser1 = new User("vaxtangi", 21, "თბილისი", "პროგრამისტი");
    const newUser2 = new User("lasha", 9, "ბათუმი", "მოსწავლე");

    console.log(newUser1);
    console.log(newUser2);

    //2

    class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
}

const dog1 = new Dog("buddy", "golden retriever", 3);
const dog2 = new Dog("dog", "german shepherd", 5);

console.log(dog1);
console.log(dog2);
