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

// Ex 7

function dogYears(humanYears) {
  console.log("Your doggo is", humanYears * 7, "years old in dog years");
}

dogYears(7);

// Ex 8

function aLifetime(age, numOfSnacks, maxAge) {
  let ageDiff = 0;

  if (maxAge == 100) {
    ageDiff = 100 - age;
    console.log(Math.ceil(ageDiff * 365.25 * numOfSnacks));
  } else {
    ageDiff = maxAge - age;
    console.log(Math.ceil(ageDiff * 365.25 * numOfSnacks));
  }
}

aLifetime(32, 2, 65);

// Ex 9

function whereIsWaldo(question) {
  let questionArray = "";
  questionArray = question.split(" ");
  if (questionArray.includes("waldo")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

whereIsWaldo("Is he anywhere?");

// Ex 10

function pie(numOfSli, numOfRec, slicesPerP) {
  if (numOfRec * slicesPerP > numOfSli) {
    console.log(false);
  } else {
    console.log(true);
  }
}

pie(24, 12, 2);

// Ex 11

function xo(string) {
  let stringArray = "";
  stringArray = string.split("");
  //   console.log(stringArray);
  let oCounter = 0;
  let xCounter = 0;
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "x") {
      xCounter++;
    } else if (stringArray[i] === "o") {
      oCounter++;
    } else {
      //   console.log("none 11", true);
    }
  }
  if (xCounter === oCounter) {
    console.log(true, "11");
  } else {
    console.log(false, "11");
  }
}

xo("oooxx");

// Ex 12

function isPrime (integer) (
    if (condition) {
        
    } else {
        
    }
)

// Ex 13

function email(string) {
  let stringArray = "";
  stringArray = string.split("");
  if (stringArray.includes("@")) {
    if (stringArray.includes(".")) {
    } else {
    }
  } else {
    console.log(false, "invalid");
  }
}

email("email@email.it");
