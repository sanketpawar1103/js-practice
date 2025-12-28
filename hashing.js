const searchArrayElements = (array) => {
  for (let term = 1000; term > 0; term--) {
    let index = 0;

    while (array[index] !== term && index < array.length) {
      index++;
    }

    let msg = `Element not Found : ${term}`;

    if (index < array.length) {
      msg = `Element Found : ${term}`;
    }

    console.log(msg);
  }
};

const fillArray = () => {
  const array = [];

  for (let term = 101; term <= 200; term++) {
    array.push(term);
  }

  return array;
};

const fillTable = () => {
  const array = [];

  for (let term = 101; term <= 200; term++) {
    array[term % 100] = term;
  }

  return array;
};

const searchTableElement = (array) => {
  for (let term = 1000; term > 0; term--) {
    let msg = `Element not Found : ${term}`;
    const index = term % 100;

    if (term === array[index]) {
      msg = `Element Found : ${term}`;
    }

    console.log(msg);
  }
};

const main = () => {
  const startTimeOfArrayOperation = performance.now();
  const filledArray = fillArray();
  searchArrayElements(filledArray);
  const endTimeOfArrayOperation = performance.now();
  const filledTable = fillTable();
  searchTableElement(filledTable);
  const endTimeOfTableOperation = performance.now();

  console.log(
    `Time taken by linear array = ${
      endTimeOfArrayOperation - startTimeOfArrayOperation
    }\nTime taken by hash table = ${
      endTimeOfTableOperation - endTimeOfArrayOperation
    }`,
  );
};

main();
