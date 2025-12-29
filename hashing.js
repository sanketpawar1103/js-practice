const MSG = {
  true: `Element Found `,
  false: `Element not Found `,
};

const searchArrayElements = (array) => {
  for (let term = 20000; term > 0; term--) {
    const isPresent = array.some((each) => each === term);

    // console.log(MSG[isPresent], term);
  }
};

const fillArray = () => {
  const array = [];

  for (let term = 101; term <= 200; term++) {
    array.push(term);
  }

  return array;
};

const operation = {
  true: (element, term) => {
    element[element.length] = term;
    return element;
  },
  false: (element, term) => [element, term],
};

const changeArray = (element, term) => {
  const nestedArr = [...operation[Array.isArray(element)](element, term)];

  return nestedArr;
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
  for (let term = 20000; term > 0; term--) {
    const index = term % 10;
    let isTableElement = false;

    if (array[index] === term) {
      isTableElement = true;
    } else if (Array.isArray(array[index])) {
      isTableElement = array[index].some((each) => each === term);
    }

    // console.log(MSG[isTableElement], term);
  }
};

const main = () => {
  const startTimeOfArrayOperation = performance.now();
  searchArrayElements(fillArray());
  const endTimeOfArrayOperation = performance.now();
  searchTableElement(fillTable());
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
