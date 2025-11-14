console.log("Selection sort..");

const swapper = (array, i, j) => {
  const numHolder = array[i];
  array[i] = array[j];
  array[j] = numHolder;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        swapper(array, i, j);
      }
    }
  }

  return array;
};

console.log(selectionSort([3, 5, 1, 6, 2]));