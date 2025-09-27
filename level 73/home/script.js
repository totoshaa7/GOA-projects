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

const hello = () => console.log("Hello World");
hello();

const add = (a, b) => a + b;
console.log("Add(5,3):", add(5, 3));

console.log("Array elements with forEach:");
myArray.forEach(item => console.log(item));

console.log("Object keys and values:");
for (const key in myObject) {
  const value = myObject[key];
  console.log(`Key: ${key}, Value: ${value}`);
}

const doubledArray = myArray.map(item => item * 2);
console.log("Doubled array with map:", doubledArray);
