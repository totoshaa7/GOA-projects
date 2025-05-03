function countdown() {
    let seconds = 100;
  
    let timer = setInterval(function () {
      console.log(`დარჩენილია ${seconds} წამი`);
      seconds--;
  
      if (seconds < 0) {
        clearInterval(timer);
        console.log("დრო ამოიწურა!");
      }
    }, 1000); 
  }
  
  countdown();
  