const add = function(operand1, operand2) {
  return operand1 + operand2;
};

const sub = function(operand1, operand2) {
  return operand1 - operand2;
};

const mul = function(operand1, operand2) {
  return operand1 * operand2;
};

const div = function(operand1, operand2) {
  return operand1 / operand2;
}

const calculator = function (operation, operand1, operand2) {
  return operation(operand1, operand2);
};

console.log("Addition = " + calculator(add, 4, 2));
console.log("Substraction = " + calculator(sub, 4, 2));
console.log("Multiplication = " + calculator(mul, 4, 2));
console.log("Division = " + calculator(div, 4, 2));
