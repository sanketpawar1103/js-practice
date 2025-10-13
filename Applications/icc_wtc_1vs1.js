const choices = ["bat", "ball"];

function designScoreBoard() {
  return "|"+ "-".repeat(20) + "|";
}

function displayscoreBoard(inningNumber, currentBatter, score, targetScore) {
  console.clear();
  console.log(designScoreBoard());

  if (targetScore !== undefined) {
    console.log("|   Target is :", targetScore + "   |");
    console.log(designScoreBoard());
  }

  console.log("|  " + inningNumber + "  |");
  console.log(designScoreBoard());
  console.log(`|${currentBatter} score is : ${score} |`);
  console.log(designScoreBoard());
}

function hitTheBall(inningNumber, score, currentBatter) {
  const botsHit = Math.floor(Math.random() * 7);
  const usersHitInStr = prompt("\n\nHit the shot(0 - 6) :");
  const usersHit = parseInt(usersHitInStr);
  const hits = [botsHit, usersHit];

  return hits;
}

function playMatch(score, inningNumber, currentBatter, targetScore) {
  const hits = hitTheBall(inningNumber, score, currentBatter);
  const isUserBatting = currentBatter === "User  ";

  if (hits[0] === hits[1] || (isUserBatting && hits[1] > 6) ) {
    console.log("Out");
    return score;
  }

  score += currentBatter === "System" ? hits[0] : hits[1];

  if (targetScore <= score) {
    displayscoreBoard(inningNumber, currentBatter, score, targetScore);
    return;
  }

  displayscoreBoard(inningNumber, currentBatter, score, targetScore);

  return playMatch(score, inningNumber, currentBatter, targetScore);
}

function decideWinner(firstBattingTeam, innig1Score, innig2Score) {
  if (innig1Score === innig2Score) {
    return "Match drow";
  }

  return firstBattingTeam += innig1Score > innig2Score ? " won" : " lost";
}

function handleInnings(firstBattingTeam, firstBallingTeam) {
  const firstInningBatter = "Inning of " + firstBattingTeam;
  const secondInning = "Inning of " + firstBallingTeam;

  displayscoreBoard(firstInningBatter, firstBattingTeam, 0);
  const innig1Score = playMatch(0, firstInningBatter, firstBattingTeam);
  displayscoreBoard(secondInning, firstBallingTeam, 0, innig1Score + 1);

  const innig2Score = playMatch(0, secondInning, firstBallingTeam, innig1Score);
  const matchResult = decideWinner(firstBattingTeam, innig1Score, innig2Score);
  console.log(matchResult);

  return;
}

function manageMatch(choice, tossWinnerTeam, tossLosserTeam) {
  if (choice === "bat") {
    return handleInnings(tossWinnerTeam, tossLosserTeam);
  }

  return handleInnings(tossLosserTeam, tossWinnerTeam);
}

function chooseBatOrBall(tossWinner) {
  if (tossWinner === "System") {
    const systemsChoice = Math.floor(Math.random() * 2);
    console.log(`Systems decision is : ${choices[systemsChoice]} first`);
    manageMatch(choices[systemsChoice], tossWinner, "User  ");

    return;
  }

  const usersChoice = prompt("bat or ball :");
  manageMatch(usersChoice, tossWinner, "System");
}

function doesUserWin(playersCall) {
  const tossResult = Math.floor(Math.random() * 2);

  if (playersCall === tossResult) {
    console.log("You Won the toss.!!!");
    return chooseBatOrBall("User  ");
  }

  console.log("You lost the toss.!!!");
  return chooseBatOrBall("System");
}

function tossTime() {
  const playersCallInString = prompt("Enter your Call for toss (0/1) :");
  return parseInt(playersCallInString);
}

function playGame() {
  const playersCall = tossTime();
  doesUserWin(playersCall);
}

playGame();
