const inputNumber = 8237459;
let reversedInputNumber = 0;
let copyOfAnInputNumber = inputNumber;
let multiplyingReversedNumber;
let lastBitOfCopy;

while(copyOfAnInputNumber !== 0){
  lastBitOfCopy = copyOfAnInputNumber % 10;
  multiplyingReversedNumber = reversedInputNumber * 10
  reversedInputNumber = multiplyingReversedNumber + lastBitOfCopy;
  copyOfAnInputNumber = (copyOfAnInputNumber - lastBitOfCopy) / 10;
}

console.log("Input Number :", inputNumber, "\nReversed Number :", reversedInputNumber);
