const myArray = [10, 20, 30, 40, 50];

const myObject = {
  name: "John",
  age: 25,
  country: "USA",
  job: "Developer",
  hobby: "Gaming"
};

const [first, second, third, fourth, fifth] = myArray;

const { name, age, country, job, hobby } = myObject;

console.log(first, second, third, fourth, fifth); 
console.log(name, age, country, job, hobby);
