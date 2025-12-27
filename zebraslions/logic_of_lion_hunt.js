const stringOfALionAZebraAPatch = "LLLLZ";
let counterOfString = 0;
let index = 0;
let leastDistance;
let output = 101;

// 1st Iteration
if(counterOfString < stringOfALionAZebraAPatch.length) {
  if(stringOfALionAZebraAPatch[counterOfString] === "L") {

    index = counterOfString + 1;

    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;

    if(leastDistance < output) {
      output = leastdistance;
    }

    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
    
    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
} else if(stringOfALionAZebraAPatch[counterOfString] === "Z") {
    index = counterOfString + 1;

    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;

    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
    
    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
  }
}

counterOfString++;

// 2nd Iteration
if(counterOfString < stringOfALionAZebraAPatch.length) {
  if(stringOfALionAZebraAPatch[counterOfString] === "L") {

    index = counterOfString + 1;

    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;

    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
    
    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
} else if(stringOfALionAZebraAPatch[counterOfString] === "Z") {
    index = counterOfString + 1;

    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;

    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
    
    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
  }
}
console.log(leastDistance);
//  3ed Iteration
counterOfString++;

if(counterOfString < stringOfALionAZebraAPatch.length) {
  if(stringOfALionAZebraAPatch[counterOfString] === "L") {

    index = counterOfString + 1;

    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;

    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
    
    if(stringOfALionAZebraAPatch[index] === "Z"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
} else if(stringOfALionAZebraAPatch[counterOfString] === "Z") {
    index = counterOfString + 1;

    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;

    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
    
    if(stringOfALionAZebraAPatch[index] === "L"){
      leastDistance = (index - counterOfString) - 1;
    } 
    index++;
  }
}

counterOfString++;

// So we can do same thing for length of main string times

console.log(leastDistance);