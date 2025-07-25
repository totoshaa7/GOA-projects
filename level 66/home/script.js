// task 1
// 1
function showCurrentDateTime() {
  const now = new Date();
  const formatted = now.toISOString().replace('T', ' ').split('.')[0];
  console.log(formatted);
}

// 2
function calculateAge(birthDateStr) {
  const birthDate = new Date(birthDateStr);
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.body.innerHTML = `Age: ${years} years, ${months} months, ${days} days`;
}

// 3
function getDayOfWeek(dateStr) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateStr);
  console.log(days[date.getDay()]);
}

// task 2
// 1
let counter = 0;
setInterval(() => {
  console.log(`Timer: ${counter++}`);
}, 1000);

// 2
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);

// 3
setInterval(() => {
  console.log(Math.random());
}, 1000);

// task 3
function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

// task 4

setTimeout(() => {
  console.log("Hello! 👋");
}, 2000);

// task 5

function chainMessages() {
  setTimeout(() => {
    console.log("First message");
    setTimeout(() => {
      console.log("Second message");
      setTimeout(() => {
        console.log("Third message");
      }, 1000);
    }, 1000);
  }, 1000);
}


// task 6

function delayedSequence() {
  setTimeout(() => {
    console.log("Function 1");
    setTimeout(() => {
      console.log("Function 2");
      setTimeout(() => {
        console.log("Function 3");
      }, 1000);
    }, 1000);
  }, 1000);
}

// task 7

function updateGreeting() {
  setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour < 12) {
      greeting = "Good Morning";
    } else if (hour < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    console.log(`${greeting}! It's ${now.toLocaleTimeString()}`);
  }, 1000);
}



