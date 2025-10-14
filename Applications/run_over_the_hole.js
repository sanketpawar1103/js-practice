function manageGrid(pos) {
  switch (pos[1]) {
    case 1 : return main();
  }

  const mainGrid = createGritWithPlayer(pos);
  return displayGrid(mainGrid);
}

function displayGrid(lines) {
  for (let index = 0; index < lines.length; index++) {
    console.log(lines[index].join(""));
  }

  return;
}

function readStepsCount() {
  const noOfStepsStr = prompt("Enter number of steps (1 / 2) :");
  const noOfStepsInt = parseInt(noOfStepsStr);

  if (noOfStepsInt > 2) {
    return main();
  }

  return noOfStepsInt;
}

function createGritWithPlayer(pos) {
  let mainGrid = [];

  for (let row = 0; row < 6; row++) {
    let innerArray = [];
    for (let col = 0; col < 3; col++) {
      innerArray.push("⬜️");
    }
    mainGrid.push(innerArray);
  }

  mainGrid[pos[0]][pos[1]] = "🚶‍♂️";
  return mainGrid;
}

function playGame(pos, numberOfMoves) {
  if (numberOfMoves >= 17) {
    return "Congratulations.\nYou reach the";
  }

  const noOfSteps = readStepsCount();
  console.clear();
  pos[1] = pos[1] + noOfSteps;

  if (pos[1] >= 3) {
    pos[0] += 1;
    pos[1] = pos[1] % 3;
  }

  manageGrid(pos);
  return playGame([pos[0], pos[1]], numberOfMoves + noOfSteps);
}

function main() {
  const mainGrid = createGritWithPlayer([0, 0]);
  displayGrid(mainGrid);
  console.log(playGame([0, 0], 1));
  return;
}

main();
