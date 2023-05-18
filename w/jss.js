var word = "WISIELEC";
    var guessedLetters = [];
    var attempts = 0;
    var maxAttempts = 6;

    function guess(letter) {
      if (guessedLetters.includes(letter)) {
        return; 
      }

      guessedLetters.push(letter);

      if (word.indexOf(letter) === -1) {
        attempts++;
        drawHangman();
      }

      updateWordDisplay();
      checkGameStatus();
    }

    function updateWordDisplay() {
      var wordContainer = document.getElementById("word");
      var displayedWord = '';

      for (var i = 0; i < word.length; i++) {
        if (guessedLetters.includes(word[i])) {
          displayedWord += word[i];
        } else {
          displayedWord += '_';
        }
        displayedWord += ' ';
      }

      wordContainer.textContent = displayedWord;
    }

    function drawHangman() {
      var parts = ["head", "body", "l-a", "r-a", "l-l", "r-l"];

      if (attempts <= maxAttempts) {
        var bodyPart = document.getElementById(parts[attempts - 1]);
        bodyPart.style.display = "inline-block";
      }
    }

    function checkGameStatus() {
      if (attempts === maxAttempts) {
        setTimeout(function() {
          alert("Przegrałeś! Hasło to: " + word);
          resetGame();
        }, 200);
      } else if (!document.getElementById("word").textContent.includes("_")) {
        setTimeout(function() {
          alert("Gratulacje! Wygrałeś!");
          resetGame();
        }, 200);
      }
    }

    function resetGame() {
      guessedLetters = [];
      attempts = 0;
      var hangmanParts = document.querySelectorAll("#hangman span");
      for (var i = 0; i < hangmanParts.length; i++) {
        hangmanParts[i].style.display = "none";
      }
      updateWordDisplay();
    }

    updateWordDisplay();