const inputNumber = 89;
let sumOfDigits = 0;
let copyOfInputNumber = inputNumber;

sumOfDigits = sumOfDigits + (copyOfInputNumber % 10);
copyOfInputNumber = ((copyOfInputNumber - sumOfDigits) / 10);

sumOfDigits = sumOfDigits + (copyOfInputNumber % 10);
copyOfInputNumber = ((copyOfInputNumber - sumOfDigits) / 10);

console.log("Input : ", inputNumber, "\nSum of digits : ", sumOfDigits);
