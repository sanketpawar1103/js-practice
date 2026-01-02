function isArray(element) {
  return typeof(element) === "object";
}

function countEven(array, index, evenCount) {
  if (array.length <= index) {
    return evenCount;
  }

  if (isArray(array[index])) {
    return countEven(array[index], 0, evenCount);
  }

  if (array[index] % 2 === 0) {
    evenCount++;
  }

  return countEven(array, index + 1, evenCount);
}

function composeMessage(description, actualResult, expectedResult) {
  let emoji = expectedResult === actualResult ? "✅" : "❌";

  if (emoji === "✅") {
    console.log(emoji, description);
    return;
  }

  emoji =  `\n${"-".repeat(50)}\n` + emoji + "\n";
  let message = emoji + "Description -->" + description;
  message = message + "\nExpected    -->" + expectedResult;
  message = message + "\nActual      -->" + actualResult;
  console.log(message);
}

function testCase(description, array, expectedResult) {
  const actualResult = countEven(array, 0, 0);
  composeMessage(description, actualResult, expectedResult);
}

function allOddNumbers() {
  console.log("-".repeat(30));
  console.log("Array with all odd numbers");
  testCase("One digit odd numbers", [1, 3, 5, 7], 0);
  testCase("Two digit odd numbers", [11, 13, 25, 99, 97], 0);
}

function allEvenNumbers() {
  console.log("-".repeat(30));
  console.log("Array with all even numbers");
  testCase("One digit even numbers", [2, 4, 6, 8], 4);
  testCase("Two digit even numbers", [10, 12, 56, 98, 90], 5);
}

function mixedNumbers() {
  console.log("-".repeat(30));
  console.log("Array with mixed numbers");
  testCase("One digit mixed numbers", [1, 2, 3, 4, 5, 6], 3);
  testCase("Two digit mixed numbers", [11, [13, 14], 13, 16], 1);
}

function testAll() {
  allOddNumbers();
  allEvenNumbers();
  mixedNumbers();
}

testAll();