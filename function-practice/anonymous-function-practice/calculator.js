const add = function(operand1, operand2) {
  return `Addition = ${operand1 + operand2}`;
};

const sub = function(operand1, operand2) {
  return `Substraction = ${operand1 - operand2}`;
};

const mul = function(operand1, operand2) {
  return `Multiplication = ${operand1 * operand2}`;
};

const div = function(operand1, operand2) {
  return `Division = ${operand1 / operand2}`;
};

const calculate = function (operation, operand1, operand2) {
  return operation(operand1, operand2);
};

const calculator = function(operator, operand1, operand2) {
  switch (operator) {
    case '+' : return calculate(add, operand1, operand2);
    case '+' : return calculate(add, operand1, operand2);
    case '-' : return calculate(sub, operand1, operand2);
    case '*' : return calculate(mul, operand1, operand2);
    case '/' : return calculate(div, operand1, operand2);
    default : return `Invalid operator : ${operator}`;
  }
};

const main = function() {
  const operand1 = prompt("Enter operand 1 : ");
  const operand2 = prompt("Enter operand 2 : ");
  const operator = prompt("Enter the operator (+, -, *, /) :");

  console.log(calculator(operator, parseInt(operand1), parseInt(operand2)));
};

main();
