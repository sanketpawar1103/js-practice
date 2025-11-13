const VOWELS = [1,1,2,2,3];

const frequencyTable = (table, vowel) => {
  if (!(vowel in table)) {
    table[vowel] = 0;
  }

  table[vowel] += 1;
  
  return table;
};

console.log(VOWELS.reduce(frequencyTable, {}));

ty