const stringOfALionAZebraAPatch = "ZZL";
const counterOfString = 0;
let index = 0;
let leastDistance = -1;

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

