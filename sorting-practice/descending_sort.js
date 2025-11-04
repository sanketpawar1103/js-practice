let iterationCount = 0;

function sort(data) {
  const sortedArray = data.slice();

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      iterationCount++;

      if (sortedArray[j] > sortedArray[i]) {
        const crrtMinElement = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = crrtMinElement;
      }
    }
  }

  return sortedArray;
}

const array = [30, 20, 5, 10, 5, 10];

console.log(`Descending Order : \n${array}   |   ${sort(array)}`);
console.log(iterationCount);
