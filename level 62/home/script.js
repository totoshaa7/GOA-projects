```
let numsArray = [30,12,11,92]
let strArray = ['Hello','World','GOA','BEST'] 
//Concatenate - შეერთება
// Task 1(2)
let combinedArray = strArray.concat(numsArray)
console.log(combinedArray)
//Task1(3)
combinedArray.copyWithin(4,0,3)

//Task1(4)
combinedArray.fill('filled',2,4)
console.log(combinedArray)
//Task1(5)
combinedArray.pop(-1)

//Task1(6)
combinedArray.shift()
console.log(combinedArray)

//Task1(7)
combinedArray.unshift(100,200)


//Task2(1)

let People = [
    { name: 'Gurami'},
    { name: 'Otuli'}
]
let Places = [
    { city: 'Tbilisi'},
    { city: 'Telavi'}
]
//Task2(2)
let mergedArray = People.concat(Places)

//Task2(3)
mergedArray.copyWithin(2,0,2)

//Task2(4)
mergedArray.fill({city: 'New York'},-2, 0)

//Task2(5)

mergedArray.pop(-1)

//Task2(6)

mergedArray.shift()

//Task2(7)

mergedArray.unshift({name: 'Charlie'}, {name: 'David'})

//Task 3
//Do yourself
// step 1
let mixedArray = [1, 'two', 3, 'four', 5];

// step 2
let extendedArray = mixedArray.concat([true, false]);
console.log("Step 2:", extendedArray);

// step 3
extendedArray.copyWithin(0, 3, 5);
console.log("Step 3:", extendedArray);

// step 4
extendedArray.fill(0, 4, 7);
console.log("Step 4:", extendedArray);

// step 5: 
extendedArray.pop();
console.log("Step 5:", extendedArray);

// step 6: 
extendedArray.shift();
console.log("Step 6:", extendedArray);

// step 7: 
extendedArray.unshift(null, undefined);
console.log("Step 7:", extendedArray);







//Task 4(1)

let arr1 = [1,2,3]
let arr2 = ['1','2','3']
let arr3 = [true,false]
//Task 4(2)
let mergedArray2 = arr1.concat(arr2)

//Task4(3)

mergedArray2.copyWithin(5,0,3)

//Task4(4)

mergedArray2.fill(0,6,-1)

//Task4(5)
mergedArray2.pop(-1)

//Task4(6)
mergedArray2.shift()

//Task4(7)
mergedArray2.unshift(100,200)

//Task4(8)
mergedArray2.splice(2,2,...arr3)
console.log(mergedArray2)

//Task4(9)
let slicedArray = mergedArray2.slice(-5)
console.log(slicedArray)
//Task4(10)
const newString = slicedArray.join(',')
console.log(newString)
```