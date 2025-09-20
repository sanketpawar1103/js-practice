
const testCase1 = "LZL   Z";
const testCase2 = "L  Z  ";
const testCase3 = "    ";

const testCaseToUse = testCase3;
const stringOfALionAZebraAPatch = testCaseToUse;

let counterOfString = 0;
let index = 0;
let leastDistance = -1;
let output = 101;

while(counterOfString < stringOfALionAZebraAPatch.length) {

  if(stringOfALionAZebraAPatch[counterOfString] === "L") {
    index = counterOfString + 1;

    while(index < stringOfALionAZebraAPatch.length){
      if(stringOfALionAZebraAPatch[index] === "Z"){
        leastDistance = (index - counterOfString) - 1;
      } 
      index++;
    }

  } else if(stringOfALionAZebraAPatch[counterOfString] === "Z") {
    index = counterOfString + 1;

    while(index < stringOfALionAZebraAPatch.length){
      if(stringOfALionAZebraAPatch[index] === "L"){
        leastDistance = (index - counterOfString) - 1;
      } 
      index++;
    }

  }

  if(leastDistance < output) {
    output = leastDistance;
  } 

  counterOfString++;
}

if(output !== 101) {
  console.log("Input: ", stringOfALionAZebraAPatch, "Output: ", output);
} else {
  console.log("Input: ", stringOfALionAZebraAPatch, "Output: -1");
}
