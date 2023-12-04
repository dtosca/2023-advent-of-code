const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf-8");
const games = text.split("\n").slice(0, -1);

const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;

let allPossibleGameIDs = [];

games.map((oneGame) => {
  let oneGameArr = oneGame.split(":");
  if (isPossibleGame(oneGameArr)) {
    let gameId = oneGameArr[0].split(" ")[1];
    allPossibleGameIDs.push(gameId);
  }
});

const initialValue = 0;
let sumIDs = allPossibleGameIDs.reduce(
  (accumulator, currentValue) => accumulator + Number(currentValue),
  initialValue
);

// console.log(allPossibleGameIDs);
// console.log(sumIDs);

function isPossibleGame(oneGame) {
  let possibleGameBool = true;
  let gameSets = oneGame[1];

  let gameSetsArr = gameSets.split(";");
  gameSetsArr.forEach((oneSet) => {
    if (!isPossibleSet(oneSet)) {
      possibleGameBool = false;
    }
  });
  console.log(possibleGameBool);
  return possibleGameBool;
}

function isPossibleSet(set) {
  let possibleSetBool = true;
  let oneSetArr = set.split(",");
  oneSetArr.forEach((cubesStr) => {
    if (cubesStr.includes("green")) {
      let num = cubesStr.trim().split(" ")[0];
      if (num > greenCubes) {
        possibleSetBool = false;
      }
    } else if (cubesStr.includes("red")) {
      let num = cubesStr.trim().split(" ")[0];
      if (num > redCubes) {
        possibleSetBool = false;
      }
    } else if (cubesStr.includes("blue")) {
      let num = cubesStr.trim().split(" ")[0];
      if (num > blueCubes) {
        possibleSetBool = false;
      }
    }
  });
  return possibleSetBool;
}
