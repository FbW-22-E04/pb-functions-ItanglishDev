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

function returnCubes(numOne, numTwo, numThree) {
  console.log(numOne ** 3 + numTwo ** 3 + numThree ** 3);
}

returnCubes(1, 5, 9);

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
