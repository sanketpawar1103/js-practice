function checkEven(numberToBeChecked) {
  if (numberToBeChecked % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEven = checkEven(11);

console.log(isEven);
