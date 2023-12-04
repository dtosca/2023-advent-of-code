const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8');
const lines = text.split("\n").slice(0, -1);

const numStrs = [
'one',
'two',
'three',
'four',
'five',
'six',
'seven',
'eight',
'nine',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9'
];

// const numStrsReverse = numStrs.map((numStr) => numStr.split("").reverse().join(""));
numStrsReverse = [ 'eno',
  'owt',
  'eerht',
  'ruof',
  'evif',
  'xis',
  'neves',
  'thgie',
  'enin',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9' ]

let firstDigit;
let secondDigit;
let sum = 0;

function findFirstDigit(str) {
    for(let i = 0; i <= str.length; i++){
        for(let j = 0; j<= str.length; j++){
            for(let k = 0; k < numStrs.length; k++){
                if (str.substring(i, j) == numStrs[k]){
                    console.log(str, i, j)
                    return parseFirstDigit(str.substring(i,j)).toString();
                }
            }
        };
    }
}


function findSecondDigit(str) {
    for(let i = 0; i <= str.length; i++){
        for(let j = 0; j<= str.length; j++){
            for (let k = 0; k < numStrsReverse.length; k++) {
                if (str.substring(i, j) == numStrsReverse[k]){
                    return parseSecondDigit(str.substring(i,j)).toString();
                }
            };
        }
    }
}

function parseFirstDigit(strNum) {
   if(parseInt(strNum)){
    return parseInt(strNum);
   } 
   return numStrs.findIndex(el => el === strNum) + 1;
}

function parseSecondDigit(strNum) {
   if(parseInt(strNum)){
    return parseInt(strNum);
   } 
   return numStrsReverse.findIndex(el => el === strNum) + 1;
}

lines.forEach((line) => {
   firstDigit = findFirstDigit(line);
   secondDigit = findSecondDigit(line.split('').reverse().join(''));
   console.log(firstDigit, secondDigit)
   let twoDigitNum = parseInt(firstDigit+secondDigit);
   console.log(twoDigitNum) 
   sum = sum + twoDigitNum;
});

console.log(sum);