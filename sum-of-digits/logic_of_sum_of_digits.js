const inputNumber = 9854;
let sumOfDigits = 0;
let copyOfInputNumber = inputNumber;
let lastBitOfCopyNumber;

if(copyOfInputNumber !== 0) {
  lastBitOfCopyNumber = copyOfInputNumber % 10;
  sumOfDigits = sumOfDigits + lastBitOfCopyNumber;
  copyOfInputNumber = ((copyOfInputNumber - lastBitOfCopyNumber) / 10);
}

if(copyOfInputNumber !== 0) {
  lastBitOfCopyNumber = copyOfInputNumber % 10;
  sumOfDigits = sumOfDigits + lastBitOfCopyNumber;
  copyOfInputNumber = ((copyOfInputNumber - lastBitOfCopyNumber) / 10);
}

if(copyOfInputNumber !== 0) {
  lastBitOfCopyNumber = copyOfInputNumber % 10;
  sumOfDigits = sumOfDigits + lastBitOfCopyNumber;
  copyOfInputNumber = ((copyOfInputNumber - lastBitOfCopyNumber) / 10);
}

if(copyOfInputNumber !== 0) {
  lastBitOfCopyNumber = copyOfInputNumber % 10;
  sumOfDigits = sumOfDigits + lastBitOfCopyNumber;
  copyOfInputNumber = ((copyOfInputNumber - lastBitOfCopyNumber) / 10);
}

if(copyOfInputNumber !== 0) {
  lastBitOfCopyNumber = copyOfInputNumber % 10;
  sumOfDigits = sumOfDigits + lastBitOfCopyNumber;
  copyOfInputNumber = ((copyOfInputNumber - lastBitOfCopyNumber) / 10);
}

if(inputNumber === undefined) {
  sumOfDigits = 0;
  console.log("Input : ", inputNumber, "\nSum of digits : ", sumOfDigits);
} else {
  console.log("Input : ", inputNumber, "\nSum of digits : ", sumOfDigits);
}
