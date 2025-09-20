const stringOfALionAZebraAPatch = "LLL";
let counterOfString = 0;
let index = 0;
let leastDistance = -1;

// 1st Iteration
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
