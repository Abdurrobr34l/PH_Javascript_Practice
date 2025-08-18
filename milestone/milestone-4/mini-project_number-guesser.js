//* Number Guessing Game
// Computer generates a random number (1–100), user guesses until correct.

let userGuess = [15, 64, 61, 32];

let randomNumber = Math.floor(Math.random() * 100) + 1;

for (let number of userGuess) {

  if (number === randomNumber) {
    console.log("🎉 You guessed it right! Well done");
    break;
  } else if (number < randomNumber) {
    console.log("Too low! Try again");
  } else {
    console.log("Too high! Try again");
  }

}

console.log("The number was:", randomNumber);