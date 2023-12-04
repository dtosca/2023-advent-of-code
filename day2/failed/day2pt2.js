const fs = require('fs');
const path = require('path');
const { createUnzip } = require('zlib');
const text = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8');
const games = text.split("\n").slice(0, -1);

let multArr = [];

games.map((oneGame) =>{
    let oneGameArr = oneGame.split(":")[1];
    // console.log(oneGameArr);
    biggestNumsInGame(oneGameArr);
});

// const initialValue = 0;
// let sums = multArr.reduce(
//   (accumulator, currentValue) => accumulator + Number(currentValue),
//   initialValue,
// );

// console.log(sums);

function biggestNumsInGame(game){
    let gameArr = game.split(";");

    gameArr.forEach(sets=> {
        biggestNumsInSet(sets);
    });
}



function biggestNumsInSet(sets){
    let greenArr = [];
    let redArr = [];
    let blueArr = [];
    
    let multNum;

    let oneSetArr = sets.split(",");
    //  console.log(oneSetArr);

    oneSetArr.forEach(cubesStr => {
        // console.log(cubesStr);
        if(cubesStr.includes("green")){
            let greenNum = parseInt(cubesStr.trim().split(" ")[0]);
            // console.log(greenNum);
            greenArr.push(greenNum);
        }
        else if(cubesStr.includes("red")){
            let redNum = parseInt(cubesStr.trim().split(" ")[0]);
            // console.log(greenNum);
            redArr.push(redNum);
        }
        else if(cubesStr.includes("blue")){
            let blueNum = parseInt(cubesStr.trim().split(" ")[0]);
            // console.log(greenNum);
            blueArr.push(blueNum);
        }
    });

    // multNum = greenNumSet * redNumSet * blueNumSet;
    // console.log(multNum)
    // multArr.push(multNum);
}
