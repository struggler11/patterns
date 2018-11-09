const generateFilledLine = function(width){
  return new Array(width).fill('*').join('');
}

const generateHollowLine = function(width){
  if(width == 1) return '*';
  let line = new Array(width-2).fill(' ').join('');
  return '*' + line + '*';
}

const generateUpperAngled = function(width){
  let line = new Array(width-2).fill(' ').join('');
  return '/' + line + '\\';
}

const generateLowerAngled = function(width){
  let line = new Array(width-2).fill(' ').join('');
  return '\\' + line + '/';
}

const repeatCharacter = function(width, character){
  return new Array(width).fill(character).join('');
}

const justifyLine = function(line, index, pattern){
  let numberOfSpace = pattern.length - line.length;
  let spaces = new Array(numberOfSpace).fill(' ').join('');
  return spaces + line;
}

const justifyDiamond = function(line, index, pattern){
  let numberOfSpace = (pattern.length - line.length)/2;
  let spaces = new Array(numberOfSpace).fill(' ').join('');
  return spaces + line + spaces;
}

module.exports = {
  justifyDiamond,
  justifyLine,
  repeatCharacter,
  generateLowerAngled,
  generateUpperAngled,
  generateFilledLine,
  generateHollowLine
};
