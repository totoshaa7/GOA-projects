  let step = 0;
  const box = document.getElementById("box");

  box.onclick = function () {
    step++;

    if (step === 1) {
      box.classList.add("big");
    } else if (step === 2) {
      box.classList.remove("big");
    } else if (step === 3) {
      box.classList.toggle("color");
      step = 0;
    }
  }