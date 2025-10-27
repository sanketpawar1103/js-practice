function encode(dataPacket) {
  const encodedInteger = `i${dataPacket}e`;
  return encodedInteger;
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

function testInteger() {
  console.log(`\n${"-".repeat(50)}`);
  console.log("Test only integer values as an input :\n");
  testCase("Simple one digit integer", 5, 'i5e');
  testCase("Two digit positive integer", 50, 'i50e');
  testCase("3 digit positive integer", 279, 'i279e');
  testCase("Input as 0", 0, 'i0e');
  testCase("-ve integert", -10, 'i-10e');
  console.log("-".repeat(50));
}

function testAll() {
  testInteger();
}

testAll();
