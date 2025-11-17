function adder(operand1) {
  return function (operand2) {
    return operand1 + operand2;
  };
}

const tenAdder = adder(10);

console.log(`Ten Adder : ${[10, 20, 30].map(tenAdder)}`);
