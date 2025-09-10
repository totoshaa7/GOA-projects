
    function checkAnswer(element, isCorrect) {
      const options = document.querySelectorAll('.option');
      options.forEach(opt => {
        opt.classList.remove('correct', 'wrong');
      });

      if (isCorrect) {
        element.classList.add('correct');
        document.getElementById('feedback').innerText = "correct 🎉 the correct answer is graphical engineer";
      } else {
        element.classList.add('wrong');
        document.getElementById('feedback').innerText = "incorrect please try again";
      }
    }
