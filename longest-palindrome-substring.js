// Functions
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length == 0) {
    return '';
  }
  if (s.length == 1) {
    return s;
  }
  let charInit = 0;
  let charFin = 0;
  let i = 0;
  let reverseSubString = '';
  for (j = i; j < s.length; j++) {
    let testingString = s.substring(i, j + 1);
    reverseSubString = s.charAt(j) + reverseSubString;
    if(testingString == reverseSubString && testingString.length > (charFin + 1 - charInit)) {
      charInit = i;
      charFin = j;
    }
    if (j == s.length - 1) {
      reverseSubString = '';
      i++;
      j = i - 1;
    }
  }
  return s.substring(charInit, charFin + 1);
};

// Test
const string1 = "babad";
const string2 = "cbbd";

console.log(longestPalindrome(string1));
console.log(longestPalindrome(string2));