// Functions
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let comparable = strs[i];
    if (prefix.length < comparable.length) {
      comparable = comparable.substring(0, prefix.length);
    } else if (prefix.length > comparable.length) {
      prefix = prefix.substring(0, comparable.length);
    }
    while(prefix.length > 0 && prefix != comparable) {
      if (prefix != comparable) {
        prefix = prefix.slice(0, -1);
        comparable = comparable.slice(0, -1);
      }
    }
  }
  return prefix;
};

var longestCommonPrefixCGPT = function(strs) {
  if (strs.length === 0) return "";  
  let prefix = strs[0];
    
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  };
  return prefix;
};

// Test
const words1 = ["flower","flow","flight"];
const words2 = ["dog","racecar","car"];
const words3 = ["flower","flower","flower","flower"];
const words4 = ["abab","aba","abc"];
console.log('Result: ' + longestCommonPrefix(words1));
console.log('Result: ' + longestCommonPrefix(words2));
console.log('Result: ' + longestCommonPrefix(words3));
console.log('Result: ' + longestCommonPrefix(words4));