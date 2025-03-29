

function checkEvenOdd(number) {
    return number % 2 === 0 ? "ლუწი" : "კენტი";
}



const num = parseInt(prompt("შეიყვანეთ რიცხვი:"));
console.log(`რიცხვი ${num} არის ${checkEvenOdd(num)}`);
