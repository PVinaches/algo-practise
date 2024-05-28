// Function
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s == " " || s.length == 1) return 1;
  let substringLength = 0, i = 0, j = 0;
  const dictionary = {};
  while (i < s.length - 1) {
      let substring = s.substring(i, j + 1);
      let charInitial = s.charAt(i);
      let charFinal = s.charAt(j);
      if (!dictionary[charFinal] || dictionary[charFinal] == 0) {
          dictionary[charFinal] = 1;
          if (substringLength < substring.length) {
              substringLength = substring.length;
          }
          j++;
      } else {
          dictionary[charInitial] = 0;
          i++;
      }
  }
  return substringLength;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringChatGPT = function(s) {
  if (!s) return 0;
  
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
      const char = s[end];
      
      if (charIndexMap.has(char)) {
          // Move start to the right of the last occurrence of char
          start = Math.max(start, charIndexMap.get(char) + 1);
      }

      // Update the last seen index of the char
      charIndexMap.set(char, end);
      
      // Calculate the max length of the substring
      maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};


// Test
const string1 = "abcabcbb";
const string2 = "bbbbb";
const string3 = "pwwkew";
const string4 = " ";
const string5 = "c";

console.log(lengthOfLongestSubstring(string1));
console.log(lengthOfLongestSubstring(string2));
console.log(lengthOfLongestSubstring(string3));
console.log(lengthOfLongestSubstring(string4));
console.log(lengthOfLongestSubstring(string5));