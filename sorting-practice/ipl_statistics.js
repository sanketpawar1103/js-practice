const LISTOFTEAMS = [
            [['CSK'], [158, 146, 176, 158, 103, 168, 201, 187, 179, 189, 172, 230, 146, 158]],
            [['DC'], [211, 166, 183, 169, 193, 188, 203, 121, 188, 199, 127, 208, 149, 183]],
            [['GT'], [232, 196, 170, 153, 217, 180, 204, 147, 205, 180, 147, 202, 208, 147]],
            [['KKR'], [174, 153, 116, 200, 234, 107, 179, 120, 168, 95, 134, 171, 168, 174]],
            [['LSG'], [209, 193, 171, 203, 238, 186, 166, 205, 180, 169, 235, 178, 227, 227]],
            [['MI'], [155, 160, 121, 191, 209, 205, 166, 180, 155, 209, 193, 228, 203, 203]],
            [['PBKS'], [243, 177, 155, 219, 245, 111, 98, 187, 101, 206, 219, 184, 207, 184, 101, 207, 184]],
            [['RR'], [242, 151, 182, 205, 159, 173, 188, 178, 209, 188, 177, 194, 196, 182]],
            [['RCB'], [177, 196, 169, 221, 163, 175, 95, 230, 190, 106, 230, 190, 213, 190]],
            [['SRH'], [286, 190, 163, 152, 120, 247, 162, 231, 206, 178, 167, 278, 166, 162]]
            ];

function sort(data) {
  const sortedArray = data;
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {

      if (sortedArray[j] < sortedArray[i]) {
        const smallerElement = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = smallerElement;
      }
    }
  }

  return sortedArray;
}

function findMedian(teamPerformance) {
  const sortedArray = sort(teamPerformance);

  return sortedArray[Math.floor(sortedArray.length / 2)];
}

function meanOf(teamsPerformance) {
  let sum = 0;

  for (let index = 0; index < teamsPerformance.length; index++) {
    sum += teamsPerformance[index];
  }

  return sum / teamsPerformance.length;
}

function stdDeviationOf(teamsPerformance) {
  const mean = meanOf(teamsPerformance);

  let sum = 0;

  for (let index = 0; index < teamsPerformance.length; index++) {
    sum += (teamsPerformance[index] - mean) ** 2;
  }

  return Math.sqrt(sum / teamsPerformance.length);
}

function maxVarient(varientOfTeams) {
  let mostVarientTeam = 0;

  for (let index = 0; index < varientOfTeams.length; index++) {
    if (varientOfTeams[mostVarientTeam] < varientOfTeams[index]) {
      mostVarientTeam = index;
    }
  }

  return mostVarientTeam;
}

function minVarient(varientOfTeams) {
  let leastVarientTeam = 0;

  for (let index = 0; index < varientOfTeams.length; index++) {
    if (varientOfTeams[leastVarientTeam] > varientOfTeams[index]) {
      leastVarientTeam = index;
    }
  }

  return leastVarientTeam;
}

function displayOutput(mostVarientTeam, leastVarientTeam) {
  const saperator = `\n${'-'.repeat(80)}|\n`;
  let msg = `${saperator}${"Team having less variance :".padEnd(80)}|`;
  msg += `${saperator}Team name : ${LISTOFTEAMS[mostVarientTeam][0]}\n`;
  msg += `${('\nTeams Performance :' + LISTOFTEAMS[mostVarientTeam][1]).padEnd(81)}|\n`;
  msg += `\nMedian : ${findMedian(LISTOFTEAMS[mostVarientTeam][1])}${saperator}`;
  msg += `${saperator}Team having more variance:${saperator}`;
  msg += `Team Name : ${LISTOFTEAMS[leastVarientTeam][0]}\n`;
  msg += `\nTeams Performance : ${LISTOFTEAMS[leastVarientTeam][1]}\n`;
  msg += `\nMedian : ${findMedian(LISTOFTEAMS[leastVarientTeam][1])}${saperator}`;

  console.log(msg);
}

function main(listOfTeams) {
  const varientOfTeams = [];

  for (let index = 0; index < listOfTeams.length; index++) {
    varientOfTeams.push(stdDeviationOf(listOfTeams[index][1]));
  }

  const mostVarientTeam = minVarient(varientOfTeams);
  const leastVarientTeam = maxVarient(varientOfTeams);

  displayOutput(mostVarientTeam, leastVarientTeam);
}

main(LISTOFTEAMS);