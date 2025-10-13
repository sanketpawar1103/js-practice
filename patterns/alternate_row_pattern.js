function chooseChar(row, col) {
  return row % 2 === 0 ? `🟧` : `⬜️`;
}

function createDelay() {
  for (let index = 0; index < 1000000000; index++) {}
}

function displayPattern(row, col) {
  for (let rowIndex = 0; rowIndex <= row; rowIndex++) {
    let line = ``;
    for (let colIndex = 0; colIndex < col; colIndex++) {
      const char = chooseChar(rowIndex, colIndex);
      line += char;
    }
    console.log(line);
    createDelay();
  }

  return;
}

function main(args) {
  const row = args[0] || 5;
  const col = args[1] || 5;
  displayPattern(row, col);

  return;
}

main(Deno.args);
