const inputNumber = 1;
let factorialOfNumber = 1;
let increamentingNumber = 1; 

while(increamentingNumber <= inputNumber) {
  factorialOfNumber = increamentingNumber * factorialOfNumber;
  increamentingNumber++;
}

console.log("Factorial of ", inputNumber, "is ", factorialOfNumber);
