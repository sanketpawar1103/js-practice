const VOWELS = ['a', 'e', 'a', 'e', 'i', 'o', 'o', 'u'];

const frequency = (table, vowel) => {
  if (!(vowel in table)) {
    table[vowel] = 0;
  }

  table[vowel]++;

  return table;
};

console.log(VOWELS.reduce(frequency, {}));