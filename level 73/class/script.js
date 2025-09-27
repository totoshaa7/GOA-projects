const myArray = [10, 20, 30, 40, 50];

const myObject = {
  name: "BMW",
  color: "Black",
  engine: "V8"
};

console.log("Array elements:");
for (const item of myArray) {
  console.log(item);
}

console.log("Object properties:");
for (const key in myObject) {
  console.log(key + ": " + myObject[key]);
}

//2
const hello = () => console.log("Hello World");

hello();

const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
