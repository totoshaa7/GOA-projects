
const fruits = ["apple", "orange", "lemon", "banana", "mango"];

const citrus = fruits.slice(1, 3); 


const fruitString = fruits.join('-'); 

function processFruits(fruits) {
  const citrus = fruits.slice(1, 3);
  const fruitString = fruits.join('-');
  return fruitString;
}

console.log(processFruits(["apple", "orange", "lemon", "banana", "mango"]));
