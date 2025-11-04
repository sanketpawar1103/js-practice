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

function findMedian(array) {
  return array[Math.floor(array.length / 2)];
}

function displayOutput(array, sortedArray, median) {
  const saperationLine = '-'.repeat(50);
  let msg = `${saperationLine}\nOriginal array : ${array}\n`;
  msg += `${saperationLine}\nSorted array : ${sortedArray}\n`;
  msg += `${saperationLine}\nMedian : ${median}`;
  console.log(msg);
  console.log(`${saperationLine}Benchmark value = ${iterationCount}`);
}

function benchmark(numberOfElements) {
  const array = [];

  for (let term = 0; term < numberOfElements; term++) {
    array.push(createRandomNumber(10));
  }

  const sortedArray = sort(array);
  const median = findMedian(sortedArray);
  displayOutput(array, sortedArray, median);
}

benchmark(10);
