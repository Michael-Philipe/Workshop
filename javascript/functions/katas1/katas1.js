function oneThroughTwenty(num) {
  let output = [];
  for (let i = 1; i <= num; i++) {
    output.push(i);
    // output += `${i},`
  }
  return output;
}
console.log(oneThroughTwenty(20));
//call function oneThroughTwenty

function evensToTwenty(num) {
  let output = [];
  for (let i = 2; i <= 20; i = i += 2) {
    output.push(i);
  }
  return output;
}
console.log(evensToTwenty(20));
//call function evensToTwenty

function oddsToTwenty() {
  let output = [];
  for (let i = 1; i <= 20; i = i += 2) {
    output.push(i);
  }
  return output;
}
console.log(oddsToTwenty(20));

//call function oddsToTwenty

function multiplesOfFive(num) {
  let output = [];
  for (let i = 5; i <= num; i += 5) {
    output.push(i);
  }
  return output;
}
console.log(multiplesOfFive(100));
//call function multiplesOfFive

function squareNumbers(num) {
  let output = [];
  for (let i = 1; i <= num; i++) {
    output.push(i * i);
  }
  return output;
}
console.log(squareNumbers(10));
//call function squareNumbers

function countingBackwards(num) {
  let output = [];
  for (let i = num; i >= 1; i--) {
    output.push(i);
  }
  return output;
}
console.log(countingBackwards(20));
//call function countingBackwards

function evenNumbersBackwards(num) {
  let output = [];
  for (let i = num; i >= 1; i -= 2) {
    output.push(i);
  }
  return output;
}
console.log(evenNumbersBackwards(20));
//call function evenNumbersBackwards

function oddNumbersBackwards(num) {
  let output = [];
  for (let i = num; i >= 1; i -= 2) {
    output.push(i);
  }
  return output;
}
console.log(oddNumbersBackwards(19));
//call function oddNumbersBackwards

function multiplesOfFiveBackwards(num) {
  let output = [];
  for (let i = num; i >= 5; i -= 5) {
    output.push(i);
  }
  return output;
}
console.log(multiplesOfFiveBackwards(100));
//call function multiplesOfFiveBackwards

function squareNumbersBackwards(num) {
  let output = [];
  for (let i = num; i >= 1; i--) {
    output.push(i * i);
  }
  return output;
}
console.log(squareNumbersBackwards(10));
//call function squareNumbersBackwards
