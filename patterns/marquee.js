const grid = [];

const createGrid = () => {
  console.clear();
  for (let index = 0; index < 5; index++) {
    grid[index] = " ".repeat(40).split("");
  }
};

const screen = {
  toLeft: (info) => {
    info.change = info.change < 1 ? 40 : info.change - 1;
    let col = info.change;
    for (let index = 0; index < info.text.length; index++) {
      grid[info.row][col] = info.text[index];
      col = (col + 1) % 40;
    }
  },

  toRight: (info) => {
    info.change = (info.change + 1) % 40;
    let col = info.change;
    for (let index = 0; index < info.text.length; index++) {
      grid[info.row][col] = info.text[index];
      col = (col + 1) % 40;
    }
  },
};

const data = [
  { text: "Sanket", row: 0, change: 0, animate: screen.toRight },
  { text: "Pawar", row: 3, change: 35, animate: screen.toLeft },
];


setInterval(() => {
  createGrid();

  data.forEach(info => {
    info.animate(info);
  });

  for (let index = 0; index < grid.length; index++) {
    grid[index] = grid[index].join("");
  }

  console.log(grid.join("\n"));
}, 100);
