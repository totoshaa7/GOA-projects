let lineCount = 0;

for (let i = 1; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
    lineCount++;

    if (lineCount % 3 === 0) {
      console.log("GOA IS THE BEST");
    }
  }
}
