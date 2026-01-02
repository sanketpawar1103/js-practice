import * as fs from "node:fs";

const concatinated = fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) return err;
  console.log("In outer scope");
  console.log(fs.readFile("./data1.txt", "utf8", (err, data1) => {
    if (err) return err;
    return data + data1;
    // console.log("In inner scope");
  }));

  // console.log("Inner 2");
});

console.log(concatinated);
