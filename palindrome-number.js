// Function
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let number = x;
  const digits = [];
  let divisor = 10;
  while (number > 0) {
    digits.push(number % divisor);
    number = Math.trunc(number / divisor);
  }
  const reversedDigits = [...digits].reverse();
  for (i = 0; i < digits.length; i++) {
    if (digits[i] != reversedDigits[i]) {
      return false;
    }
  }
  return true;
};

var isPalindromeCGPT = function(x) {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;
  
  while (x > 0) {
    reversed = reversed * 10 + x % 10;
    x = Math.trunc(x / 10);
  }

  return original === reversed;
};


// Test
const number = -121;
const number1 = 121;
const number2 = 21;
console.log('Result: ' + isPalindrome(number));
console.log('Result: ' + isPalindrome(number1));
console.log('Result: ' + isPalindrome(number2));