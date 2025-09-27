function Car(name, turbo, age, color, engine) {
  this.name = name;
  this.turbo = turbo;
  this.age = age;
  this.color = color;
  this.engine = engine;
}

const myCar = new Car("BMW M5", true, 2, "Black", "V8");

console.log(myCar);

//2

const numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(item) {
  console.log(item);
});

