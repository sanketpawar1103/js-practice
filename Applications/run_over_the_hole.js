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

function displayGrid(mainGrid) {
  for (let index = 0; index < mainGrid.length; index++) {
    console.log(mainGrid[index].join(""));
  }
}

function manageGrid(pos) {
  const mainGrid = createGritWithPlayer(pos);
  displayGrid(mainGrid);
}

function isHole(pos) {
  switch (pos[1]) {
    case 0: return false;
    case 1: return true;
    case 2: return false;
  }
}

function readStepsCount(noOfMoves) {
  const noOfStepsStr = prompt("Enter number of steps (1 / 2) :");
  const noOfStepsInt = parseInt(noOfStepsStr);

  if (noOfStepsInt > 2 || noOfStepsInt === undefined) {
    return main(noOfMoves + 1);
  }

  return noOfStepsInt;
}

function playGame(pos, currentStepNum, noOfMoves) {
  if (currentStepNum >= 17) {
    return "Congratulations.\nYou reach the";
  }

  const noOfSteps = readStepsCount(noOfMoves);
  console.clear();
  console.log(`Number of moves : ${noOfMoves}`);
  const updatedPosition = updatePlayersPosition (pos, noOfSteps);

  if (isHole(updatedPosition)) {
    return main(noOfMoves + 1);
  }

  manageGrid(updatedPosition);
  return playGame(updatedPosition, currentStepNum + noOfSteps, noOfMoves + 1);
}

function updatePlayersPosition(pos, noOfSteps) {
  pos[1] = pos[1] + noOfSteps;

  if (pos[1] >= 3) {
    pos[0] += 1;
    pos[1] = pos[1] % 3;
  }

  return pos;
}

function main(noOfMoves = 1, pos = [0, 0]) {
  console.clear();
  manageGrid(pos);
  console.log(playGame([0, 0], 1, noOfMoves));
  return;
}

main();
