function isVowel(currentCharacter) {
  const vowelString = "aeiou";

  for (let term = 0; term < vowelString.length; term++) {
    if (currentCharacter === vowelString[term]) {
      return true;
    }
  }

  return false;
}

function continueProcess(remainingChars, splitedWord) {
  if (remainingChars.length) {
    splitedWord += ",";
    splitedWord = splitWord(remainingChars, splitedWord);
  }

  return splitedWord;
}

function splitWord(word, splitedWord) {
  let remainingChars = "";
  splitedWord += word[0];

  for (let term = 1; term < word.length; term++) {
    if (isVowel(splitedWord[splitedWord.length - 1]) ) {
      !isVowel(word[term]) ? splitedWord += word[term] : remainingChars += word[term];  
    } else {
      isVowel(word[term]) ? splitedWord += word[term] : remainingChars += word[term];
    } 
  }

  splitedWord = continueProcess(remainingChars, splitedWord);
  
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
  testCase("caex", "cax,e");
  testCase("thoughtworks", "togor,huh,t,w,k,s");
  testCase("tree", "te,re");
  testCase("aaabbbaaa", "aba,aba,aba");
}

testAll(); 