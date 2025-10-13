function getTileIndex(row, col){
  return (row + col) % 2;
}

function chooseTile(rowIndex, colIndex) {
  const characters = [`🟧` , `⬜️`];

  return characters[getTileIndex(rowIndex, colIndex)] ;
}

function createDelay() {
  for (let index = 0; index < 1000000000; index++) {}
}

function displayPattern(row, col) {
  for (let rowIndex = 0; rowIndex <= row; rowIndex++) {
    let line = ``;
    for (let colIndex = 0; colIndex <= col; colIndex++) {
      const char = chooseTile(rowIndex, colIndex);
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
  displayPattern(parseInt(row), parseInt(col));

  return;
}

main(Deno.args);
