const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8');
const lines = text.split("\n").slice(0, -1);

let firstDigit;
let secondDigit;
let sum = 0;

lines.forEach((line) => {
   let lineArr = line.split("");
   lineArr.forEach((char) => {
    if(parseInt(char) && !firstDigit) {
        firstDigit = char; 
    } else if(parseInt(char)){
        secondDigit = char;
    }
   });
   if (!secondDigit){
    secondDigit = firstDigit;
   }
   let twoDigitNum = parseInt(firstDigit+secondDigit);
   sum = sum + twoDigitNum;

    firstDigit = undefined;
    secondDigit = undefined;
});

console.log(sum);