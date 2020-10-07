module.exports = function check(str, bracketsConfig) {
  let currentStr = str;
  const sample = bracketsConfig.flat();
  let doubleBrackets = [];

// Собираем скобки из шаблона в пару
  for(let i = 0; i < sample.length; i = i + 2){
    let concat = sample[i] + sample[i + 1];
    doubleBrackets.push(concat);
  }

  for(let i = 0; i < str.length; i++){
    if(currentStr.indexOf(doubleBrackets[0]) > -1){
      currentStr = currentStr.replace(doubleBrackets[0], '');
      }else if(currentStr.indexOf(doubleBrackets[1]) > -1){
        currentStr = currentStr.replace(doubleBrackets[1], '');
      }else if(currentStr.indexOf(doubleBrackets[2]) > -1){
        currentStr = currentStr.replace(doubleBrackets[2], '');
      }else if(currentStr.indexOf(doubleBrackets[3]) > -1){
        currentStr = currentStr.replace(doubleBrackets[3], '');
      }else if(currentStr.indexOf(doubleBrackets[4]) > -1){
        currentStr = currentStr.replace(doubleBrackets[4], '');
      }
    }

    if(currentStr.length === 0){
      return true;
    }else if(currentStr === str){
      return false;
    }else if(currentStr !== doubleBrackets[0] || currentStr !== doubleBrackets[1] || currentStr !== doubleBrackets[2] || currentStr !== doubleBrackets[3] || currentStr !== doubleBrackets[4]){
      return false;
    }
}
