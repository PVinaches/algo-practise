// Functions
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length == 0) return true;
  if (s.length % 2 != 0) return false;
  const stack = [];
  for (i = 0; i < s.length; i++) {
    if (stack.length == 0 || (s[i] == "(" || s[i] == "[" || s[i] == "{")) {
      stack.push(s[i]);
    } else {
      let lastCharStack = stack[stack.length - 1];
      if ((lastCharStack == "(" && s[i] == ")") || 
        (lastCharStack == "[" && s[i] == "]") || (lastCharStack == "{" && s[i] == "}"))                  {
          stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length > 0 ? false: true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValidchatGPT = function(s) {
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const matchingBrackets = {
      ')': '(',
      ']': '[',
      '}': '{'
  };

  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === '(' || char === '[' || char === '{') {
          stack.push(char);
      } else {
          if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
              return false;
          }
      }
  }

  return stack.length === 0;
};

// Test
const test1 = "()";
const test2 = "()[]{}";
const test3 = "(]";
const test4 = "{[]}";
const test5 = "}{[]}";

console.log(isValid(test1));
console.log(isValid(test2));
console.log(isValid(test3));
console.log(isValid(test4));
console.log(isValid(test5));
