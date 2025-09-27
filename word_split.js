function splitWord(word) {
  return word;
}

function composeMessage(word, actualOutput, expectedOutput) {
  const emoji = actualOutput === expectedOutput ? "✅" : "❌";
  let message = "Input Word = " + word + "  |  ";
  message += "Expected Output = " + expectedOutput + "  |  ";
  message += "Actual Output = " + actualOutput + "  |  ";

  console.log(emoji, message);
}

function testCase(word, expectedOutput) {
  const actualOutput = splitWord(word);
  composeMessage(word, actualOutput, expectedOutput);
}

function testAll() {
  testCase("abec", "abec");
  testCase("abeca", "abeca");
  testCase("abecad", "abecad");
  testCase("aabc", "abac");
}

testAll();
