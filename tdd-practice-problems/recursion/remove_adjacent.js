function firstRepeatingIndex(string, index) {
  if (index >= string.length) {
    return -1;
  }

  if (string[index] === string[index + 1]) {
    return index;
  }

  return firstRepeatingIndex(string, index + 1);
}

function lastRepeatingIndex(string, char, index) {
  if (index >= string.length) {
    return string.length;
  }

  if (string[index] !== char) {
    return index;
  }

  return lastRepeatingIndex(string, char, index + 1);
}

function formString(string, startIndex) {
  if (startIndex === 0) {
    return "";
  }
  return string[startIndex] + 
}

function removeAdjacent(string) {
  const startIndex = firstRepeatingIndex(string, 0);
  if (startIndex === -1) {
    return string;
  }

  const endIndex = lastRepeatingIndex(string, string[startIndex], startIndex + 1);
  console.log(startIndex);
  console.log(endIndex);
}

function composeMessage(description, actualResult, expectedResult) {
  let emoji = expectedResult === actualResult ? "✅" : "❌";
  emoji =  "--------------------------------\n" + emoji + "\n";
  let message = emoji + "Description -->  " + description;
  message = message + "\nExpected Result -->" + expectedResult;
  message = message + "\nActual Result -->" + actualResult;
  console.log(message);
}

function testCase(description, string, expectedResult) {
  const actualResult = removeAdjacent(string);
  composeMessage(description, actualResult, expectedResult);
}

function testAll() {
  testCase("Strings having all unique letters", "abc", "abc");
  testCase("Strings having one repeating letter", "aabc", "abc");
}

testAll();