const inputNumber = 8743;
let sumOfDigits = 0;
let copyOfInputNumber = inputNumber;
let lastBitOfCopyNumber;

if(inputNumber !== undefined) {

  while(copyOfInputNumber !== 0) {
    lastBitOfCopyNumber = copyOfInputNumber % 10;
    sumOfDigits = sumOfDigits + lastBitOfCopyNumber;
    copyOfInputNumber = ((copyOfInputNumber - lastBitOfCopyNumber) / 10);
  }

}

console.log("Input : ", inputNumber, "\nSum of digits : ", sumOfDigits);
