function add(a, b) {
  return a + b;
}

function greet(name) {
  console.log(`გამარჯობა, ${name}!`);
}
function delayedResult() {
  console.log("მოთხოვნა მუშავდება... გთხოვთ მოითმინოთ 😊");

  setTimeout(() => {
    console.log("მონაცემები მზადაა ✅ (დაყოვნება 2 წამი)");
    const result = 3;
    console.log("შედეგი:", result);
  }, 2000); //2000m-2second
}

console.log("ჯამი:", add(5, 7));      
greet("ნიკა");                         
delayedResult();                       