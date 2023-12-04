document.addEventListener('DOMContentLoaded', () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessesRemaining = 10;
  const submitButton = document.getElementById('submitGuess');
  const restartButton = document.getElementById('restartGame');
  const resultDiv = document.getElementById('result');
  const guessesDiv = document.getElementById('guessesRemaining');
  updateGuessesRemaining();

  submitButton.addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('guess').value);
    if (userGuess === randomNumber) {
      resultDiv.innerHTML =
        '<p class="text-success">Congratulations! You guessed the right number.</p>';
      submitButton.disabled = true;
    } else if (userGuess < randomNumber) {
      resultDiv.innerHTML = '<p class="text-primary">Too low. Try again!</p>';
      guessesRemaining--;
    } else {
      resultDiv.innerHTML = '<p class="text-primary">Too high. Try again!</p>';
      guessesRemaining--;
    }
    updateGuessesRemaining();

    if (guessesRemaining === 0) {
      resultDiv.innerHTML +=
        '<p class="text-danger">Game over. The number was ' +
        randomNumber +
        '.</p>';
      submitButton.disabled = true;
    }
  });

  restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesRemaining = 10;
    submitButton.disabled = false;
    document.getElementById('guess').value = '';
    resultDiv.innerHTML = '';
    updateGuessesRemaining();
  });

  function updateGuessesRemaining() {
    guessesDiv.innerHTML = 'Guesses remaining: ' + guessesRemaining;
  }
});
