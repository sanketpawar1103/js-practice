function reverse(string, lastIndex) {
  if (lastIndex < 0) {
    return "";
  }

  return string[lastIndex] + reverse(string, lastIndex - 1);
}

function reverseAString(string) {
  return reverse(string, string.length - 1);
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
  const actualResult = reverseAString(string);
  composeMessage(description, actualResult, expectedResult);
}

function testAll() {
  testCase("Strings having same letter", "aaa", "aaa");
  testCase("Palindrome strings", "sasas", "sasas");
  testCase("Palindrome strings", "denoned", "denoned");
  testCase("Normal string having different letters", "abc", "cba");
  testCase("String with spaces", "a b c", "c b a");
  testCase("Empty string", "", "");
  testCase("String without alphabates", "123@", "@321");
}

testAll();