const grid = [
  " ".repeat(40).split(""),
  " ".repeat(40).split(""),
  " ".repeat(40).split(""),
  " ".repeat(40).split(""),
  " ".repeat(40).split(""),
  " ".repeat(40).split(""),
  " ".repeat(40).split(""),
];

let [row, col] = [0, 0];
const text = "Sanket";

const displayGrid = (row, text) => {
  const msg = [];

  for (let term = text.length; term < 40 - text.length; term++) {
    msg[term] = grid[row][term];
  }

  console.log(msg.join(""));
};

setInterval(() => {
  console.clear();
  grid[row][col] = text;
  grid[row] = grid[row].join("").split("");
  displayGrid(row, text);
  col += col === (40 - text.length) ? -40 : 1;

  grid[row] = " ".repeat(40).split("");
}, 200);
