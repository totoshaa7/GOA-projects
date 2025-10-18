function processFruits(fruits) {
  // step 1
  const citrus = fruits.slice(1, 3);
  console.log("Citrus fruits:", citrus);

  // step 2
  const fruitString = fruits.join('-');

  // step 3
  return fruitString;
}

const fruits = ["apple", "banana", "orange", "mango", "pear"];
const result = processFruits(fruits);

console.log("Resulting string:", result);
