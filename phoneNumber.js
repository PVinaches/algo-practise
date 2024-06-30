// Funtions
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length == 0) return [];

  const letterCombinations = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], 
  ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
  
  if (digits.length == 1) return letterCombinations[parseInt(digits) - 2];

  let result = [];
  const digit1 = letterCombinations[parseInt(digits.charAt(0)) - 2];
  const digit2 = letterCombinations[parseInt(digits.charAt(1)) - 2];
  for (i = 0; i < digit1.length; i++) {
    for (j = 0; j < digit2.length; j++) {
      result.push(digit1[i] + digit2[j]);
    }
  }

  if (digits.length == 2) return result;

  const times = digits.length - 2;
  const digit3 = letterCombinations[parseInt(digits.charAt(2)) - 2];
  let digit4 = undefined ;
  if (digits.length == 4) {
    digit4 = letterCombinations[parseInt(digits.charAt(3)) - 2];
  }

  let round = 0;
  while (round < times) {
    let iterDigits = result;
    result = [];

    for (i = 0; i < iterDigits.length; i++) {
      for (j = 0; j < (round == 0 ? digit3.length : digit4.length); j++) {
        result.push(iterDigits[i] + (round == 0 ? digit3[j] : digit4[j]));
      }
    }

    round++;
  }
  
  return result;
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

const digits = digits5;
console.log(letterCombinations(digits));