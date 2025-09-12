let ul = document.getElementById("myUl");
let newLi = document.createElement("li");
newLi.textContent = "New Item";
ul.appendChild(newLi);


ul.removeChild(ul.firstElementChild);

document.getElementById("changeMe").textContent = "Changed Item 3";
