function getBoxNumber(color) {
    if (color === "red") {
        return 1;
    } else if (color === "green") {
        return 2;
    } else if (color === "black") {
        return 3;
    } else {
        return "unknown";
    }
}

const color = prompt("Enter color:").
console.log(getBoxNumber(color));
