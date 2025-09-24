function calculateNextTerm(previousTermInFunction, currentTermInFunction) {
  const nextTermInFunction = previousTermInFunction + currentTermInFunction;
  return nextTermInFunction;
}

let previousTerm = 0;
let currentTerm = 1;
const numberToBeChecked = 13;
let isPresent = false;

while (previousTerm <= numberToBeChecked && !isPresent) {
  isPresent = (previousTerm === numberToBeChecked) ? true : false;

  const nextTerm = calculateNextTerm(previousTerm, currentTerm);
  previousTerm = currentTerm;
  currentTerm = nextTerm;
}

const resultString = isPresent ? " is present" : " is not present";

console.log(numberToBeChecked, resultString);

