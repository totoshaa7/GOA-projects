// task 1
// step 1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8];

// step 2
let mergedArray = arr1.concat(arr2);
console.log("Step 2:", mergedArray);

// step 3
mergedArray.copyWithin(5, 0, 3);
console.log("Step 3:", mergedArray);

// step 4
mergedArray.fill(0, 6);
console.log("Step 4:", mergedArray);

// step 5
mergedArray.pop();
console.log("Step 5:", mergedArray);

// step 6
mergedArray.shift();
console.log("Step 6:", mergedArray);

// step 7
mergedArray.unshift(100, 200);
console.log("Step 7:", mergedArray);

// step 8
mergedArray.splice(2, 2, ...arr3);
console.log("Step 8:", mergedArray);

// step 9
let slicedArray = mergedArray.slice(-5);
console.log("Step 9:", slicedArray);

// step 10
let resultString = slicedArray.join(",");
console.log("Step 10:", resultString);

// task 2
// step 1
let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 90, 78];

// step 2
function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return { students, grades };
}

// step 3
function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

// step 4
function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}

// step 5
function updateGrades(newValue) {
  grades.fill(newValue);
  return grades;
}

console.log("Initial:", { students, grades });

console.log("Add student:", addStudent("Diana", 92));
console.log("Remove last student:", removeLastStudent());
console.log("Replace grade at index 1:", replaceGrade(1, 88));
console.log("Update all grades to 100:", updateGrades(100));

// task 3

