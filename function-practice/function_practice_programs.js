let isLeapYear = false;

if ((year % 4 === 0) && (year % 100 !== 0)) {
  isLeapYear = true;
} else if (year % 400 === 0) {
  isLeapYear = true;
}

console.log(isLeapYear);
