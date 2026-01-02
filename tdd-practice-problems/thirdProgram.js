let factorial = 1; 
let number = 5;
let numberOfIteration = 1;

while(numberOfIteration <= number){
  factorial = factorial * numberOfIteration;
  console.log("Factorial of ", numberOfIteration, " is ", factorial);
  numberOfIteration = numberOfIteration + 1;
}

// let number = 18;
// let numberCopy = Number;
// let binaryNumber = "";
// let bit;

// while(numberCopy <= 1){
//   bit = numberCopy % 2;
//   binaryNumber = binaryNumber + bit;
//   if(numberCopy % 2 !== 0)
//   {
//     console.log("If");
//     numberCopy = (numberCopy / 2) - 0.5;
//   } else {
//     console.log("else");
//     numberCopy = numberCopy / 2;
//   }
//   console.log("Hi")
// }

// console.log("Binary version of ", number, "is ", binaryNumber);