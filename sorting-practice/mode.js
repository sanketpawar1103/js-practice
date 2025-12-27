function mode(data) {
  return -1;
}

const composeMessage = function(description, actual, expected, input) {
  let emoji = expected === actual ? "✅" : "❌";

  if (emoji === "✅") {
    console.log(emoji, description);
    return;
  }

  emoji = `${"-".repeat(50)}\n${emoji}\n`;
  let message = emoji + "Description --> " + description;
  message += "\nInput       --> " + input;
  message += "\nExpected    --> " + expected;
  message += "\nActual      --> " + actual;
  console.log(message);
};

const testCase = function(description, data, expected) {
  const actual = mode(data);
  composeMessage(description, actual, expected, data);
};

const testArraysDecode = function() {
  console.log("1. Test empty arrays as an input :\n");
  testCase("Empty array", [], -1);
  console.log("-".repeat(50));
};

const testAll = function() {
  testEmptyArray();
};

testAll();