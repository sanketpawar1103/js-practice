const VOWELS = ['a', 'e', 'i', 'a', 'i', 'o', 'a', 'u'];

const reducer = (freqTable, vowel) => {
  const index = freqTable.findIndex(set => set[1] === vowel);

  if (index === -1) {
    freqTable.push([1, vowel]);
    return freqTable;
  }

  freqTable[index][0] += 1;
  return freqTable;
}

console.log(VOWELS.reduce(reducer, []));
