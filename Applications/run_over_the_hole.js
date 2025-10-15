function createGritWithPlayer(pos) {
  let mainGrid = [];

  for (let row = 0; row < 6; row++) {
    let innerArray = [];
    for (let col = 0; col < 3; col++) {
      innerArray.push("⬜️");
    }

    mainGrid.push(innerArray);
  }

  mainGrid[pos[0]][pos[1]] = pos[0] === 0 && pos[1] === 0 ? "😔" : "😀";

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

function areSamePosition(pos1, pos2) {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1];
}

function isHole(pos) {
  const holes = [[0, 1], [1, 0], [1, 2], [2, 2], [3, 1], [4, 1], [5, 1]];
  for (let i = 0; i < holes.length; i++) {
    const hole = holes[i];
    if (areSamePosition(pos, hole)) {
      return true;
    }
  }

  return false;
}

function isValidStepCount(noOfStepsStr) {
  const isValidValue = noOfStepsStr === "1" || noOfStepsStr === "2";
  return isValidValue;
}

function readStepsCount(noOfMoves) {
  const noOfStepsStr = prompt("Enter number of steps (1 / 2) :");
  const noOfStepsInt = parseInt(noOfStepsStr);

  if (isValidStepCount(noOfStepsStr)) {
    return noOfStepsInt;
  }

  return main(noOfMoves + 1);
}

function playGame(pos, currentStepNum, noOfMoves) {
  if (currentStepNum >= 17) {
    console.log("Congratulations.\nYou reach the destination");
    return;
  }

  const noOfSteps = readStepsCount(noOfMoves);
  console.clear();
  displayMoves(noOfMoves);
  const updatedPosition = updatePlayersPosition(pos, noOfSteps);

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

function displayMoves(noOfMoves) {
  console.log(`|${"-".repeat(20)}|`);
  console.log("|" + `Number of moves : ${noOfMoves}`.padStart(20) + "|");
  console.log("|" + "-".repeat(20) + "|\n" );
}

function main(noOfMoves = 1, pos = [0, 0]) {
  console.clear();
  displayMoves(noOfMoves);
  manageGrid(pos);
  playGame([0, 0], 0, noOfMoves);
}

main();
