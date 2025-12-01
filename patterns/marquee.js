const grid = [];
let [text, row, col, inc] = ["Sanket", 0, 0, 0];
let [text2, row2, col2, dec] = ["Vinay", 2, 35, 35];

const clearGrid = () => {
  for (let index = 0; index < 5; index++) {
    grid[index] = " ".repeat(40).split("");
  }
};

const screen = {
  toLeft: () => {
    col2 = dec;
    for (let index = 0; index < text2.length; index++) {
      grid[row2][col2] = text2[index];
      col2 = (col2 + 1) % 40;
    }
  },

  toRight: () => {
    col = inc;
    for (let index = 0; index < text.length; index++) {
      grid[row][col] = text[index];
      col = (col + 1) % 40;
    }
  },
};

setInterval(() => {
  console.clear();
  clearGrid();
  inc = (inc + 1) % 40;
  dec = dec < 1 ? 40 : dec - 1;
  screen.toRight();
  screen.toLeft();

  for (let index = 0; index < grid.length; index++) {
    grid[index] = grid[index].join("");
  }

  console.log(grid.join("\n"));
}, 100);
