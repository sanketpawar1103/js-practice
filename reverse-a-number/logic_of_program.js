const inputNumber = 80;
let reversedInputNumber = 0;
let copyOfAnInputNumber = inputNumber;
let multiplyingReversedNumber;
let lastBitOfCopy;

if(copyOfAnInputNumber !== 0){
  lastBitOfCopy = copyOfAnInputNumber % 10;
  multiplyingReversedNumber = reversedInputNumber * 10
  reversedInputNumber = multiplyingReversedNumber + lastBitOfCopy;
  copyOfAnInputNumber = (copyOfAnInputNumber - lastBitOfCopy) / 10;
}

if(copyOfAnInputNumber !== 0){
  lastBitOfCopy = copyOfAnInputNumber % 10;
  multiplyingReversedNumber = reversedInputNumber * 10
  reversedInputNumber = multiplyingReversedNumber + lastBitOfCopy;
  copyOfAnInputNumber = (copyOfAnInputNumber - lastBitOfCopy) / 10;
}

console.log("Input Number :", inputNumber, "\nReversed Number :", reversedInputNumber);
