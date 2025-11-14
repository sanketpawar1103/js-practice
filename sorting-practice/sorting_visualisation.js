console.log("Selection sort..");

const fakeDelay = () => {
  for (let index = 0; index < 1800000000; index++) {}
};

const swapper = (array, i, j) => {
  const numHolder = array[i];
  array[i] = array[j];
  array[j] = numHolder;
};

const visualiser = (array) => {
  for (let index = 0; index < array.length; index++) {
    console.log(`${array[index] + "⬜️".repeat(array[index])}`);
  }
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.clear();

      if (array[i] > array[j]) {
        swapper(array, i, j);
      }

      visualiser(array);
      fakeDelay();
    }
  }

  return array;
};

console.log(selectionSort([3, 5, 1, 6]));