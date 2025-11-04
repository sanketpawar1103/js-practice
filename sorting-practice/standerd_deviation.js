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

function stdDeviationOf(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index] ** 2;
  }

  return Math.sqrt(sum) / array.length;
}

function displayOutput(array, sortedArray, median, stdDeviation) {
  const saperationLine = '-'.repeat(50);
  let msg = `${saperationLine}\nOriginal array : ${array}\n`;
  msg += `${saperationLine}\nSorted array : ${sortedArray}\n`;
  msg += `${saperationLine}\nMedian : ${median}\n`;
  msg += `${saperationLine}\nStanderd deviation : ${stdDeviation}\n${saperationLine}`;

  console.log(msg);
  console.log(`Benchmark value = ${iterationCount}\n${saperationLine}`);
}

function benchmark(numberOfElements) {
  const array = [];

  for (let term = 0; term < numberOfElements; term++) {
    array.push(createRandomNumber(10));
  }

  const sortedArray = sort(array);
  const median = findMedian(sortedArray);
  const stdDeviation = stdDeviationOf(sortedArray);
  displayOutput(array, sortedArray, median, stdDeviation);
}

benchmark(10);
