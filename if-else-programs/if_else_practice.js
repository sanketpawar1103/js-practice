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

// Multiple Expressions in an If consition 
if( true <= (false !== true)) {
  console.log("In an If block")
} else {
  console.log("In an Else block")
}

// Using ',' to saperate conditions in an if condition 
const x = 10;
const y = 20;

if( x === 10, y !== 20){
  console.log("I am in an If block");
} else {
  console.log("I am in an Else block");
}
