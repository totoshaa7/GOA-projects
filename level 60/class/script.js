
let myArray = [25, "ტექსტი", false, undefined, {name: "ლუკა"}];


for (let item of myArray) {
  console.log("მნიშვნელობა:", item);
}

let lastItem = myArray.pop();
console.log("ბოლო ამოღებული:", lastItem);


let newArray = myArray.concat(["ახალი მნიშვნელობა"]);
console.log("გაერთიანებული მასივი:", newArray);


console.log("ძველი სიგრძე:", myArray.length);
console.log("ახალი სიგრძე:", newArray.length);
