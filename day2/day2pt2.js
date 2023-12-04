const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(
  path.resolve(__dirname, "./inputClean.csv"),
  "utf-8"
);
const games = text.split("\n");

let sum = 0;

games.map((oneGame) => {
  let greenArr = [];
  let redArr = [];
  let blueArr = [];
  // console.log(oneGame);
  let oneGameArr = oneGame.split(",");
  // console.log(oneGameArr);
  oneGameArr.map((colorAmountStr) => {
    // console.log(colorAmount);
    if (colorAmountStr.includes("green")) {
      //    console.log(colorAmountStr);
      let greenNum = parseInt(colorAmountStr.split(" ")[0]);
      //    console.log(greenNum)
      greenArr.push(greenNum);
    }
    if (colorAmountStr.includes("red")) {
    //   console.log(colorAmountStr);
      let redNum = parseInt(colorAmountStr.split(" ")[0]);
      redArr.push(redNum);
    }
    if (colorAmountStr.includes("blue")) {
    //   console.log(colorAmountStr);
      let blueNum = parseInt(colorAmountStr.split(" ")[0]);
      blueArr.push(blueNum);
    }
  });
  let maxGreenNum = Math.max(...greenArr);
  let maxRedNum = Math.max(...redArr);
  let maxBlueNum = Math.max(...blueArr);
  
  let multNum = maxGreenNum * maxRedNum * maxBlueNum;

  sum = sum + multNum;
});

// console.log(sum);

