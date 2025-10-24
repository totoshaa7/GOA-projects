function getDayName(year, month, day) {
  const date = new Date(year, month - 1, day); 
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

console.log(getDayName(1993, 7, 12)); 

//2

let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

currentDate.setFullYear(2030);   
currentDate.setMonth(11);        
currentDate.setDate(25);         
currentDate.setHours(15);      
currentDate.setMinutes(45);      
currentDate.setSeconds(0);       

console.log("Modified Date and Time:", currentDate);

