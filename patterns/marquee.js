const [grid, spaces] = [[], " ".repeat(40).split("")];
let [text, row, col, inc] = ["Sanket", 0, 0, 0];

const clearGrid = () => {
  for (let index = 0; index < 5; index++) {
    grid.push(spaces);
  }
};

const screen = () => {
  col = inc;
  for (let index = 0; index < text.length; index++) {
    grid[row][col] = text[index];
    col = (col + 1) % 40;
  }

  console.log(grid[row].join(""));
  grid[row] = " ".repeat(40).split("");
};

setInterval(() => {
  console.clear();
  clearGrid();
  inc = (inc + 1) % 40;
  screen();
}, 100);
