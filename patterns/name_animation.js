const SPACE = " ";

const raceLine = (rabbitPassedPath, tortoisePassedPath) => {
  console.clear();
  console.log(`${(rabbitPassedPath + "Rabbit").padEnd(85)}|`);
  console.log(`${(tortoisePassedPath + "Tortoise").padEnd(85)}|`);
};

const isFinish = (tortoisePassedPath, intervalId) => {
  if ((tortoisePassedPath + "Tortoise").length === 86) {
    clearInterval(intervalId);
    console.log("🏆 : Tortoise Won");
    console.log("😭 : Rabbit lost");
  }
};

const startRace = () => {
  let [rabbitPassedPath, tortoisePassedPath, i] = [SPACE, SPACE, 0];

  const intervalId = setInterval(() => {
    raceLine(rabbitPassedPath, tortoisePassedPath);
    if (i++ < 6) rabbitPassedPath += SPACE.repeat(4);
    if (i > 25) i = 0;

    tortoisePassedPath += SPACE;

    isFinish(tortoisePassedPath, intervalId);
  }, 500);
};

startRace();
