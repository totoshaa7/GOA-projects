

function checkTemperature(temp) {
    if (temp < 10) {
        return "coldd";
    } else if (temp >= 10 && temp <= 25) {
        return "balanced";
    } else {
        return "hot";
    }
}



const temp = parseFloat(prompt("შეიყვანეთ ტემპერატურა (°C):"));
console.log(`ტემპერატურა ${temp}°C არის ${checkTemperature(temp)}`);
