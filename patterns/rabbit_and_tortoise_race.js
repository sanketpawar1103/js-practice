const STEP = " ";

const raceLine = (rabbitPassedPath, tortoisePassedPath) => {
  console.clear();
  console.log(`${(rabbitPassedPath + "Rabbit").padEnd(86)}|`);
  console.log(`${(tortoisePassedPath + "Tortoise").padEnd(86)}|`);
};

const isFinish = (rabbitPassedPath, tortoisePassedPath, intervalId) => {
  if ((tortoisePassedPath + "Tortoise").length > 86) {
    clearInterval(intervalId);
    console.log("🏆 : Tortoise Won");
    console.log("😭 : Rabbit lost");
  }

  if ((rabbitPassedPath + "Rabbit").length > 88) {
    clearInterval(intervalId);
    console.log("🏆 : Rabbit Won");
    console.log("😭 : Tortoise lost");
  }
};

const startRace = () => {
  let [rabbitPassedPath, tortoisePassedPath, i] = [STEP, STEP, 0];

  const intervalId = setInterval(() => {
    raceLine(rabbitPassedPath, tortoisePassedPath);
    if (i++ < 6) rabbitPassedPath += STEP.repeat(4);
    if (i > 25) i = 0;

    tortoisePassedPath += STEP;

    isFinish(rabbitPassedPath, tortoisePassedPath, intervalId);
  }, 500);
};

startRace();
