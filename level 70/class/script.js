let container = document.getElementById("container");
let button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "New text added!";
  container.appendChild(newParagraph);

  if (container.children.length > 1) {
    container.removeChild(container.firstElementChild);
  }
});
