const TASKS = [
  ["Task 1"],
  ["Task 2"],
  ["Task 3", "Task 4", "Task 5"],
  ["Task 6"],
];

const executor = async (task, delay) => {
  const startTime = Date.now();
  return await new Promise((resolve, _reject) => {
    setTimeout(() => {
      const endTime = Date.now();
      resolve({ task, startTime, endTime, duration: endTime - startTime });
    }, delay);
  });
};

const main = async () => {
  let time = 0;

  for (const taskArray of TASKS) {
    const taskDetails = await Promise.all(
      taskArray.map((task) => executor(task, time * 500)),
    );
    console.log(taskDetails);
    time += ++time;
  }
};

main();
