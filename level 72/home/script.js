let i = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.getElementById("dots");


slides.forEach((_, n) => {
  let d = document.createElement("span");
  d.innerText = "•";
  d.style.cursor = "pointer";
  d.onclick = () => show(n);
  dots.appendChild(d);
});

function show(n) {
  i = (n + slides.length) % slides.length;
  slides.forEach(s => s.style.display = "none");
  Array.from(dots.children).forEach(d => d.style.color = "black");
  slides[i].style.display = "block";
  dots.children[i].style.color = "red";
}

document.getElementById("prev").onclick = () => show(i - 1);
document.getElementById("next").onclick = () => show(i + 1);

function auto() {
  show(i + 1);
  setTimeout(auto, 3000);
}

document.getElementById("themeBtn").onclick = () => document.body.classList.toggle("dark");

show(0);
auto();
