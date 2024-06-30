// Funtions
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  /**
   * @param {string} digits
   * @param {string[]} result
   * @param {number} round
   * @param {round} times
   * @return {string[]}
   */
  function getResult(digits, result, round, times) {
    if (round == times) return result;
    const letterCombinations = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], 
    ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
  
    const digit = parseInt(digits.charAt(round)) - 2;
    const letters = letterCombinations[digit];
    let iterDigits = result;
    result = [];
  
    for (j = 0; j < letters.length; j++) {
      if (iterDigits.length > 0) {
        for (i = 0; i < iterDigits.length; i++) {
          result.push(iterDigits[i] + letters[j]);
        }
      } else {
        result.push(letters[j]);
      }
    }
    round++;  
    return getResult(digits, result, round, times);
  }

  if (digits.length == 0) return [];
  
  const result = [], round = 0, times = digits.length;

  return getResult(digits, result, round, times);
};

// Testing
const digits1 = "23";
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const digits2 = [];
// Output: []
const digits3 = "2";
// Output: ["a","b","c"]
const digits4 = "234";
const digits5 = "2345";

const digits = digits3;
console.log(letterCombinations(digits));