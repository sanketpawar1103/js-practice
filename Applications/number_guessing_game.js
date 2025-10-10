function guessNumber() {
  const gussedString = prompt("Guess a Number :");
  return parseInt(gussedString);
}

function giveHint(randomNumber, guessedNumber) {
  if (guessedNumber > randomNumber) {
    return "Number is smaller";
  }

  return "Number is greater";
}

function play(randomNumber, chances) {
  if (chances === 0) {
    console.log("You lost.!!!\nRandom Number = " + randomNumber);
    return;
  }

  const guessedNumber = guessNumber();
  if (guessedNumber === randomNumber) {
    console.log("You won.!!!");
    return;
  }

  console.log(giveHint(randomNumber, guessedNumber));

  return play(randomNumber, chances - 1)
}

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  play(randomNumber, 5);
}

generateRandomNumber();
