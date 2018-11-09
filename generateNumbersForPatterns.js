const generateRectangleNumbers = function(width,height){
  return rectangleNumbers = new Array(height).fill(width);
}
const groupRectangleNumbers = function(numbers){
  let result = [[],[],[]];
  result[0] = numbers.slice(0,1);
  result[1] = numbers.slice(1,numbers.length-1);
  result[2] = numbers.slice(numbers.length-1);
  return result;
}

const generateDiamondNumbers = function(height){
  let count = 1;
  let numbers = [];
  for(let index = 0; index < height; index++){
    let tempNumber = Math.abs(height - count)/2 ;
    let secondTempNumber = height - (2 * tempNumber);
    numbers.push(secondTempNumber);
    count = count + 2;
  }
  return numbers;
}

const groupDiamondNumbers = function(numbers){
  let result = [[],[],[],[],[]];
  result[0] = numbers.slice(0,1);
  result[1] = numbers.slice(1,((numbers.length-1)/2));
  result[2] = numbers.slice(((numbers.length-1)/2),((numbers.length-1)/2)+1);
  result[3] = numbers.slice(((numbers.length-1)/2)+1,(numbers.length-1));
  result[4] = numbers.slice(numbers.length-1);
  return result;
}

const generateTriangleNumbers = function(height){
  let numebrs = [];
  for(let index = 0; numebrs.push(++index),index < height;);
  return numebrs;
}

module.exports = {
  generateTriangleNumbers,
  generateDiamondNumbers,
  generateRectangleNumbers,
  groupDiamondNumbers,
  groupRectangleNumbers,
};
