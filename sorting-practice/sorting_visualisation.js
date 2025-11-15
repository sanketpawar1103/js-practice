let iterationCount = 0;

const fakeDelay = () => {
  for (let index = 0; index < 2000000000; index++) {}
};

const swapper = (array, i, j) => {
  const numHolder = array[i];
  array[i] = array[j];
  array[j] = numHolder;
};

const visualiser = (array, i, j, technique) => {
  console.log(`\t|${"-".repeat(25)}|`);
  console.log(`\t|${technique.padStart(22).padEnd(25)}|`);
  console.log(`\t|${"-".repeat(25)}|\n`);

  for (let index = 0; index < array.length; index++) {
    const block = index === i || index === j ? "🟧" : "⬜️";
    console.log(
      `${(array[index] + "").padEnd(3) + block.repeat(array[index])}`,
    );
  }
};

const animate = (array, i, j, msg) => {
  visualiser(array, i, j, msg);
  fakeDelay();
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        swapper(array, i, j);
      }

      console.clear();
      animate(array, i, j, 'Selection sort...');
    }
  }

  return array;
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        swapper(array, i, j);
      }

      console.clear();
      animate(array, i, j, 'Bubble sort...');
    }
  }
};

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    console.clear();
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && key > array[j]) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = key;
    animate(array, i, j, "Insertion sort...");
  }
};

const randomArray = () => {
  const array = [];

  for (let index = 0; index < 10; index++) {
    array.push(Math.floor(Math.random() * 30));
  }

  return array;
};

const selectVisualiser = (choice) => {
  switch (choice) {
    case "1":
      return selectionSort;
    case "2":
      return bubbleSort;
    case "3":
      return insertionSort;
    default:
      console.log("Invalid Choice");
      return main;
  }
};

const main = () => {
  const msg = " 1. Selection sort\n 2. Bubble sort\n 3. Insertion sort\n";
  const choice = prompt(msg);
  const sortingFun = selectVisualiser(choice);
  return sortingFun(randomArray());
};

main();
