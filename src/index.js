module.exports = function check(str, bracketsConfig) {
  let compareResult = [],
      firstBrackets = [],
      secondBrackets = [];

  bracketsConfig.forEach(element => {
    firstBrackets.push(element[0]);
    secondBrackets.push(element[1]);
  });

  for (let i = 0; i < str.length; i++) {
    let currentSymbolOfString = str[i],
        firstBracketsIndex, 
        secondBracketsIndex; 

    firstBracketsIndex = findCurrentIndex(firstBrackets, currentSymbolOfString);
    secondBracketsIndex = findCurrentIndex(secondBrackets, currentSymbolOfString);

    if ((firstBracketsIndex !== -1 && secondBracketsIndex !== -1 && compareResult.indexOf(currentSymbolOfString) === -1)) {
      compareResult.push(currentSymbolOfString);
    } else if ((firstBracketsIndex !== -1 && secondBracketsIndex === -1)) {
      compareResult.push(currentSymbolOfString); 
    } else {
      if (compareResult.pop() !== firstBrackets[secondBracketsIndex]) {
        return false;
      }
    }
  }
  return compareResult.length === 0;
}

function findCurrentIndex(arr, symbol) {
  return arr.indexOf(symbol);
}
