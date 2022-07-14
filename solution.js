let sumRes = 0;
// let numArg = 4;

function addUp(arg) {
  for (let i = 0; i <= arg; i++) {
    let sumOf = 0;
    sumOf += i;
    sumRes += sumOf;
  }
}
addUp(4);
console.log(sumRes);

// let firstCube = 0;
// let secondCube = 0;
// let thirdCube = 0;

// Ex 2

function returnCubes(numOne, numTwo, numThree) {
  console.log(numOne ** 3 + numTwo ** 3 + numThree ** 3);
}

returnCubes(1, 5, 9);

// Ex 3

function stringCheck(string, word) {
  let stringSli = "";
  stringSli = word.slice(0, 2);
  if (string == stringSli) {
    console.log("true");
  } else {
    console.log("false");
  }
}
// console.log(stringSli);
stringCheck("tu", "tum");

// Ex 4

function lessThan(numOne) {
  if (numOne <= 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
lessThan(0);

// Ex 5

function countOcc(stringOne, stringTwo) {
  let words = stringOne.split(" ");
  let counterOne = 0;
  //   console.log(words);
  for (let i = 1; i < words.length; i++) {
    if (words.includes(stringTwo)) {
      counterOne++;
    } else {
    }
  }
  console.log(counterOne);
}

countOcc("today was a good day", "a");

// Ex 6

function xToThe(baseNum, exponNum) {
  let result = baseNum ** exponNum;
  console.log(result);
}

xToThe(3, 3);
