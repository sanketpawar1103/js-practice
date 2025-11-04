let iterationCount = 0;

function sort(data) {
  const sortedArray = data.slice();
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      iterationCount++;

      if (sortedArray[j] < sortedArray[i]) {
        const crrtSmallerElement = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = crrtSmallerElement;
      }
    }
  }

  return sortedArray;
}

function createRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

function displayOutput(array, sortedArray) {
  console.log(`${array}\n${sortedArray}`);
  console.log(`Benchmark value = ${iterationCount}`);
}

function benchmark(numberOfElements) {
  const array = [];

  for (let term = 0; term < numberOfElements; term++) {
    array.push(createRandomNumber(10));
  }

  const sortedArray = sort(array);

  displayOutput(array, sortedArray);
}

benchmark(10);
