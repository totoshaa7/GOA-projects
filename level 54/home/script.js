let password = 'Group 41 is best';

function guessPassword() {
  let attempts = 3;

  while (attempts > 0) {
    let userInput = prompt('შეიყვანეთ პაროლი:');
    
    if (userInput === password) {
      alert('თქვენი შეყვანილი პაროლი სწორია');
      return;
    } else {
      attempts--;
      if (attempts > 0) {
        alert(`პაროლი არასწორია. დარჩენილი ცდები: ${attempts}`);
      }
    }
  }

  alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
}

guessPassword();
