function encodeObject(dataPacket) {
  let encodedObject = "l";

  for (let index = 0; index < dataPacket.length; index++) {
    encodedObject += encode(dataPacket[index]);
  }

  return encodedObject + "e";
}

function encode(dataPacket) {
  switch(typeof dataPacket) {
    case "string" : return `${dataPacket.length}:${dataPacket}`;
    case "number" : return `i${dataPacket}e`;
    case "object" : return encodeObject(dataPacket, 0);
  }
}

function decodeObject(dataPacket) {
  const decodedObject = [];

  while (dataPacket[0] !== 'e') {
    const decodedElement = decode(dataPacket);
    decodedObject.push(decodedElement);
    dataPacket = dataPacket.slice(encode(decodedElement).length);
  }

  return decodedObject;
}

function decode(dataPacket) {
  switch(dataPacket[0]) {
    case "i" : return parseInt(dataPacket.slice(1, dataPacket.indexOf('e')));
    case "l" : return decodeObject(dataPacket.slice(1));
    default :
      const colPosition = dataPacket.indexOf(":") + 1;
      const stringLength = parseInt(dataPacket.slice(0, colPosition - 1));

      return dataPacket.slice(colPosition, colPosition + stringLength);
  }
}

function isArray(array) {
  return typeof array === "object";
}

function areEqual(array1, array2, index) {
  if (index > array1.length) {
    return true;
  }

  let isEqual = array1.length === array2.length;

  if (isArray(array1[index]) && isEqual) {
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

  if (!isArray(array1) || !isArray(array2)) {
    return array1 === array2;
  }

  return areEqual(array1, array2, 0);
}

function composeMessage(description, actualResult, expectedResult, input) {
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

function testCase(description, dataPacket, expected, task) {
  const actual = task === "encode" ? encode(dataPacket) : decode(dataPacket);
  composeMessage(description, actual, expected, dataPacket);
}

function testIntegersEncode() {
  console.log("1. Test only integer values as an input :\n");
  testCase("Simple one digit integer", 5, 'i5e', "encode");
  testCase("Two digit positive integer", 50, 'i50e', "encode");
  testCase("3 digit positive integer", 279, 'i279e', "encode");
  testCase("Input as 0", 0, 'i0e', "encode");
  testCase("-ve integert", -10, 'i-10e', "encode");
  console.log("-".repeat(50));
}

function testStringsEncode() {
  console.log("2. Test only string values as an input :\n");
  testCase("Simple string value", "abc", "3:abc", "encode");
  testCase("String with similar chars", "aaa", "3:aaa", "encode");
  testCase("Empty string", "", "0:", "encode");
  testCase("String with integers", "abc123", "6:abc123", "encode");
  testCase("String with spacial chars", "SpecialChars!@#$%", "17:SpecialChars!@#$%", "encode");
  testCase("Spaced string", "     ", "5:     ", "encode");
  console.log("-".repeat(50));
}

function testArraysEncode() {
  console.log("3. Test only arrays as an input :\n");
  testCase("Array with only one element", ["Sanket"], "l6:Sankete", "encode");
  testCase("Array with integers only", [1, 2, 3], "li1ei2ei3ee", "encode");
  testCase("Array with strins only", ["aa", "bb", "cc"], "l2:aa2:bb2:cce", "encode");
  testCase("Empty array", [], "le", "encode");
  testCase("Empty array with empty string", ["", ""], "l0:0:e", "encode");
  testCase("Array with mixed types", [123, "Hello", 34], "li123e5:Helloi34ee", "encode");
  testCase("Array with confusing elements", ["le", "l", "e", "el", "le"], "l2:le1:l1:e2:el2:lee", "encode");
  testCase("Test nested arrays", [123, "hi", []], "li123e2:hilee", "encode");
  testCase("Confusing nested arrays", [1, "", [[[1, 2, "hi"]]]], "li1e0:llli1ei2e2:hieeee", "encode");
  console.log("-".repeat(50));
}

function testEncode() {
  console.log(`${"-".repeat(50)}`);
  console.log("Test cases for bencode encoding :");
  console.log(`${"-".repeat(50)}`);
  testIntegersEncode();
  testStringsEncode();
  testArraysEncode();
}

function testIntegersDecode() {
  console.log("1. Test only integer values as an input :\n");
  testCase("Simple one digit integer", 'i5e', 5, 'decode');
  testCase("Two digit positive integer", 'i50e', 50, 'decode');
  testCase("3 digit positive integer", 'i279e', 279, 'decode');
  testCase("Input as 0", 'i0e', 0, 'decode');
  testCase("-ve integert", 'i-10e', -10, 'decode');
  console.log("-".repeat(50));
}

function testStringsDecode() {
  console.log("2. Test only string values as an input :\n");
  testCase("Simple string value", "3:abc", "abc", "decode");
  testCase("String with similar chars", "3:aaa", "aaa", "decode");
  testCase("Empty string", "0:", "", "decode");
  testCase("String with integers", "6:abc123", "abc123", "decode");
  testCase("String with spacial chars", "17:SpecialChars!@#$%", "SpecialChars!@#$%", "decode");
  testCase("Spaced string", "5:     ", "     ", "decode");
  console.log("-".repeat(50));
}

function testArraysDecode() {
  console.log("3. Test only arrays as an input :\n");
  testCase("Array with only one element", "l6:Sankete", ["Sanket"], "decode");
  testCase("Array with integers only", "li1ei2ei3ee", [1, 2, 3], "decode");
  testCase("Array with strins only", "l2:aa2:bb2:cce", ["aa", "bb", "cc"], "decode");
  testCase("Empty array", "le", [], "decode");
  testCase("Empty array with empty string", "l0:0:e", ["", ""], "decode");
  testCase("Array with mixed types", "li123e5:Helloi34ee", [123, "Hello", 34], "decode");
  testCase("Array with confusing elements", "l2:le1:l1:e2:el2:lee", ["le", "l", "e", "el", "le"], "decode");
  testCase("Test nested arrays", "li123e2:hilee", [123, "hi", []], "decode");
  console.log("-".repeat(50));
}

function testDecode() {
  console.log("Test cases for bencode decoding :");
  console.log(`${"-".repeat(50)}`);
  testIntegersDecode();
  testStringsDecode();
  testArraysDecode();
}

function testAll() {
  testEncode();
  testDecode();
}

testAll();
