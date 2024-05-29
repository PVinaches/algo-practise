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
  let testingSubString = '';
  let reverseSubString = '';
  while (j < s.length) {
    testingSubString += s.charAt(j);
    reverseSubString = s.charAt(j) + reverseSubString;
    if(testingSubString == reverseSubString && testingSubString.length > (charFin + 1 - charInit)) {
      charInit = i;
      charFin = j;
    }
    if (j == s.length - 1) {
      reverseSubString = '';
      testingSubString = '';
      i++;
      j = i - 1;
    } else {
      j++;
    }
  }
  return s.substring(charInit, charFin + 1);
};

// Dynamic programming solution
var longestPalindrome = function(s) {
  const n = s.length;
  if (n <= 1) return s;
  // Create a 2D array to store whether s[i:j+1] is a palindrome
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  let start = 0;
  let maxLength = 1;
  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  // Check for palindromes of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }
  // Check for palindromes of length greater than 2
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      // Check if s[i:j] is a palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = len;
      }
    }
  }
  return s.substring(start, start + maxLength);
};

// Expand around center solution
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  let start = 0, end = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd length palindromes
    const len2 = expandAroundCenter(i, i + 1); // Even length palindromes
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};


// Test
const string1 = "babad";
const string2 = "cbbd";

console.log(longestPalindrome(string1));
console.log(longestPalindrome(string2));