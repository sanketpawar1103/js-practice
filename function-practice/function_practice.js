function displayNumber(number) {
  return number;
}

const numberToDisplay = displayNumber(10);
console.log(numberToDisplay);

//Addition of 2 number
function performAddition(operand1, operand2) {
  return operand1 + operand2;
}

const resultOfAddition = performAddition(10, 20);
console.log(resultOfAddition);

// Substraction operation
function performSubstraction(operand1, operand2) {
  return operand1 - operand2;
}

const resultOfSubstraction = performSubstraction(10, 20);
console.log(resultOfSubstraction);

// Multiplication operation
function performMultiplication(operand1, operand2) {
  return operand1 * operand2;
}

const resultOfMultiplication = performMultiplication(10, 20);
console.log(resultOfMultiplication);

// Devision operation
function performDivision(operand1, operand2) {
  return operand1 / operand2;
}

const resultOfDivision = performDivision(10, 20);
console.log(resultOfDivision);

// Greatest of 2 numbers and 3 numbers
function greatestOf2Numbers(firstNumber, secondNumber) {
  return (firstNumber > secondNumber) ? firstNumber : secondNumber; 
}

function greatestOf3Numbers(firstNumber, secondNumber, thirdNumber) {
  const firstComparison = greatestOf2Numbers(firstNumber, secondNumber);
  return (firstComparison > secondNumber) ? firstComparison : thirdNumber;
}

const number1 = 10;
const number2 = 10;
const number3 = 30;

const greatestNumber = greatestOf3Numbers(number1, number2, number3);

console.log(greatestNumber);
