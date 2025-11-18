const isInBetween = (start, end) => (target) =>
  target >= start && target <= end;

const isInBetween10And20 = isInBetween(10, 20);

console.log(isInBetween10And20(10));
console.log(isInBetween10And20(15));
console.log(isInBetween10And20(100));
console.log(isInBetween10And20(19.9999));
console.log(isInBetween10And20(13));
console.log(isInBetween10And20(20.000000009));