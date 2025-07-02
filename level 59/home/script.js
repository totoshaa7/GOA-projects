// constructor function
function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;

  this.introduce = function() {
    console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
  };
}

const person1 = new Person("Alice", 30, "developer");
person1.introduce(); 

//

// book collection
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;


  this.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
}

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

// user management

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.changePassword = function(newPassword) {
    this.password = newPassword;
  };

  this.getDetails = function() {
    return {
      username: this.username,
      email: this.email
    };
  };
}

const user1 = new User("totoro", "totoro@example.com", "oldPass123");

user1.changePassword("newPass456");

console.log(user1.getDetails());
