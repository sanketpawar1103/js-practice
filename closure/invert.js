const isInBetween = (start, end) => (target) =>
  target >= start && target <= end;

const invert = (fn) => (val) => !fn(val);

const isNotInRange = invert(isInBetween(5, 20));

console.log(isNotInRange(12));
console.log(isNotInRange(100));
console.log(isNotInRange(5.00001));
console.log(isNotInRange(19.0009));
console.log(isNotInRange(10));
console.log(isNotInRange(15));
console.log(isNotInRange(4.999999));
