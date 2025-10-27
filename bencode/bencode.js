function encode(dataPacket) {
  switch(typeof dataPacket) {
    case "string": return `${dataPacket.length}:${dataPacket}`;
    case "number": return `i${dataPacket}e`;
  }
}

function composeMessage(description, actualResult, expectedResult, input) {
  let emoji = expectedResult === actualResult ? "✅" : "❌";

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

function testCase(description, dataPacket, expected) {
  const actual = encode(dataPacket);
  composeMessage(description, actual, expected, dataPacket);
}

function testIntegers() {
  console.log("Test only integer values as an input :\n");
  testCase("Simple one digit integer", 5, 'i5e');
  testCase("Two digit positive integer", 50, 'i50e');
  testCase("3 digit positive integer", 279, 'i279e');
  testCase("Input as 0", 0, 'i0e');
  testCase("-ve integert", -10, 'i-10e');
  console.log("-".repeat(50));
}

function testStrings() {
  console.log("Test only string values as an input :\n");
  testCase("Simple string value", "abc", "3:abc");
  testCase("String with similar chars", "aaa", "3:aaa");
  testCase("Empty string", "", "0:");
  testCase("String with integers", "abc123", "6:abc123");
  testCase("String with spacial chars", "SpecialChars!@#$%", "17:SpecialChars!@#$%");
  testCase("Spaced string", "     ", "5:     ");
  console.log("-".repeat(50));
}

function testAll() {
  console.log(`\n${"-".repeat(50)}`);
  testIntegers();
  testStrings();
}

testAll();
