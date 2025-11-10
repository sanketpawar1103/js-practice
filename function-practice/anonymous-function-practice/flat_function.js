const flatFun = (list, flattenedArray) => {
  for (let index = 0; index < list.length; index++) {
    if (!Array.isArray(list[index])) {
      flattenedArray.push(list[index]);
    }

    if (Array.isArray(list[index])) {
      flatFun(list[index], flattenedArray);
    }
  }

  return flattenedArray;
};

function areEqual(array1, array2, index) {
  if (index > array1.length) {
    return true;
  }

  let isEqual = array1.length === array2.length;

  if (Array.isArray(array1[index]) && isEqual) {
    isEqual = areEqual(array1[index], array2[index], 0);
  } else if (array1[index] !== array2[index] && isEqual) {
    return false;
  }

  return isEqual && areEqual(array1, array2, index + 1);
}

function areDeepEqual(array1, array2) {
  if (array1 === undefined || array2 === undefined) {
    return false;
  }

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return array1 === array2;
  }

  return areEqual(array1, array2, 0);
}

function testCase(description, input, expectedResult) {
  const actualResult = flatFun(input, []);
  let emoji = areDeepEqual(expectedResult, actualResult) ? "✅" : "❌";

  if (emoji === "✅") {
    console.log(emoji, description);
    return;
  }

  emoji = `${"-".repeat(50)}\n${emoji}\n`;
  let message = emoji + "Description --> " + description;
  message += "\nInput       --> " + input;
  message += "\nExpected    --> " + expectedResult;
  message += "\nActual      --> " + actualResult;
  console.log(message);
}

const testAll = () => {
  testCase('An empty array', [], []);
  testCase('A linear array', [1, 2, 3], [1, 2, 3]);
  testCase('A nested array', [1, [2], 3], [1, 2, 3]);
  testCase('2 nested arrays', [[1, 2], [3, 4]], [1, 2, 3, 4]);
};

testAll();