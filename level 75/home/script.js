const arr1 = [1, 2, 3, 4, 5];


const arr2 = [...arr1, 6]; 

console.log(arr1); 
console.log(arr2); 

//2

function mergeArrays(arrA, arrB) {
  return [...arrA, ...arrB];
}

const a = [1, 2];
const b = [3, 4];

const merged = mergeArrays(a, b);
console.log(merged);