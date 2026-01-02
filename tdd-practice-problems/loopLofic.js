let binaryNumber = 1010101;   //need code
let subString = "010";
let lengthOfASubString = 3;   //need code
let comparisonString = "";
let bit;
let counter = 0;
let answer = 0;
let binaryNumberCopy;

// 1
binaryNumberCopy = binaryNumber;

while(counter < lengthOfASubString){
  comparisonString = comparisonString + (binaryNumberCopy % 10);
  
  if((binaryNumberCopy % 10) !== 0){
    binaryNumberCopy = ((binaryNumberCopy / 10) - 0.1);
  } else {
    binaryNumberCopy = binaryNumberCopy / 10;
  }
  counter++;
}

if(comparisonString === subString) {
  answer++;
}

if((binaryNumber % 10) !== 0){
    binaryNumber = ((binaryNumber / 10) - 0.1);
  } else {
    binaryNumber = binaryNumber / 10;
  }

// 2
binaryNumberCopy = binaryNumber;

while(counter < lengthOfASubString){
  comparisonString = comparisonString + (binaryNumberCopy % 10);
  
  if((binaryNumberCopy % 10) !== 0){
    binaryNumberCopy = ((binaryNumberCopy / 10) - 0.1);
  } else {
    binaryNumberCopy = binaryNumberCopy / 10;
  }
  counter++;
}

if(comparisonString === subString) {
  answer++;
}

if((binaryNumber % 10) !== 0){
    binaryNumber = ((binaryNumber / 10) - 0.1);
  } else {
    binaryNumber = binaryNumber / 10;
  }

// 3
binaryNumberCopy = binaryNumber; 

while(counter < lengthOfASubString){
  comparisonString = comparisonString + (binaryNumberCopy % 10);
  
  if((binaryNumberCopy % 10) !== 0){
    binaryNumberCopy = ((binaryNumberCopy / 10) - 0.1);
  } else {
    binaryNumberCopy = binaryNumberCopy / 10;
  }
  counter++;
}

if(comparisonString === subString) {
  answer++;
}

if((binaryNumber % 10) !== 0){
    binaryNumber = ((binaryNumber / 10) - 0.1);
  } else {
    binaryNumber = binaryNumber / 10;
  }

// 4
binaryNumberCopy = binaryNumber; 

while(counter < lengthOfASubString){
  comparisonString = comparisonString + (binaryNumberCopy % 10);
  
  if((binaryNumberCopy % 10) !== 0){
    binaryNumberCopy = ((binaryNumberCopy / 10) - 0.1);
  } else {
    binaryNumberCopy = binaryNumberCopy / 10;
  }
  counter++;
}

if(comparisonString === subString) {
  answer++;
}

if((binaryNumber % 10) !== 0){
    binaryNumber = ((binaryNumber / 10) - 0.1);
  } else {
    binaryNumber = binaryNumber / 10;
  }

// 5
binaryNumberCopy = binaryNumber; 

while(counter < lengthOfASubString){
  comparisonString = comparisonString + (binaryNumberCopy % 10);
  
  if((binaryNumberCopy % 10) !== 0){
    binaryNumberCopy = ((binaryNumberCopy / 10) - 0.1);
  } else {
    binaryNumberCopy = binaryNumberCopy / 10;
  }
  counter++;
}

if(comparisonString === subString) {
  answer++;
}

if((binaryNumber % 10) !== 0){
    binaryNumber = ((binaryNumber / 10) - 0.1);
  } else {
    binaryNumber = binaryNumber / 10;
  }

console.log("Binary Number = ", binaryNumber);
console.log("Answer = ", answer);



