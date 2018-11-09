const numbersLib = require('./generateNumbersForPatterns.js');
const utilLib = require('./utilFunctionForPatterns.js');

const {
  generateFilledLine,
  generateLowerAngled,
  generateHollowLine,
  repeatCharacter,
  justifyDiamond,
  justifyLine,
  generateUpperAngled
} = utilLib;
const {
  generateTriangleNumbers,
  generateDiamondNumbers,
  generateRectangleNumbers,
  groupRectangleNumbers,
  groupDiamondNumbers
} = numbersLib;

const generateFilledRectangle = function(width, height){
  let lineNumbers = generateRectangleNumbers(width, height);
  return lineNumbers.map(generateFilledLine); 
}

console.log(generateFilledRectangle(10,10));
const generateAlternateRectangle = function(width, height){
  let lineNumbers = generateRectangleNumbers(width, height);
  return lineNumbers.map(function(number, index){
    if(index % 2 == 0) return repeatCharacter(width, '*');
    return repeatCharacter(width, '-');
  });
}

console.log(generateAlternateRectangle(10,10));
const generateHollowRectangle = function(width, height){
  let rectangle = [];
  let lineNumbers = generateRectangleNumbers(width, height);
  let groupedNumbers = groupRectangleNumbers(lineNumbers);
  rectangle.push(groupedNumbers[0].map(generateFilledLine));
  rectangle.push(groupedNumbers[1].map(generateHollowLine));
  rectangle.push(groupedNumbers[2].map(generateFilledLine));
  return rectangle.join().split(',');
}

console.log(generateHollowRectangle(10,10));
const generateLeftAlignTriangle = function(height){
  let triangleNumbers = generateTriangleNumbers(height);
  return triangleNumbers.map(generateFilledLine);
}

console.log(generateLeftAlignTriangle(10));
const generateRightAlignTriangle = function(height){
  let triangle = generateLeftAlignTriangle(height);
  return triangle.map(justifyLine);
}

console.log(generateRightAlignTriangle(10));
const generateFilledDiamond = function(height){
  let diamondNumbers = generateDiamondNumbers(height);
  let result = diamondNumbers.map(generateFilledLine);
  return result.map(justifyDiamond);
}

console.log(generateFilledDiamond(9));
const generateHollowDiamond = function(height){
  let diamond = [];
  let diamondNumbers = generateDiamondNumbers(height);
  let groupedNumebrs = groupRectangleNumbers(diamondNumbers);
  diamond.push(groupedNumebrs[0].map(generateFilledLine));
  diamond.push(groupedNumebrs[1].map(generateHollowLine));
  diamond.push(groupedNumebrs[2].map(generateFilledLine));
  return diamond.join().split(',').map(justifyDiamond);
}

console.log(generateHollowDiamond(9));
const generateAngledDiamond = function(height){
  let diamond = [];
  let diamondNumbers = generateDiamondNumbers(height);
  let groupedNumebrs = groupDiamondNumbers(diamondNumbers);
  diamond.push(groupedNumebrs[0].map(generateFilledLine));
  diamond.push(groupedNumebrs[1].map(generateUpperAngled));
  diamond.push(groupedNumebrs[2].map(generateHollowLine));
  diamond.push(groupedNumebrs[3].map(generateLowerAngled));
  diamond.push(groupedNumebrs[4].map(generateFilledLine));
  let result = diamond.join().split(',');
  return result.map(justifyDiamond);
}
console.log(generateAngledDiamond(9));
