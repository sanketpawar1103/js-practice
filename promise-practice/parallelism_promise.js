const p1 = new Promise((resolve, reject) => {
  console.log("Start promise 1");
  setTimeout(() => {
    console.log("Time 1");
    resolve(2);
  }, 3000);
  console.log("End promise 1");
});

const p2 = new Promise((resolve, reject) => {
  console.log("Start promise 2");
  setTimeout(() => {
    console.log("Time 2");
    resolve(2);
  }, 3000);
  console.log("End promise 2");
});

p1.then(() => {
  console.log("After 1st resolve");
}).then(() => {
  console.log("After p1 1");
}).then(() => {
  console.log("After p3 1");
});

p2.then(() => {
  console.log("After 2nd promise");
});

Promise.any([p1, p2])
  .then((x) => console.log("any", x))
  .then((x) => console.log("any2", x));

console.log("In globle scope");
