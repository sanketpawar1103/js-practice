const vovelString = "aeiou";
//const consonantString = "bcdfghjklmnpqrstvwxyz";

function formWord(word, term) {
  let newWord = "";
  for (let index = term + 1; index < word.length; index++) {
    newWord += word[index];
  }

  return newWord;
}

function isVovel(currentCharacter) {
  for (let term = 0; term < vovelString.length; term++) {
    if (currentCharacter === vovelString[term]) {
      return true;
    }
  }
  return false;
}

// function findNextConsonant(word, term) {
//   const swappingIndex = term + 1;

//   for (let index = term + 1; index < word.length; index++) {
//     if (!isVovel(word[index])) {
//       let character = word[index]; 
//       word[index] = word[swappingIndex];
//       word[index] = character;
//       return word;
//     }
//   }

//   const splitedWord = word[term] + "," + formWord(word, term);
//   return splitedWord;
// }

// function findNextVowel(word, term) {
//   const swappingIndex = term + 1;

//   for (let index = term + 1; index < word.length; index++) {
//     if (isVovel(word[index])) {
//       let character = word[index]; 
//       word[index] = word[swappingIndex];
//       word[index] = character;
//       return word;
//     }
//   }

//   const splitedWord = word[term] + "," + formWord(word, term);
//   return splitedWord;
// }

function splitWord(word) {
  let splitedWord = word[0];

  for (let term = 0; term < word.length; term++) {
    if (isVovel(splitedWord[term])) {
      splitedWord = findNextConsonant(word, term);
    } else {
      splitedWord = findNextVowel(word, term);
    }
  }

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
  const actualOutput = splitWord(word);
  composeMessage(word, actualOutput, expectedOutput);
}

function testAll() {
  testCase("abec", "abec");
  testCase("cabe", "cabe");
  testCase("aab", "aba");
}

testAll();



// 1. I will first assign variables as splitedWord and remainingChars which holds result string and unused characters respectively.
// 2. I will store first letter of word in splitedWord as splitedWord[splitedWord.length] = word[0];
// 3. If latest letter i.e. splitedWord[splitedWord.length] is vowel, then go to the step - 4 else go to the step - 5.
// 4. Call function findNextConsonant(word, splitedWord, remainingChars);
// 5. Call function findNextVowel(word, splitedWord, remainingChars);

// 6. function findNextConsonent(word, splitedWord, remainingChars);
// -> It will iterate over word, if we get next consonent then it will store it in splitedWord and agian call findNextVowel(word, splitedWord, remainingChars) or it will store it in remainingChars.
