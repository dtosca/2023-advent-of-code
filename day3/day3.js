const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf-8");

const schematic = text
  .trim()
  .split(/\n/)
  .map((row) => row.split(""));

const xCoorLen = schematic.length;
const yCoorLen = schematic[0].length;
let schematicNums = [];

for (let x = 0; x <= xCoorLen; x++) {
  for (let y = 0; y <= yCoorLen; y++) {
    let valueInCoor = schematic[x][y];
    if (Number.isInteger(parseInt(valueInCoor))) {
      let num = parseNum(valueInCoor, x, y);
      let digits = num.length;
      if (hasSymbol(x, y, digits)) {
        schematicNums.push(num);
        //TODO: skip the digits you checked, if it's in the array
      }
    }
  }
}

function hasSymbol(x, y, digits) {
  //nw n ne
  //w    e
  //sw s se
  //check nw
  if (schematic[x - 1][y + 1] && schematic[x - 1][y + 1] != ".") {
    return true;
  }
  //check n
  else if (schematic[x][y + 1] && schematic[x][y + 1] != ".") {
    return true;
  }
  //check ne
  else if (schematic[x + 1][y + 1] && schematic[x + 1][y + 1] != ".") {
    return true;
  }
  //check w
  else if (schematic[x - 1][y] && schematic[x - 1][y] != ".") {
    return true;
  }
  //check sw
  else if (schematic[x - 1][y - 1] && schematic[x - 1][y - 1] != ".") {
    return true;
  }
  //check s
  else if (schematic[x][y - 1] && schematic[x][y - 1] != ".") {
    return true;
  }
  //check se
  else if (schematic[x + 1][y - 1] && schematic[x + 1][y - 1] != ".") {
    return true;
  }
  //check e, might be a number
  else if (schematic[x + 1][y] && schematic[x + 1][y] != ".") {
    return true;
  }
  if(digits == 2){
    //TODO check around the second digits
  }
  if(digits == 3){
    //TODO check aount the third digit
  }
  return false;
}

//TODO
function parseNum(num, x, y) {

}