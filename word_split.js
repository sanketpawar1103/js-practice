function isVowel(currentCharacter) {
  const vowelString = "aeiou";
  for (let term = 0; term < vowelString.length; term++) {
    if (currentCharacter === vowelString[term]) {
      return true;
    }
  }
  return false;
}

function splitWord(word, splitedWord) {
  let remainingChars = "";
  let term = 0;
  splitedWord += word[term];

  term++;
  if (isVowel(splitedWord[splitedWord.length - 1])) {
    if (!isVowel(word[term])) {
      splitedWord += word[term];
    } else {
      remainingChars += word[term];
    }
  } else {
     if (isVowel(word[term])) {
      splitedWord += word[term];
    } else {
      remainingChars += word[term];
    }
  } 

  term++;
  if (isVowel(splitedWord[splitedWord.length - 1])) {
    if (!isVowel(word[term])) {
      splitedWord += word[term];
    } else {
      remainingChars += word[term];
    }
  } else {
     if (isVowel(word[term])) {
      splitedWord += word[term];
    } else {
      remainingChars += word[term];
    }
  }

  term++;
  if (isVowel(splitedWord[splitedWord.length - 1])) {
    if (!isVowel(word[term])) {
      splitedWord += word[term];
    } else {
      remainingChars += word[term];
    }
  } else {
     if (isVowel(word[term])) {
      splitedWord += word[term];
    } else {
      remainingChars += word[term];
    }
  }

  if (remainingChars.length > 0) {
    splitedWord += ",";
  }

  console.log("Splited Word = ", splitedWord);
  console.log("Remaining chars = ", remainingChars);

  return splitedWord;
}

function composeMessage(word, actualOutput, expectedOutput) {
  const emoji = actualOutput === expectedOutput ? "✅" : "❌";
  let message = "Input Word = " + word + "  |  ";
  message += "Expected Output = " + expectedOutput + "  |  ";
  message += "Actual Output = " + actualOutput + "  |  ";

  console.log(emoji, message);
}

function testCase(word, expectedOutput) {
  const actualOutput = splitWord(word, "");
  composeMessage(word, actualOutput, expectedOutput);
}

function testAll() {
  testCase("abec", "abec");
  testCase("cabe", "cabe");
  testCase("caex", "cax, e");
}

testAll();
