function createDelay() {
  for (let index = 0; index < 1000000000; index++) {}
}

function displayGrid(lines) {
  for (let index = 0; index < lines.length; index++) {
    console.log(lines[index].join(""));
  }
}

function createGritWithPlayer(pos) {
  let lines = [];

  for (let row = 0; row < 6; row++) {
    let line = [];
    for (let col = 0; col < 3; col++) {
      line.push("⬜️");
    }
    lines.push(line);
  }

  lines[pos[0]][pos[1]] = "🚶‍♂️";
  return lines;
}

function playGame(pos) {
  const lines = createGritWithPlayer(pos);
  displayGrid(lines);
  createDelay();
  pos[1] = (pos[1] + 1) % 3;

  if (pos[1] === 0) {
    pos[0] += 1;
  }

  console.clear();

  if (pos[0] < 6 && pos[1] < 3) {
    playGame([pos[0], pos[1]]);
  }
}

playGame([0, 0]);
