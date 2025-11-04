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
  const sortedArray = sort(array);
  return sortedArray[Math.floor(sortedArray.length / 2)];
}

function meanOf(array) {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }

  const mean = sum / array.length;

  return mean;
}

function stdDeviationOf(array) {
  const mean = meanOf(array);
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    sum += (array[index] - mean) ** 2;
  }

  return Math.sqrt(sum / array.length);
}

function displayOutput(array, stdDeviation) {
  const saperationLine = '-'.repeat(50);
  let msg = `${saperationLine}\nOriginal array : ${array}\n`;
  msg += `${saperationLine}\nMedian : ${findMedian(array)}\n`;
  msg += `${saperationLine}\nStanderd deviation : ${stdDeviation}\n`;

  console.log(msg + saperationLine);
  console.log(`Benchmark value = ${iterationCount}\n${saperationLine}`);
}

function benchmark(numberOfElements) {
  const array = [];

  for (let term = 0; term < numberOfElements; term++) {
    array.push(createRandomNumber(10));
  }

  const stdDeviation = stdDeviationOf(array);
  displayOutput(array, stdDeviation);
}

benchmark(10);
