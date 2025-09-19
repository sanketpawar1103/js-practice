// Code for Checking age and giving permission 
const age = 100;

if (age >= 18) {
  console.log("You can Drive");
  console.log("You can Vote");
} else {
  console.log("You can't Drive");
  console.log("You can't Drive");
}


// Checking the flow of code based on decisions
if(true) {
  console.log("I am inside an If block ");
} else {
  console.log("I am inside an Else block");
}

console.log("I am outside an If/Else block");


// Use of Ternary Operator
const ageOfPerson = 50; 
const result = (ageOfPerson >= 18) ? "Can Vote and Drive": "Can't Vote and Drive";
console.log(result);
