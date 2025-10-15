const choices = ["bat", "ball"];
const tossCalls = ["heads", "tails"];

function designScoreBoard() {
  return "\t|"+ "-".repeat(24) + "|";
}

function displayStr(str, start, end) {
  console.log(`\t|${str.padStart(start).padEnd(end)}|`);
  console.log(designScoreBoard());
}

function createRandomNumber(lastNumber) {
  return Math.floor(Math.random() * lastNumber);
}

function displayScoreBoard(inningNumber, crrtBatter, score, targetScore) {
  console.clear();
  console.log(designScoreBoard());

  if (targetScore !== undefined) {
    displayStr(`Target is : ${targetScore}`, 18, 24);
  }

  displayStr(inningNumber, 18, 24);
  displayStr(`${crrtBatter}'s score is : ${score}`, 20, 24);
}

function createMsgForPlayer(isplayerBatting) {
  const battingMsg = "\n\n\t Hit the shot(0 - 6) :";
  const ballingMsg = "\n\n\t Guess the hit(0 - 6) :";
  const msg = isplayerBatting ? battingMsg : ballingMsg;

  return msg;
}

function hitTheBall(isplayerBatting) {
  const botsHit = createRandomNumber(7);
  const playersHitInStr = prompt(createMsgForPlayer(isplayerBatting));
  const playersHit = parseInt(playersHitInStr);

  return [botsHit, playersHit];
}

function playMatch(score, inningNumber, crrtBatter, targetScore) {
  const isplayerBatting = crrtBatter === "Player";

  const hits = hitTheBall(isplayerBatting);

  if (hits[0] === hits[1] || (isplayerBatting && hits[1] > 6) ) {
    console.log("\t\tOut\n");
    return score;
  }

  score += isplayerBatting ? hits[1] : hits[0];

  if (targetScore <= score) {
    displayScoreBoard(inningNumber, crrtBatter, score, targetScore);
    return;
  }

  displayScoreBoard(inningNumber, crrtBatter, score, targetScore);

  return playMatch(score, inningNumber, crrtBatter, targetScore);
}

function decideWinner(firstBattingTeam, innig1Score, innig2Score) {
  if (innig1Score === innig2Score) {
    return "Match drow";
  }

  return firstBattingTeam += innig1Score > innig2Score ? " won" : " lost";
}

function manageInnings(firstInning, firstBattingTeam, secondInning, firstBallingTeam) {
  const innig1Score = playMatch(0, firstInning, firstBattingTeam);
  displayScoreBoard(secondInning, firstBallingTeam, 0, innig1Score + 1);
  const innig2Score = playMatch(0, secondInning, firstBallingTeam, innig1Score);
  const matchResult = decideWinner(firstBattingTeam, innig1Score, innig2Score);

  return matchResult;
}

function manageGameFlow(firstBattingTeam, firstBallingTeam) {
  const firstInning = `Inning of ${firstBattingTeam}`;
  displayScoreBoard(firstInning, firstBattingTeam, 0);
  const secondInning = `Inning of ${firstBallingTeam}`;

  const matchResult = manageInnings(firstInning, firstBattingTeam, secondInning, firstBallingTeam);

  console.log(`\t|${(matchResult.padStart(15)).padEnd(24)}|`);
  console.log(designScoreBoard());

  return;
}

function manageMatch(choice, tossWinnerTeam, tossLosserTeam) {
  if (choice === "bat") {
    return manageGameFlow(tossWinnerTeam, tossLosserTeam);
  }

  return manageGameFlow(tossLosserTeam, tossWinnerTeam);
}

function chooseBatOrBall(tossWinner) {
  if (tossWinner === "bot") {
    const botsChoice = choices[createRandomNumber(2)];
    console.log(`bots decision is : ${botsChoice} first`);
    manageMatch(botsChoice, tossWinner, "Player");

    return;
  }

  const playersChoice = prompt("\nbat or ball :");

  if (!choices.includes(playersChoice)) {
    console.clear();
    console.log("Invalid choice : bat / ball\n"); 
    return chooseBatOrBall(tossWinner);
  }

  manageMatch(playersChoice, tossWinner, "bot");
}

function doesplayerWin(playersCall) {
  const tossResult = tossCalls[createRandomNumber(2)];

  if (playersCall === tossResult) {
    console.log("You Won the toss.!!!");
    return chooseBatOrBall("Player");
  }

  console.log("Bot won the toss.!!!");
  return chooseBatOrBall("bot");
}

function tossTime() {
  const playersCallInString = prompt("Call for toss :");

  if (!tossCalls.includes(playersCallInString)) {
    console.clear();
    console.log("Invalid call.");
    console.log("Call heads or tails");

    return tossTime();
  }

  return playersCallInString;
}

function playGame() {
  console.clear();
  const playersCall = tossTime();
  return doesplayerWin(playersCall);
}

playGame();
