const MSG = {
  true: `Element Found `,
  false: `Element not Found `,
};

const searchArrayElements = (array) => {
  for (let term = 200; term > 90; term--) {
    let index = 0;

    while (array[index] !== term && index < array.length) {
      index++;
    }

    console.log(MSG[index < array.length], term);
  }
};

const fillArray = () => {
  const array = [];

  for (let term = 101; term <= 200; term++) {
    array.push(term);
  }

  return array;
};

const changeArray = (element, term) => {
  if (Array.isArray(element)) {
    element[element.length] = term;
  } else {
    element = [element, term];
  }

  return element;
};

const isPresent = {
  true: (element, term) => changeArray(element, term),
  false: (_element, term) => term,
};

const fillTable = () => {
  const array = [];

  for (let term = 101; term <= 200; term++) {
    const address = term % 10;
    const isNotUndefined = array[address] !== undefined;

    array[address] = isPresent[isNotUndefined](array[address], term);
  }

  return array;
};

const searchTableElement = (array) => {
  for (let term = 200; term > 90; term--) {
    const index = term % 10;
    let isTableElement = false;

    if (Array.isArray(array[index])) {
      isTableElement = array[index].some((each) => each === term);
    } else if (array[index] === term) {
      isTableElement = true;
    }

    console.log(MSG[isTableElement] + term);
  }
};

const main = () => {
  const startTimeOfArrayOperation = performance.now();
  const filledArray = fillArray();
  console.log(filledArray);
  searchArrayElements(filledArray);
  const endTimeOfArrayOperation = performance.now();
  const filledTable = fillTable();
  console.log(filledTable);
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
