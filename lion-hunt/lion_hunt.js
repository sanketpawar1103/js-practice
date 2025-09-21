const testCase1 = "LZZL";            //output : 0
const testCase2 = "LZZ";             //output : 0
const testCase3 = "Z   Z";           //output : -1
const testCase4 = "LL";              //output : -1
const testCase5 = "Z   L   L";       //output : 3
const testCase6 = "LZ   ZL";         //output : 0
const testCase7 = "L          Z";    //output : 10
const testCase8 = "L  Z  L";         //output : 2
const testCase9 = "LZ   Z";          //output : 0
const testCase10 = "";               //output : -1
const testCase11 = "LL  Z  LL";      //output : 2
const testCase12 = "Z   ZL";         //output : 0
const testCase13 = "    Z";          //output : -1
const testCase14 = "    ";           //output : -1

const testCaseToUse = testCase14;
const stringOfALionAZebraAPatch = testCaseToUse;

let counterOfString = 0;
let index = 0;
let leastDistance;
let output = 101;

while(counterOfString < stringOfALionAZebraAPatch.length) {

  if(stringOfALionAZebraAPatch[counterOfString] === "L") {
    index = counterOfString + 1;

    while(index < stringOfALionAZebraAPatch.length){

      if(stringOfALionAZebraAPatch[index] === "Z"){
        leastDistance = (index - counterOfString) - 1;
      } 

      if(leastDistance < output) {
        output = leastDistance;
      }

      index++;
    }

  } else if(stringOfALionAZebraAPatch[counterOfString] === "Z") {
    index = counterOfString + 1;

    while(index < stringOfALionAZebraAPatch.length){

      if(stringOfALionAZebraAPatch[index] === "L"){
        leastDistance = (index - counterOfString) - 1;
      }

      if(leastDistance < output) {
        output = leastDistance;
      }

      index++;
    }

  } 

  counterOfString++;
}

if(output !== 101) {
  console.log("Input: ", stringOfALionAZebraAPatch, "Output: ", output);
} else {
  console.log("Input: ", stringOfALionAZebraAPatch, "Output: -1");
}
