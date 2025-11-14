console.log("Selection sort..");

const fakeDelay = () => {
  for (let index = 0; index < 2000000000; index++) {}
};

const swapper = (array, i, j) => {
  const numHolder = array[i];
  array[i] = array[j];
  array[j] = numHolder;
};

const visualiser = (array, i, j) => {
  for (let index = 0; index < array.length; index++) {
    const block = index === i || index === j ? "🟧" : "⬜️";
    console.log(
      `${(array[index] + "").padEnd(3) + block.repeat(array[index])}`,
    );
  }
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.clear();

      if (array[i] > array[j]) {
        swapper(array, i, j);
      }

      visualiser(array, i, j);
      fakeDelay();
    }
  }

  return array;
};

const randomArray = () => {
  const array = [];

  for (let index = 0; index < 10; index++) {
    array.push(Math.floor(Math.random() * 30));
  }

  return array;
};

selectionSort(randomArray());
