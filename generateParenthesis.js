// Functions
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const maxParenthesis = 2 * n, maxCombinations = 2 ** maxParenthesis;
  const result = [];
  for (let i = 0; i < maxCombinations; i++) {
    let combination = '';
    const stackOpenClose = [];
    let num = i;
    for (let j = 0; j < maxParenthesis; j++) {
      combination = (num & 1 ? '(' : ')') + combination;
      num = num >> 1;
    }
    for (let j = 0; j < maxParenthesis; j++) {
      const char = combination.charAt(j);
      if (char == ')') {
        stackOpenClose[stackOpenClose.length - 1] == '(' ?  stackOpenClose.pop() : stackOpenClose.push(char);
      } else {
        stackOpenClose.push(char);
      } 
    }
    if (stackOpenClose.length != 0) {
      continue;
    }
    result.push(combination);
  }
  return result;
};

// Testing
const n1 = 3;
// Output: ["((()))","(()())","(())()","()(())","()()()"]
const n2 = 1
// Output: ["()"]

const n = n1;
console.log(generateParenthesis(n));