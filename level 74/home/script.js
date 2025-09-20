const cars = [
  { name: "Ferrari", turbo: true, age: 2, color: "red", engine: "V8" },
  { name: "BMW", turbo: false, age: 3, color: "blue", engine: "I6" },
  { name: "Audi", turbo: true, age: 1, color: "black", engine: "V6" },
  { name: "Mercedes", turbo: false, age: 5, color: "white", engine: "V6" },
  { name: "Porsche", turbo: true, age: 4, color: "yellow", engine: "V8" }
];

cars.forEach(car => {
  console.log(`Name: ${car.name}, Color: ${car.color}`);
});

const turboCars = cars.filter(car => car.turbo === true);
console.log(turboCars);

const carInfo = cars.map(car => ({
  name: car.name,
  engine: car.engine
}));
console.log(carInfo);
