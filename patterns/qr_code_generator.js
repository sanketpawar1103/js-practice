console.log("qr code generator pattern.!!!");

const areSamePoints = (pos1, pos2) =>
  pos1[0] === pos2[0] && pos1[1] === pos2[1];

const isMatch = (crrtBlock, coordinates) => {
  for (let i = 0; i < coordinates.length; i++) {
    const block = coordinates[i];
    if (areSamePoints(crrtBlock, block)) {
      return true;
    }
  }

  return false;
};

const decideBlock = (crrtBlock, coordinates) =>
  !isMatch(crrtBlock, coordinates) ? "⬜️" : "⬛️";

const generateQrCode = (coordinates) => {
  for (let i = 0; i < 10; i++) {
    let line = "";
    for (let j = 0; j < 10; j++) {
      line += decideBlock([i, j], coordinates);
    }

    console.log(line);
  }
};

const randomPoint = () => Math.floor(Math.random() * 10);

const blocks = () => {
  const coordinates = [];

  for (let i = 0; i < 50; i++) {
    coordinates.push([randomPoint(), randomPoint()]);
  }

  return coordinates;
};

const main = () => {
  const coordinates = blocks();

  generateQrCode(coordinates);
};

main();