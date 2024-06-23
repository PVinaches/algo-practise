// Functions
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (!num || num < 1 || num > 3999) {
    return '';
  }

  const romansDic = [['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1]];
  let result = '', rest = num, quotient = 0, pos = 0; 
  while (pos < 7) {
    quotient = Math.floor(rest / romansDic[pos][1]);
    rest = Math.ceil(rest % romansDic[pos][1]);
    if (quotient > 0) {
      if (pos == 0 && num >= 1000) {
        for (i = 0; i < quotient; i++) {
          result += romansDic[pos][0];
        }
      } else {
        if (quotient == 9) {
          result += romansDic[pos][0] + romansDic[pos - 2][0];
        } else if (quotient == 4) {
          result += romansDic[pos][0] + romansDic[pos - 1][0];
        } else {
          if (quotient >= 5 && quotient < 9) {
            result += romansDic[pos - 1][0];
            quotient -= 5;
          }
          for (i = 0; i < quotient; i++) {
            result += romansDic[pos][0];
          }
        }
      }
    }
    pos += 2;
  }
  return result;
};

// Testing
const num1 = 3749;
const num2 = 58;
const num3 = 1994;
const num4 = 990;

const num = num4;
console.log(intToRoman(num));