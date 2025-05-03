let n = parseInt(prompt("შეიყვანეთ რიცხვი N:"));
let factorial = 1;

if (n < 0) {
  alert("ფაქტორიალი არ განისაზღვრება უარყოფითი რიცხვებისთვის");
} else {
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  alert(`რიცხვი ${n}-ის ფაქტორიალია: ${factorial}`);
}
