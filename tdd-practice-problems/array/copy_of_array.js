function copyArray(numberArray) {
  const copyOfNumberArray = [];

  for (let term = 0; term < numberArray.length; term++) {
    copyOfNumberArray[term] = numberArray[term];
  }

  return copyOfNumberArray;
}

const numberArray = [1, 2, [1, 2, 3], 4, 5];
const copyOfNumberArray = copyArray(numberArray);