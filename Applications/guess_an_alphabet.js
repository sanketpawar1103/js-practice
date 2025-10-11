const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

function guessAlphabet() {
  const gussedAlphabet = prompt("Guess a alphabet :");
  return gussedAlphabet[0];
}

function giveHint(indexOfRandomAlphabet, guessedAlphabet) {
  if (ALPHABETS.indexOf(guessedAlphabet) > indexOfRandomAlphabet) {
    return "Alphabet is before";
  }

  return "Alphabet is after";
}

function playGame(indexOfRandomAlphabet, randomAlphabet, chances) {
  if (chances === 0) {
    console.log("You lost.!!!\nRandom Letter = " + randomAlphabet);
    return;
  }

  const guessedAlphabet = guessAlphabet();
  if (guessedAlphabet === randomAlphabet) {
    console.log("You won.!!!");
    return;
  }

  console.log(giveHint(indexOfRandomAlphabet, guessedAlphabet));

  return playGame(indexOfRandomAlphabet, randomAlphabet, chances - 1)
}

function createRandomAlphabet() {
  const indexOfRandomAlphabet = Math.floor(Math.random() * 25);
  const randomAlphabet = ALPHABETS[indexOfRandomAlphabet];

  playGame(indexOfRandomAlphabet, randomAlphabet, 5);
}
