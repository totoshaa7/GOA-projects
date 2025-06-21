//2 
function getArrayLength(arr) {
  return arr.length;
}

//3
function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

//4
function pushToArray(arr, value) {
  return arr.push(value);
}

//5
function popFromArray(arr) {
  return arr.pop();
}

// 6
function concatAndPush(arr1, arr2, value) {
  let result = arr1.concat(arr2);
  result.push(value);
  return result;
}
// 7
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// 8
function evenIndexedElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

// 9
function stringLengths(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}
