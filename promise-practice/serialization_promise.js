const p1 = new Promise((resolve, reject) => {
  console.log("Start promise 1"); //1
  setTimeout(() => {
    console.log("Time 1"); // 4
    resolve(10);
  }, 3000);
});

p1.then((val) => {
  console.log("After 1st resolve", val); //5
  console.log(p1); // 6
  return new Promise((resolve) => {
    console.log("Start promise 2"); // 7
    setTimeout(() => {
      console.log("Time 2"); //8
      resolve(10);
    }, 3000);
  });
}).then((val) => {
  console.log("After 2nd promise", val); //9
});

console.log(p1); // 2
console.log("In globle scope"); //3
