let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatArray = array1.concat(array2);
console.log("After concatenation:", concatArray);

concatArray.copyWithin(concatArray.length, 0, 2);
console.log("After copyWithin:", concatArray);


concatArray.fill(0, concatArray.length - 3);
console.log("After fill:", concatArray);


let lastElement = concatArray.pop();
console.log("Last element removed:", lastElement);
console.log("After pop:", concatArray);


let firstElement = concatArray.shift();
console.log("First element removed:", firstElement);
console.log("After shift:", concatArray);


concatArray.unshift(10, 20);
console.log("After unshift:", concatArray);
