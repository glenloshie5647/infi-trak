/*
Description: Advanced Number Guessing Game
Filename: numberGuessingGame.js
Content: A sophisticated and elaborate number guessing game that involves multiple levels, user interactions, and various game modes.
*/

// Helper function to generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Initialize game settings
let level = 1;
let maxTries = 5;
let score = 0;
let totalScore = 0;
let gameOver = false;

console.log("Welcome to the Number Guessing Game!");

// Level selection
console.log("Select Game Level:");
console.log("1 - Easy");
console.log("2 - Medium");
console.log("3 - Hard");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter game level (1-3): ", (selectedLevel) => {
  level = parseInt(selectedLevel);

  // Game loop
  while (!gameOver) {
    const targetNumber = getRandomNumber(1, level * 10);

    console.log("\n-------------------------");
    console.log(`Level: ${level}`);
    console.log(`Tries Remaining: ${maxTries}`);
    console.log(`Score: ${score}`);
    console.log(`Total Score: ${totalScore}`);
    console.log("-------------------------");

    readline.question("Guess the Number: ", (guess) => {
      const guessedNumber = parseInt(guess);

      if (guessedNumber === targetNumber) {
        score += 10;
        totalScore += score;

        console.log("Congratulations! You guessed the correct number!");

        if (level === 1 && score >= 50) {
          level = 2;
          console.log("Level up! You have unlocked the Medium level.");
        } else if (level === 2 && score >= 100) {
          level = 3;
          console.log("Level up! You have unlocked the Hard level.");
        }

        maxTries = 5;
        score = 0;
      } else {
        maxTries--;
        score -= 2;

        if (maxTries === 0) {
          console.log("Game Over! Max tries reached.");
          gameOver = true;
        } else if (maxTries === 1) {
          console.log(
            `Wrong guess! The number is not ${guessedNumber}. You have ${maxTries} try left.`
          );
        } else {
          console.log(
            `Wrong guess! The number is not ${guessedNumber}. You have ${maxTries} tries left.`
          );
        }
      }

      if (!gameOver) {
        readline.close();
      }
    });
  }
});

readline.on("close", () => {
  console.log("\nThank you for playing the Number Guessing Game!");
  console.log(`Your total score is ${totalScore}.\n`);
  process.exit(0);
});